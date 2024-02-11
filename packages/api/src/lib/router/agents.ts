import { z } from 'zod'
import { feathers } from '@feathersjs/feathers'
import rest from '@feathersjs/rest-client'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'
import { hasAccess, prepareToken } from '../utils/shared'
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

  createAgentWithSpell: protectedProcedure
    .input(createAgentWithSpellInputSchema)
    .mutation(async ({ input, ctx }) => {
      const token = await prepareToken({
        user: ctx.auth,
        projectId: input.projectId,
      })

      const spellInput = {
        projectId: input.projectId,
        name: input.name,
        spellData: input.spellData,
        publicVariables: input.publicVariables as PublicVariable[],
        agentData: input.data,
      }
      const createdSpell = await createSpell(token, spellInput)

      const agentInput = {
        projectId: input.projectId,
        name: input.name,
        rootSpellId: createdSpell.id,
        publicVariables: input.publicVariables as PublicVariable[],
        data: input.data,
      }

      const createdAgent = await createAgent(token, agentInput)
      return createdAgent
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
      })
    )
    .mutation(async ({ input, ctx }) => {
      const a = await prisma.agents.findUnique({
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
        ctx.auth.user?.emailAddresses[0].emailAddress ?? '',
        input.agentId
      )

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
      const a = await prisma.agents.findUnique({
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
      const a = await prisma.agents.findUnique({
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
      const a = await prisma.agents.findUnique({
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
      const a = await prisma.agents.findUnique({
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

  getInfinite: protectedProcedure
    .input(
      z.object({ limit: z.number().optional(), cursor: z.string().optional() })
    )
    .query(async opts => {
      const { input } = opts
      const limit = input.limit ?? 10
      const { cursor } = input

      const fetchedItems = await getInfiniteAgents({
        limit,
        cursor,
        userId: opts.ctx.auth.userId,
      })
      const result = paginateItems(fetchedItems, limit)

      return result
    }),

  getTemplates: publicProcedure.query(async () => {
    return await prisma.template.findMany({
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
