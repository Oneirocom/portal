import { prisma } from '@magickml/portal-db'
import { prismaCore } from '@magickml/server-db'
import { Session } from 'next-auth'
import {
  // Graph,
  PublicVariable,
  AgentDataOld,
} from '@magickml/portal-types'
// import { extractPublicVariablesV2 } from '@magickml/portal-utils-shared'
import {
  type SignedInAuthObject,
  type SignedOutAuthObject,
} from '@clerk/clerk-sdk-node'

export const getAgentDataSSR = async (
  session: Session | null,
  agentId: string
) => {
  const agent = await prismaCore.agents.findUnique({
    where: {
      id: agentId,
    },
    select: {
      id: true,
      rootSpellId: true,
      publicVariables: true,
      secrets: true,
      name: true,
      enabled: true,
      updatedAt: true,
      pingedAt: true,
      projectId: true,
      data: true,
      runState: true,
      image: true,
      default: true,
      createdAt: true,
      currentSpellReleaseId: true,
      embedModel: true,
      version: true,
      embeddingProvider: true,
      embeddingModel: true,
    },
  })

  if (!agent || !agent.rootSpellId) return null

  const publicAgent = await prisma.publicAgent.findUnique({
    where: {
      agentId: agentId,
    },
    select: {
      id: true,
      description: true,
      remixable: true,
      featured: true,
      isTemplate: true,
      deletedAt: true,
    },
  })

  const isPublic = !!publicAgent && publicAgent.deletedAt === null

  const project = await prisma.project.findUnique({
    where: {
      id: agent.projectId,
    },
    select: {
      owner: true,
      name: true,
      image: true,
    },
  })

  const creatorId = project?.owner
  const creatorName = project?.name
  const creatorImage = project?.image

  const likesCount = await prisma.likes.count({
    where: {
      publicAgentId: publicAgent?.id,
    },
  })

  const commentsCount = await prisma.comments.count({
    where: {
      publicAgentId: publicAgent?.id,
      deletedAt: null,
    },
  })

  const status = {
    isPublic,
    isCreator: creatorId === session?.user.id,
    isEnabled: agent.enabled,
  }

  return {
    agent,
    publicAgent: {
      ...publicAgent,
      isPublic,
      likesCount,
      commentsCount,
    },
    project: {
      creatorId,
      creatorName,
      creatorImage,
    },
    status,
    meta: {
      title: `${agent.name} | MagickML`,
      description: publicAgent?.description,
      url: `${process.env.NEXT_PUBLIC_APP_URL}/agents/${agent.id}`,
      image: agent.image
        ? `${process.env.NEXT_PUBLIC_BUCKET_PREFIX}${agent.image}`
        : `${process.env.NEXT_PUBLIC_APP_URL}/images/banner.png`,
    },
  }
}

interface GetAgentDataParams {
  auth: SignedInAuthObject | SignedOutAuthObject
  agentId: string
}

export const getAgentData = async (params: GetAgentDataParams) => {
  // Use prismaCore to query the agents table directly instead of using the removed view
  const agent = await prismaCore.agents.findUnique({
    where: {
      id: params.agentId,
    },
    select: {
      // Selections adapted from the original view
      id: true,
      rootSpellId: true,
      publicVariables: true,
      secrets: true,
      name: true,
      enabled: true,
      updatedAt: true,
      pingedAt: true,
      projectId: true,
      data: true,
      runState: true,
      image: true,
      default: true,
      createdAt: true,
      currentSpellReleaseId: true,
      embedModel: true,
      version: true,
      embeddingProvider: true,
      embeddingModel: true,
    },
  })

  if (!agent) return null

  // Additional logic based on the original view's operations
  const publicAgent = await prisma.publicAgent.findUnique({
    where: {
      agentId: params.agentId,
    },
    select: {
      id: true,
      description: true,
      remixable: true,
      featured: true,
      isTemplate: true,
      deletedAt: true,
    },
  })

  const isPublic = !!publicAgent && publicAgent.deletedAt === null

  const project = await prisma.project.findUnique({
    where: {
      id: agent.projectId,
    },
    select: {
      owner: true,
      name: true,
      image: true,
    },
  })

  const creatorId = project?.owner
  const creatorName = project?.name
  const creatorImage = project?.image

  const likesCount = await prisma.likes.count({
    where: {
      publicAgentId: publicAgent?.id,
    },
  })

  const commentsCount = await prisma.comments.count({
    where: {
      publicAgentId: publicAgent?.id,
      deletedAt: null,
    },
  })

  const status = {
    isPublic,
    isCreator: creatorId === params.auth?.user.id,
    isEnabled: agent.enabled,
  }

  return {
    agent,
    publicAgent: {
      ...publicAgent,
      isPublic,
      likesCount,
      commentsCount,
    },
    project: {
      creatorId,
      creatorName,
      creatorImage,
    },
    status,
    meta: {
      title: `${agent.name} | MagickML`,
      description: publicAgent?.description,
      url: `${process.env.NEXT_PUBLIC_APP_URL}/agents/${agent.id}`,
      image: agent.image
        ? `${process.env.NEXT_PUBLIC_BUCKET_PREFIX}${agent.image}`
        : `${process.env.NEXT_PUBLIC_APP_URL}/images/banner.png`,
    },
  }
}

type PromiseType<T extends Promise<any>> = T extends Promise<infer U>
  ? U
  : never
export type AgentData = PromiseType<ReturnType<typeof getAgentData>>

type InfiniteAgentsOptions = {
  limit: number
  cursor?: string
  userId: string
}

export async function getInfiniteAgents({
  limit,
  cursor,
  userId,
}: InfiniteAgentsOptions) {
  if (!userId) {
    throw 'error'
  }

  const projects = await prisma.project.findMany({
    where: {
      owner: userId,
    },
    select: {
      id: true,
    },
  })

  const agent = await prismaCore.agents.findMany({
    take: limit + 1, // add 1 to check for next page
    cursor: cursor ? { id: cursor } : undefined,
    orderBy: { updatedAt: 'desc' },
    where: {
      projectId: {
        in: projects.map(p => p.id),
      },
      currentSpellReleaseId: {
        not: null,
      },
    },
    select: {
      name: true,
      image: true,
      id: true,
      projectId: true,
    },
  })

  const publicAgents = await prisma.publicAgent.findMany({
    where: {
      agentId: {
        in: agent.map(a => a.id),
      },
    },
    select: {
      id: true,
      description: true,
      agentId: true,
    },
  })

  return agent.map(a => {
    const publicAgent = publicAgents.find(pa => pa.agentId === a.id)
    return {
      ...a,
      publicAgentId: publicAgent?.id,
      description: publicAgent?.description,
    }
  })
}

export const createAgent = async (
  token: string | null,
  input: {
    projectId: string
    name: string
    rootSpellId: string
    publicVariables: PublicVariable[]
    data: AgentDataOld
  }
) => {
  const agent = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/agents?projectId=${input.projectId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        projectId: input.projectId,
        rootSpellId: input.rootSpellId,
        updatedAt: new Date().toISOString(),
        pingedAt: new Date().toISOString(),
        enabled: true,
        name: input.name,
        data: JSON.stringify(input.data),
        publicVariables: JSON.stringify(input.publicVariables),
        secrets: JSON.stringify({}),
      }),
    }
  )

  const data = await agent.json()
  return data
}
