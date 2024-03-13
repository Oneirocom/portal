import { z } from 'zod'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'
import { hasAccess, prepareToken } from '../utils/shared'
import { prismaPortal } from '@magickml/portal-db'
import { prismaCore } from '@magickml/server-db'
import {
  trackServerEvent,
  paginateItems,
  getAgentData,
  getInfiniteAgents,
} from '@magickml/portal-utils-server'
import {
  PublicEventTypes,
  PrivateEventTypes,
} from '@magickml/portal-utils-shared'
import { makeClient } from 'ideClient'
import { createFromTemplate, createFromAgent } from '@magickml/portal-templates'
import { uploadImage } from '../utils/upload'
import { clerkClient } from '@clerk/nextjs'

const ideServerUrl = process.env.IDE_SERVER_URL || 'http://localhost:3030'

const app = makeClient(ideServerUrl)

export const agentsRouter = createTRPCRouter({
  getAgent: publicProcedure
    .input(z.object({ agentId: z.string() }))
    .query(async ({ ctx, input }) => {
      const agentData = await getAgentData({
        auth: ctx.auth,
        agentId: input.agentId,
      })

      if (!agentData) {
        throw new Error('Agent not found')
      }

      // check if the user has access to the agent
      if (!agentData.status.isPublic && !agentData.status.isCreator) {
        throw new Error('User does not have access to the specified agent')
      }

      // check if agent is enabled
      if (!agentData.status.isCreator && !agentData.status.isEnabled) {
        throw new Error('Agent is not enabled')
      }

      return agentData
    }),

  getAgentAnalytics: protectedProcedure
    .input(z.object({ agentId: z.string(), projectId: z.string() }))
    .query(async ({ input, ctx }) => {
      const newToken = await prepareToken({
        user: ctx.auth,
        projectId: input.projectId,
      })
      const agents = await fetchAgentAnalytics({
        token: newToken,
        agentId: input.agentId,
        projectId: input.projectId,
      })

      return agents
    }),

  createFromTemplate: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        templateId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { name, templateId } = input
      const agent = await createFromTemplate({
        projectName: name,
        templateId,
        agentName: name,
        owner: ctx.auth.userId,
      })

      return agent
    }),

  // delete a single agent
  deleteAgent: protectedProcedure
    .input(z.object({ agentId: z.string(), projectId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const token = await prepareToken({
        user: ctx.auth,
        projectId: input.projectId,
      })
      const deletedAgent = await deleteAgent({
        token,
        agentId: input.agentId,
        projectId: input.projectId,
      })
      trackServerEvent(
        PrivateEventTypes.AGENT_PRIVATE_DELETE,
        ctx.auth.user?.emailAddresses[0].emailAddress ?? '',
        input.agentId
      )
      return deletedAgent
    }),

  updateAgent: protectedProcedure
    .input(
      z.object({
        name: z.string().optional(),
        description: z.string().optional(),
        publicVariables: z.string().optional(),
        variables: z.string().optional(),
        image: z.string().optional().nullable(),
        data: z.any().optional().nullable(),
        agentId: z.string(),
        updateDraft: z.boolean().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const agent = await prismaCore.agents.findUnique({
        where: { id: input.agentId },
      })

      if (!agent?.projectId) {
        throw new Error('Agent project not found')
      }

      const access = await hasAccess({
        projectId: agent.projectId,
        user: ctx.auth,
      })

      if (!access) {
        throw new Error('No access to the specified workspace')
      }

      // If an image is provided, upload it and get the path
      if (input.image) {
        const imgResponse = await uploadImage(
          input.agentId,
          input.image,
          'agentAvatar'
        )
        input.image = `/agents/${agent.id}/avatar.jpg?${imgResponse.VersionId}`
      }

      const performUpdate = async (agentIdToUpdate: string) => {
        const validFields = [
          'name',
          'description',
          'publicVariables',
          'variables',
          'data',
          'image',
          'draftAgentId',
        ]
        const updateData = Object.entries(input)
          .filter(
            ([key, value]) => validFields.includes(key) && value !== undefined
          )
          .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})

        await app.service('agents').patch(agentIdToUpdate, updateData)

        trackServerEvent(
          PrivateEventTypes.AGENT_PRIVATE_UPDATE,
          ctx.auth.user?.emailAddresses[0].emailAddress ?? '',
          agentIdToUpdate
        )
      }

      // Update the draft agent if updateDraft is true and a draft agent exists
      if (input.updateDraft && agent.draftAgentId) {
        await performUpdate(agent.draftAgentId)
      }

      // Always update the original (live) agent
      await performUpdate(input.agentId)

      return agent
    }),

  makePublic: protectedProcedure
    .input(
      z.object({
        agentId: z.string(),
        description: z.string().optional(),
        remixable: z.boolean().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const a = await prismaCore.agents.findUnique({
        where: {
          id: input.agentId,
        },
        select: {
          projectId: true,
        },
      })

      if (!a?.projectId) {
        throw new Error('Agent not found')
      }

      const access = await hasAccess({
        projectId: a.projectId,
        user: ctx.auth,
      })

      if (!access) {
        throw new Error('User is not a member of the specified workspace')
      }

      // check if agent is public
      const deployed = await prismaPortal.publicAgent.findUnique({
        where: {
          agentId: input.agentId,
        },
      })

      // if the agent exists and deletedAt is null, it is already public
      if (deployed && deployed.deletedAt === null) {
        throw new Error('Agent is already public')
      }

      // if the agent exists and deletedAt is not null, restore the agent
      if (deployed && deployed.deletedAt !== null) {
        const agent = await prismaPortal.publicAgent.update({
          where: {
            agentId: input.agentId,
          },
          data: {
            deletedAt: null,
            description: input.description ?? '',
            remixable: input.remixable ?? false,
          },
        })
        return agent
      }

      // if the agent does not exist, create it
      const newPublicAgent = await prismaPortal.publicAgent.create({
        data: {
          agentId: input.agentId,
          userId: ctx.auth.userId,
          description: input.description ?? '',
          remixable: input.remixable ?? false,
        },
      })

      trackServerEvent(
        PrivateEventTypes.AGENT_PRIVATE_MAKE_PUBLIC,
        ctx.auth.user?.emailAddresses[0].emailAddress ?? '',
        input.agentId
      )

      return newPublicAgent
    }),
  updateAgentPublic: protectedProcedure
    .input(
      z.object({
        agentId: z.string(),
        description: z.string().optional(),
        remixable: z.boolean().optional(),
        isTemplate: z.boolean().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const a = await prismaCore.agents.findUnique({
        where: {
          id: input.agentId,
        },
        select: {
          projectId: true,
        },
      })

      if (!a?.projectId) {
        throw new Error('Agent not found')
      }

      const access = await hasAccess({
        projectId: a.projectId,
        user: ctx.auth,
      })

      if (!access) {
        throw new Error('User is not a member of the specified workspace')
      }

      const agent = await prismaPortal.publicAgent.update({
        where: {
          agentId: input.agentId,
        },
        data: {
          deletedAt: null,
          description: input.description,
          remixable: input.remixable,
          isTemplate: input.isTemplate,
        },
      })

      trackServerEvent(
        PublicEventTypes.AGENT_PUBLIC_UPDATE,
        ctx.auth.user?.emailAddresses[0].emailAddress ?? '',
        input.agentId
      )

      return agent
    }),

  updatePublicAgentDesc: protectedProcedure
    .input(
      z.object({
        agentId: z.string(),
        description: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const a = await prismaCore.agents.findUnique({
        where: {
          id: input.agentId,
        },
        select: {
          projectId: true,
        },
      })

      if (!a?.projectId) {
        throw new Error('Agent not found')
      }

      const access = await hasAccess({
        projectId: a.projectId,
        user: ctx.auth,
      })

      if (!access) {
        throw new Error('User is not a member of the specified workspace')
      }

      const agent = await prismaPortal.publicAgent.update({
        where: {
          agentId: input.agentId,
        },
        data: {
          description: input.description,
        },
      })

      trackServerEvent(
        PublicEventTypes.AGENT_PUBLIC_UPDATE,
        ctx.auth.user?.emailAddresses[0].emailAddress ?? '',
        input.agentId
      )

      return agent
    }),
  makePrivate: protectedProcedure
    .input(
      z.object({
        agentId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const a = await prismaCore.agents.findUnique({
        where: {
          id: input.agentId,
        },
        select: {
          projectId: true,
        },
      })

      if (!a?.projectId) {
        throw new Error('Agent not found')
      }

      const access = await hasAccess({
        projectId: a.projectId,
        user: ctx.auth,
      })

      if (!access) {
        throw new Error('User is not a member of the specified workspace')
      }

      const deployed = await prismaPortal.publicAgent.findUnique({
        where: {
          agentId: input.agentId,
        },
      })

      // If the agent exists and deletedAt is null, set deletedAt to now
      if (deployed && deployed.deletedAt === null) {
        const agent = await prismaPortal.publicAgent.update({
          where: {
            agentId: input.agentId,
          },
          data: {
            deletedAt: new Date(), // setting current date
            remixable: false,
          },
        })
        return agent
      }

      // If the agent exists and deletedAt is not null, it's already private
      if (deployed && deployed.deletedAt !== null) {
        throw new Error('Agent is already private')
      }

      // If the agent doesn't exist, no need to make it private
      throw new Error('Agent not found')
    }),

  getInfinite: protectedProcedure
    .input(
      z.object({ limit: z.number().optional(), cursor: z.string().optional() })
    )
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 10
      const { cursor } = input

      const fetchedItems = await getInfiniteAgents({
        limit,
        cursor,
        userId: ctx.auth.userId,
      })

      return paginateItems(fetchedItems, limit)
    }),

  getTemplates: publicProcedure.query(async () => {
    return await prismaPortal.template.findMany({
      where: {
        deletedAt: null,
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        name: true,
        description: true,
        image: true,
        updatedAt: true,
      },
    })
  }),
  createTemplate: protectedProcedure
    .input(
      z.object({
        agentId: z.string(),
        name: z.string(),
        description: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // check clerk metadata for role
      const user = await clerkClient.users.getUser(ctx.auth.userId)
      const role = user.publicMetadata?.role
      if (role !== 'ADMIN') {
        throw new Error('User is not authorized to create templates.')
      }

      return await createFromAgent(input)
    }),
})

interface FetchAgentAnalyticsInput {
  token: string
  agentId: string
  projectId: string
}
const fetchAgentAnalytics = async (
  params: FetchAgentAnalyticsInput
): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/request/analytics?agentId=${params.agentId}?projectId=${params.projectId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${params.token}`,
        },
      }
    )
    return await response.json()
  } catch (error) {
    console.error('ERROR', error)
  }
}

interface DeleteAgentParams {
  token: string
  agentId: string
  projectId: string
}
const deleteAgent = async (params: DeleteAgentParams): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/agents/${params.agentId}?projectId=${params.projectId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${params.token}`,
        },
      }
    )
    return await response.json()
  } catch (error) {
    console.error('ERROR', error)
  }
}
