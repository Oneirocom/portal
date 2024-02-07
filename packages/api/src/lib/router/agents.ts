import { z } from 'zod'
import { feathers } from '@feathersjs/feathers'
import rest from '@feathersjs/rest-client'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'
import { checkIfUserIsMember, prepareToken } from '../utils/shared'
import { prisma } from '@magickml/portal-db'
import { PublicVariable } from '@magickml/portal-types'
import axios from 'axios'
import {
  trackServerEvent,
  paginateItems,
  getAgentData,
  getInfiniteAgents,
  createAgent,
  createSpell,
} from '@magickml/portal-utils-server'
import {
  PublicEventTypes,
  PrivateEventTypes,
} from '@magickml/portal-utils-shared'

const app = feathers()

// Connect to a different URL
const restClient = rest(process.env.IDE_SERVER_URL)

app.configure(
  restClient.axios(
    axios.create({
      headers: { 'x-api-key': process.env.AGENT_API_KEY },
    })
  )
)

// zod schema for the input of the createAgentWithSpell mutation
const createAgentWithSpellInputSchema = z.object({
  workspaceId: z.string(),
  projectId: z.string(),
  publicVariables: z.any(),
  data: z.object({
    discord_api_key: z.string(),
    discord_enabled: z.boolean(),
    rest_enabled: z.boolean(),
    use_voice: z.boolean(),
  }),
  name: z.string(),
  spellData: z.any(),
})

export const agentsRouter = createTRPCRouter({
  getAgent: publicProcedure
    .input(z.object({ agentId: z.string() }))
    .query(async ({ ctx, input }) => {
      const session = ctx.session

      const agentData = await getAgentData(session, input.agentId)

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

  // Get all agents for a project
  getAgents: protectedProcedure
    .input(z.object({ projectId: z.string(), workspaceId: z.string() }))
    .query(async ({ input }) => {
      const agents = await prisma.agents.findMany({
        where: {
          projectId: input.projectId,
        },
        select: {
          id: true,
          name: true,
          enabled: true,
          image: true,
          updatedAt: true,
          projectId: true,
          rootSpellId: true,
        },

        orderBy: {
          updatedAt: 'desc',
        },
      })

      return agents
    }),
  getUserAgents: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      const agents = prisma.agents.findMany({
        where: {
          creatorId: input.userId,
          isPublic: true,
        },
        select: {
          id: true,
          name: true,
          enabled: true,
          image: true,
          description: true,
          updatedAt: true,
          projectId: true,
          rootSpellId: true,
          isPublic: true,
          creatorId: true,
          creatorImage: true,
          creatorName: true,
          likesCount: true,
          commentsCount: true,
        },

        orderBy: {
          updatedAt: 'desc',
        },
      })

      return agents
    }),
  getAgentAnalytics: protectedProcedure
    .input(z.object({ agentId: z.string(), projectId: z.string() }))
    .query(async ({ input, ctx }) => {
      const newToken = await prepareToken(ctx, input)
      const agents = await fetchAgentAnalytics(newToken, input)
      return agents
    }),

  // Get all agents for a workplace
  getAllAgents: protectedProcedure
    .input(z.object({ workspaceId: z.string() }))
    .query(async ({ ctx, input }) => {
      const check = await checkIfUserIsMember(
        input.workspaceId,
        ctx.session.user.id,
        false
      )

      if (!check) {
        throw new Error('User is not a member of the specified workspace')
      }

      const agents = prisma.agents.findMany({
        where: {
          workspace_id: input.workspaceId,
        },
        select: {
          id: true,
          name: true,
          enabled: true,
          image: true,
          description: true,
          updatedAt: true,
          projectId: true,
          rootSpellId: true,
          isPublic: true,
          creatorId: true,
          creatorImage: true,
          creatorName: true,
          likesCount: true,
          commentsCount: true,
        },

        orderBy: {
          updatedAt: 'desc',
        },
      })

      return agents
    }),

  createAgentWithSpell: protectedProcedure
    .input(createAgentWithSpellInputSchema)
    .mutation(async ({ input, ctx }) => {
      const access = await checkIfUserIsMember(
        input.workspaceId,
        ctx.session.user.id,
        false
      )
      if (!access) {
        throw new Error('User is not a member of the specified workspace')
      }

      const newToken = await prepareToken(ctx, input)
      const spellInput = {
        projectId: input.projectId,
        name: input.name,
        spellData: input.spellData,
        publicVariables: input.publicVariables as PublicVariable[],
        agentData: input.data,
      }
      const createdSpell = await createSpell(newToken, spellInput)

      const agentInput = {
        projectId: input.projectId,
        name: input.name,
        rootSpellId: createdSpell.id,
        publicVariables: input.publicVariables as PublicVariable[],
        data: input.data,
      }

      const createdAgent = await createAgent(newToken, agentInput)
      return createdAgent
    }),

  // delete a single agent
  deleteAgent: protectedProcedure
    .input(z.object({ agentId: z.string(), projectId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const newToken = await prepareToken(ctx, input)
      const deletedAgent = await deleteAgent(newToken, input)
      trackServerEvent(
        PrivateEventTypes.AGENT_PRIVATE_DELETE,
        ctx.session?.user.email ?? '',
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
      })
    )
    .mutation(async ({ input, ctx }) => {
      const a = await prisma.agents.findUnique({
        where: {
          id: input.agentId,
        },
        select: {
          workspace_id: true,
        },
      })

      const access = await checkIfUserIsMember(
        a?.workspace_id ?? '',
        ctx.session.user.id,
        false
      )

      if (!access) {
        throw new Error('No access to the specified workspace')
      }

      const image = input.image
      const agentId = input.agentId

      // Handle the base64 image data
      if (image) {
        const response = await app
          .service('agentImage')
          .create({ agentId, image })

        if (response.ETag && response.VersionId) {
          input.image = `/agents/${agentId}/avatar.jpg?versionId=${response.VersionId}`
        } else throw new Error('Image upload failed!')
      }

      // Validate fields so we don't accidentally update something we shouldn't
      const fields: (keyof typeof input)[] = [
        'name',
        'data',
        'variables',
        'publicVariables',
        'image',
      ]

      const updateData = fields.reduce((acc, field) => {
        if (input[field]) {
          acc[field] = input[field]
        }
        return acc
      }, {} as Partial<typeof input>)

      const agent = await app.service('agents').patch(agentId, updateData)

      trackServerEvent(
        PrivateEventTypes.AGENT_PRIVATE_UPDATE,
        ctx.session?.user.email ?? '',
        input.agentId
      )

      return agent
    }),

  makePublic: protectedProcedure
    .input(
      z.object({
        agentId: z.string(),
        workspaceId: z.string(),
        description: z.string().optional(),
        remixable: z.boolean().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // has access
      const access = await checkIfUserIsMember(
        input.workspaceId,
        ctx.session.user.id,
        false
      )

      if (!access) {
        throw new Error('User is not a member of the specified workspace')
      }

      // check if agent is public
      const deployed = await prisma.publicAgent.findUnique({
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
        const agent = await prisma.publicAgent.update({
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
      const newPublicAgent = await prisma.publicAgent.create({
        data: {
          agentId: input.agentId,
          userId: ctx.session.user.id, // Assuming the current user is the one making it public
          description: input.description ?? '',
          remixable: input.remixable ?? false,
        },
      })

      trackServerEvent(
        PrivateEventTypes.AGENT_PRIVATE_MAKE_PUBLIC,
        ctx.session?.user.email ?? '',
        input.agentId
      )

      return newPublicAgent
    }),
  updateAgentPublic: protectedProcedure
    .input(
      z.object({
        agentId: z.string(),
        workspaceId: z.string(),
        description: z.string().optional(),
        remixable: z.boolean().optional(),
        isTemplate: z.boolean().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // has access
      const access = await checkIfUserIsMember(
        input.workspaceId,
        ctx.session.user.id,
        false
      )

      if (!access) {
        throw new Error('User is not a member of the specified workspace')
      }
      const agent = await prisma.publicAgent.update({
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
        ctx.session?.user.email ?? '',
        input.agentId
      )

      return agent
    }),

  updatePublicAgentDesc: protectedProcedure
    .input(
      z.object({
        agentId: z.string(),
        workspaceId: z.string(),
        description: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // has access
      const access = await checkIfUserIsMember(
        input.workspaceId,
        ctx.session.user.id,
        false
      )

      if (!access) {
        throw new Error('User is not a member of the specified workspace')
      }
      const agent = await prisma.publicAgent.update({
        where: {
          agentId: input.agentId,
        },
        data: {
          description: input.description,
        },
      })

      trackServerEvent(
        PublicEventTypes.AGENT_PUBLIC_UPDATE,
        ctx.session?.user.email ?? '',
        input.agentId
      )

      return agent
    }),
  makePrivate: protectedProcedure
    .input(
      z.object({
        agentId: z.string(),
        workspaceId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const access = await checkIfUserIsMember(
        input.workspaceId,
        ctx.session.user.id,
        false
      )

      if (!access) {
        throw new Error('User is not a member of the specified workspace')
      }

      const deployed = await prisma.publicAgent.findUnique({
        where: {
          agentId: input.agentId,
        },
      })

      // If the agent exists and deletedAt is null, set deletedAt to now
      if (deployed && deployed.deletedAt === null) {
        const agent = await prisma.publicAgent.update({
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

  getPublicAgent: publicProcedure
    .input(
      z.object({
        agentId: z.string(),
      })
    )
    .query(async ({ input }) => {
      const publicAgent = await prisma.publicAgent.findFirst({
        where: {
          agentId: input.agentId,
          deletedAt: null,
        },
      })

      if (!publicAgent) {
        throw new Error('Public agent not found')
      }

      // for that agent get its info
      const agent = await prisma.agents.findUnique({
        where: {
          id: publicAgent.agentId,
        },
        select: {
          id: true,
          name: true,
          enabled: true,
          image: true,
          updatedAt: true,
          projectId: true,
        },
      })

      return {
        ...agent,
        publicAgentId: publicAgent.id,
      }
    }),

  getPublicAgents: protectedProcedure.query(async () => {
    const publicAgents = await prisma.publicAgent.findMany({
      where: {
        deletedAt: null,
      },
      include: {
        comments: true,
        likes: true,
      },
    })

    return publicAgents
  }),

  getInfinite: publicProcedure
    .input(
      z.object({ limit: z.number().optional(), cursor: z.string().optional() })
    )
    .query(async opts => {
      const { input } = opts
      const limit = input.limit ?? 10
      const { cursor } = input
      const userId = opts.ctx.session?.user?.id
      if (!userId) {
        throw new Error('User not found')
      }

      const fetchedItems = await getInfiniteAgents({ limit, cursor, userId })
      const result = paginateItems(fetchedItems, limit)

      return result
    }),
})

const fetchAgentAnalytics = async (
  token: string | null,
  input: { agentId: string; projectId: string }
): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/request/analytics?agentId=${input.agentId}?projectId=${input.projectId}`,
      {
        method: 'GET',
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

const deleteAgent = async (
  token: string | null,
  input: { agentId: string; projectId: string }
): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/agents/${input.agentId}?projectId=${input.projectId}`,

      {
        method: 'DELETE',
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
