import { prisma } from '@magickml/portal-db'

type InfiniteAgentsOptions = {
  limit: number
  cursor?: string
}

export async function getInfinitePublicAgents({
  limit,
  cursor,
}: InfiniteAgentsOptions) {
  return await prisma.agents.findMany({
    take: limit + 1, // add 1 to check for next page
    cursor: cursor ? { id: cursor } : undefined,
    orderBy: { updatedAt: 'desc' },
    where: {
      isPublic: true,
      enabled: true,
    },
    select: {
      //   commentsCount: true,
      creatorName: true,
      creatorImage: true,
      creatorId: true,
      enabled: true,
      likesCount: true,
      name: true,
      image: true,
      id: true,
      publicAgentId: true,
      description: true,
      projectId: true,
    },
  })
}

type PaginateResult<T> = {
  items: T[]
  nextCursor?: string
}

export function paginateItems<T extends { id: string }>(
  items: T[],
  limit: number
): PaginateResult<T> {
  let nextCursor: string | undefined = undefined
  if (items.length > limit) {
    const nextItem = items.pop()
    nextCursor = nextItem!.id
  }
  return {
    items,
    nextCursor,
  }
}
