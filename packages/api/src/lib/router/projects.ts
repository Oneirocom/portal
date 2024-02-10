import { z } from 'zod'
import { createTRPCRouter, protectedProcedure } from '../trpc'
import { prisma } from '@magickml/portal-db'
import { InvitationStatus, TeamRole } from '@magickml/portal-db'
import { checkIfUserIsMember, prepareToken } from '../utils/shared'
import starterTemplate from '../templates/projects/starter.project.json'
import discordTemplate from '../templates/projects/discord.project.json'
import restTemplate from '../templates/projects/rest.project.json'
import documentSearchTemplate from '../templates/projects/documentSearch.project.json'
import elizaTemplate from '../templates/projects/ELIZA.project.json'
import { uploadImage } from '../utils/upload'
import { v4 as uuidv4 } from 'uuid'

export const projectsRouter = createTRPCRouter({
  // Create a project
  createProject: protectedProcedure
    .input(
      z.object({
        workspaceId: z.string(),
        name: z.string(),
        description: z.string().optional(),
        completed: z.boolean().optional(),
        templateId: z.number().optional(),
        base64Image: z.string().optional().nullable(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { base64Image } = input
      const userId = ctx.session.user.id
      const email = ctx.session.user.email as string
      const completed = input.completed || true
      const templateId = input.templateId || 0
      const id = uuidv4()

      const userMembership = await checkIfUserIsMember(
        input.workspaceId,
        ctx.session.user.id,
        false
      )

      if (!userMembership) {
        throw new Error('User is not a member of the specified workspace')
      }

      let filePath: string | null = null

      // Handle the base64 image data
      if (base64Image) {
        const imgResponse = await uploadImage(id, base64Image, 'projectAvatar')
        filePath = `/projects/${id}/avatar.jpg?${imgResponse.VersionId}`
      }

      const project = await prisma.project.create({
        data: {
          creatorId: userId,
          image: filePath,
          description: input.description,
          workspace_id: input.workspaceId,
          members: {
            create: {
              email: email,
              inviter: email,
              status: InvitationStatus.ACCEPTED,
              teamRole: TeamRole.OWNER,
            },
          },
          name: completed ? input.name : `project-${input.name}`,
          slug: '',
          completed: completed || true,
        },
      })

      if (templateId !== 0) {
        const newToken = await prepareToken(ctx, { projectId: project.id })
        await createProjectData(newToken, {
          projectId: project.id,
          templateId,
        })
      }

      return project
    }),

  // Get all projects for the current user
  getProjects: protectedProcedure
    .input(z.object({ workspaceId: z.string() }))
    .query(async ({ ctx, input }) => {
      const userMembership = await checkIfUserIsMember(
        input.workspaceId,
        ctx.session.user.id,
        false
      )

      if (!userMembership) {
        throw new Error('User is not a member of the specified workspace')
      }

      if (userMembership.status !== 'accepted') {
        throw new Error('User is not a member of the specified workspace')
      }

      // If user is a member, fetch the projects within the workspace
      const projects = await prisma.project.findMany({
        where: {
          workspace_id: input.workspaceId,
          deletedAt: null,
          completed: true,
        },
      })

      return projects
    }),

  // Get all projects for the current user
  getProjectList: protectedProcedure
    .input(z.object({ workspaceId: z.string() }))
    .query(async ({ ctx, input }) => {
      const userMembership = await checkIfUserIsMember(
        input.workspaceId,
        ctx.session.user.id,
        false
      )

      if (!userMembership) {
        throw new Error('User is not a member of the specified workspace')
      }

      return await prisma.project.findMany({
        where: {
          workspace_id: input.workspaceId,
          deletedAt: null,
          completed: true,
        },
        select: {
          id: true,
          name: true,
          image: true,
        },
        orderBy: {
          lastActive: 'desc',
        },
      })
    }),

  // Get a specific project by ID
  getProject: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .query(async ({ input, ctx }) => {
      const userId = ctx.session.user.id
      return await prisma.project.findFirst({
        where: { id: input.projectId, creatorId: userId, completed: true },
      })
    }),

  // Update a project
  updateProject: protectedProcedure
    .input(
      z.object({
        projectId: z.string(),
        workspaceId: z.string().optional(),
        name: z.string().optional(),
        description: z.string().optional(),
        slug: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const access = await checkIfUserIsMember(
        input.workspaceId || '',
        ctx.session.user.id,
        true
      )

      if (!access) {
        throw new Error('User is not a member of the specified workspace')
      }

      return await prisma.project.update({
        where: { id: input.projectId },
        data: {
          name: input.name,
          description: input.description,
          slug: input.slug,
        },
      })
    }),

  // Soft delete a project
  deleteProject: protectedProcedure
    .input(z.object({ projectId: z.string(), workspaceId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const access = await checkIfUserIsMember(
        input.workspaceId,
        ctx.session.user.id,
        true
      )

      if (!access) {
        throw new Error('User is not a member of the specified workspace')
      }

      // Proceed to soft delete the project by setting the deletedAt field
      return await prisma.project.update({
        where: { id: input.projectId },
        data: { deletedAt: new Date() },
      })
    }),

  getProjectData: protectedProcedure
    .input(
      z.object({
        projectId: z.string(),
        omitEmbeddings: z.boolean().optional(),
        returnSpells: z.boolean().optional(),
        returnAgents: z.boolean().optional(),
        returnDocuments: z.boolean().optional(),
      })
    )
    .query(async ({ input, ctx }) => {
      const newToken = await prepareToken(ctx, input)
      const projectData = await fetchProjectData(newToken, input)
      return projectData
    }),
})

const fetchProjectData = async (
  token: string | null,
  input: {
    projectId: string
    omitEmbeddings?: boolean
    returnSpells?: boolean
    returnAgents?: boolean
    returnDocuments?: boolean
  }
): Promise<any> => {
  // build query string based on input
  let queryString = ''
  if (input.omitEmbeddings) {
    queryString += '&omitEmbeddings=true'
  }
  if (input.returnSpells) {
    queryString += '&returnSpells=true'
  }
  if (input.returnAgents) {
    queryString += '&returnAgents=true'
  }
  if (input.returnDocuments) {
    queryString += '&returnDocuments=true'
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/projects?projectId=${input.projectId}${queryString}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    const data = await response.json()

    return data
  } catch (error) {
    console.error('ERROR', error)
  }
}

const createProjectData = async (
  token: string | null,
  input: {
    projectId: string
    templateId: number
  }
) => {
  let data: any

  data = {
    id: 0,
  }

  // switch (input.templateId) {
  //   case 1:
  //     data = starterTemplate
  //     break
  //   case 2:
  //     data = discordTemplate
  //     break
  //   case 3:
  //     data = restTemplate
  //     break
  //   case 4:
  //     data = documentSearchTemplate
  //     break
  //   case 5:
  //     data = elizaTemplate
  //     break
  //   default:
  //     data = { id: '0' }
  // }

  // delete data.id

  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
    method: 'POST',
    body: JSON.stringify({
      ...data,
      projectId: input.projectId,
      replace: true,
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
}
