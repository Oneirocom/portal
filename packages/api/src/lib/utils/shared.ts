import { getAuthOptions } from '@magickml/portal-auth'
import { decode, encode } from 'next-auth/jwt'
import { createClient } from '@supabase/supabase-js'
import { OpenMeter } from '@openmeter/sdk'
import { prisma } from '@magickml/portal-db'
import { TRPCError } from '@trpc/server'

export const prepareToken = async (ctx: any, input: { projectId: string }) => {
  // decode the token
  const decodedToken = await decode({
    token: ctx.token as string,
    secret: (await getAuthOptions()).secret as string,
  })
  if (!decodedToken) {
    throw new Error('Invalid token')
  }

  // check if the user has access to the project
  const access = await hasAccess(decodedToken?.user.id, input.projectId)

  if (!access) {
    throw new Error('No access to project')
  }

  // add project to token
  const newToken = await encode({
    token: {
      ...decodedToken,
      user: {
        ...decodedToken.user,
        permissions: ['owner:*'],
      },
      project: input.projectId,
    },
    secret: (await getAuthOptions()).secret as string,

    maxAge: 24 * 60 * 60, // 24 hours
  })

  return newToken
}

export const supabase = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_KEY || ''
)

export const uploadImage = async (
  base64Image: string,
  id: string,
  bucketName: string,
  pathPrefix: string
): Promise<string | null> => {
  const imageExt = '.png' // Set the default extension or extract from base64 string
  const mimeType = 'image/png' // Set the default mime type or extract from base64 string

  const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, '')
  const bufferData = Buffer.from(base64Data, 'base64')

  // Upload the base64 image data to the storage service
  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(`${pathPrefix}/${id}${imageExt}`, bufferData, {
      contentType: mimeType,
      upsert: true,
    })

  if (error) {
    throw error
  }

  return data.path
}

export const openmeter = new OpenMeter({
  baseUrl: process.env.OPENMETER_ENDPOINT || '',
})

export const checkIfUserIsMember = async (
  workspaceId: string,
  userId: string,
  highPrivilege = false
) => {
  const userMembership = await prisma.workspace_members.findUnique({
    where: {
      workspace_id_user_id: {
        workspace_id: workspaceId,
        user_id: userId,
      },
    },
  })

  if (!userMembership) {
    // throw new Error('User is not a member of the specified workspace');
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'User is not a member of the specified workspace',
      cause: new Error('User is not a member of the specified workspace'),
    })
  }

  if (userMembership.status !== 'accepted') {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'User is not a member of the specified workspace',
      cause: new Error('User is not a member of the specified workspace'),
    })
  }

  if (highPrivilege) {
    if (userMembership?.role === 'member' || null) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message:
          'User does not have permission to invite to the specified workspace',
        cause: new Error(
          'User does not have permission to invite to the specified workspace'
        ),
      })
    }
  }
  return userMembership
}

export function serializeBigints(obj: any): any {
  if (obj === null) return null
  if (typeof obj !== 'object') return obj

  if (typeof obj === 'bigint') return obj.toString()

  for (const key in obj) {
    obj[key] = serializeBigints(obj[key])
  }

  return obj
}

// Function to check if the user has access to a project
export async function hasAccess(
  userId: string,
  projectId: string
): Promise<boolean> {
  // Check if the user is the project owner
  const isProjectOwner = await prisma.project.findFirst({
    where: {
      id: projectId,
      creatorId: userId,
    },
  })

  if (isProjectOwner) {
    return true
  }

  // Check if the user is a team member
  const isTeamMember = await prisma.member.findFirst({
    where: {
      projectId: projectId,
      email: {
        equals: (
          await prisma.user.findUnique({ where: { id: userId } })
        )?.email as string,
      },
      status: 'ACCEPTED',
    },
  })

  if (isTeamMember) {
    return true
  }

  // User has no access to the project
  return false
}
