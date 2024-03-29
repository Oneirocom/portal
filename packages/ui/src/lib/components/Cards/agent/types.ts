import type { RouterOutputs } from '@magickml/portal-api-client'

export type AgentCardInfo = {
  id: string
  name: string | null
  image: string | null
  description: string | null
  isPublic?: boolean | null
  creator?: string | null
}

export type FindTemplateOutput = RouterOutputs['templates']['find']

export type FindAgentInfiniteOutput = RouterOutputs['agents']['getInfinite']

export type FindAgentOutput = FindAgentInfiniteOutput['items'][number]
