import { prisma } from '@magickml/portal-db'
import { Session } from 'next-auth'
import { Graph, PublicVariable, AgentDataOld } from '@magickml/portal-types'
import { extractPublicVariablesV2 } from '@magickml/portal-utils-shared'

export const getAgentDataSSR = async (
  session: Session | null,
  agentId: string
) => {
  const data = await prisma.agents.findUnique({
    where: {
      id: agentId,
    },
    select: {
      creatorId: true,
      isPublic: true,
      enabled: true,
      id: true,
      name: true,
      description: true,
      image: true,
      rootSpellId: true,
      projectId: true,
    },
  })

  if (!data || !data.rootSpellId) return null

  const status = {
    isPublic: data?.isPublic ?? false,
    isCreator: data?.creatorId === session?.user.id,
    isEnabled: data?.enabled ?? false,
  }

  return {
    data,
    status,
    meta: {
      title: `${data.name} | MagickML`,
      description: data.description,
      url: `${process.env.NEXT_PUBLIC_APP_URL}/agents/${data.id}`,
      image: data.image
        ? `${process.env.NEXT_PUBLIC_BUCKET_PREFIX}${data.image}`
        : `${process.env.NEXT_PUBLIC_APP_URL}/images/banner.png`,
    },
  }
}

export const getAgentData = async (
  session: Session | null,
  agentId: string
) => {
  const data = await prisma.agents.findUnique({
    where: {
      id: agentId,
    },
    select: {
      creatorId: true,
      isPublic: true,
      id: true,
      publicVariables: true,
      name: true,
      enabled: true,
      updatedAt: true,
      projectId: true,
      publicAgentId: true,
      description: true,
      remixable: true,
      creatorName: true,
      creatorImage: true,
      workspace_id: true,
      image: true,
      data: true,
      rootSpellId: true,
      isTemplate: true,
      //   likesCount: true,
    },
  })

  if (!data) return null

  if (!data.rootSpellId) return null

  // get spell from rootSpellId
  const rootSpell = await prisma.spells.findUnique({
    where: {
      id: data.rootSpellId,
    },
    select: {
      id: true,
      graph: true,
      name: true,
    },
  })

  if (!rootSpell || !rootSpell.graph) return null

  // extract publicVariables. Force type which we know is a graph structure from Rete
  const spellPublicVariables = extractPublicVariablesV2(
    rootSpell.graph as unknown as Graph
  )

  const agentPublicVaribales = data.publicVariables
    ? JSON.parse(data.publicVariables)
    : {}

  // set keys from spellPublicVariables to agentPublicVariables
  // fallback values to spellPublicVariables
  const publicVariables = Object.keys(spellPublicVariables).reduce(
    (acc, key) => {
      return {
        ...acc,
        [key]: agentPublicVaribales[key] ?? spellPublicVariables[key],
      }
    },
    {}
  )

  // we need to make sure that thew spell is the source of truth for public variables at all times
  data.publicVariables = JSON.stringify(publicVariables)

  const status = {
    isPublic: data?.isPublic ?? false,
    isCreator: data?.creatorId === session?.user.id,
    isEnabled: data?.enabled ?? false,
  }

  return {
    data,
    status,
    rootSpell,
    meta: {
      title: `${data.name} | MagickML`,
      description: data.description,
      url: `${process.env.NEXT_PUBLIC_APP_URL}/agents/${data.id}`,
      image: data.image
        ? `${process.env.NEXT_PUBLIC_BUCKET_PREFIX}${data.image}`
        : `${process.env.NEXT_PUBLIC_APP_URL}/images/banner.png`,
    },
  }
}

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

  return await prisma.agents.findMany({
    take: limit + 1, // add 1 to check for next page
    cursor: cursor ? { id: cursor } : undefined,
    orderBy: { updatedAt: 'desc' },
    where: {
      creatorId: userId,
    },
    select: {
      name: true,
      image: true,
      id: true,
      publicAgentId: true,
      description: true,
      projectId: true,
    },
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
