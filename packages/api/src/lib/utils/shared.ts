import { authOptions } from '@magickml/portal-auth'
import { decode, encode } from 'next-auth/jwt'
import { prisma } from '@magickml/portal-db'
import { SignedInAuthObject, emails } from '@clerk/clerk-sdk-node'

interface PrepareTokenParams {
  user: SignedInAuthObject
  projectId: string
}

// this function is duct tapped to support the old way of checking access
// the aide expects next-auth tokens but thats deprecated in the portal
// we can setup a similar method to hasAccess in the aide
// for now were just going to verify with hasAccess and write a new next-auth style token
export async function prepareToken(
  params: PrepareTokenParams
): Promise<string> {
  const access = await hasAccess(params)

  if (!access) {
    throw new Error('No access to project')
  }

  return await encode({
    token: {
      user: {
        id: params.user.userId,
        email: params.user.user?.emailAddresses[0].emailAddress,
        permissions: ['owner:*'],
      },
      project: params.projectId,
    },
    secret: authOptions.secret as string,

    maxAge: 24 * 60 * 60, // 24 hours
  })
}

interface HasAccessParams {
  user: SignedInAuthObject
  projectId: string
}

export async function hasAccess(params: HasAccessParams): Promise<boolean> {
  return !!(await prisma.project.findFirst({
    where: {
      id: params.projectId,
      owner: params.user.orgId || params.user.userId,
    },
  }))
}
