import type { RouterOutputs } from '@magickml/portal-api-client'
import type { ReactNode } from 'react'

export type AgentCardInfo = {
  id: string
  name: string | null
  image: string | null
  description: string | null
  creator?: string | null
  version?: string | null
}

export type FindTemplateOutput = RouterOutputs['templates']['find']

export type FindAgentInfiniteOutput = RouterOutputs['agents']['getInfinite']

export type FindAgentOutput = FindAgentInfiniteOutput['items'][number]

export interface PortalCardBaseProps {
  id: string
  name: string | null
  image: string | null
  description: string | null
}
export interface PortalCardProps extends PortalCardBaseProps {
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  menu?: ReactNode
  footer?: ReactNode
  badge?: ReactNode
}

export type AgentRouterOutput =
  RouterOutputs['agents']['getInfinite']['items'][number]

export interface AgentCardProps extends PortalCardProps {
  agent: AgentRouterOutput
}

export type TemplateRouterOutput = RouterOutputs['templates']['find'][number]

export interface TemplateCardProps extends PortalCardProps {
  template: TemplateRouterOutput
}
