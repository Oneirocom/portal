import { JSONValue } from 'superjson/dist/types'

export interface AgentDataOld {
  discord_api_key: string
  discord_enabled: boolean
  rest_enabled: boolean
  use_voice: boolean
  rest_api_key?: string
}

export type AgentData = {
  id: string
  rootSpell: any
  publicVariables: string | null
  secrets: string | null
  name: string | null
  image: string | null
  enabled: boolean | null
  updatedAt: string | null
  pingedAt: string | null
  projectId: string | null
  spells?: any
  data: any
}

export interface PublicVariable {
  [key: string]: string | boolean | number
}

export type Agent = {
  workspace_id: string | null
  id: string
  rootSpell: any
  publicVariables: JSONValue | null
  secrets: string | null
  name: string | null
  image: string | null
  enabled: boolean | null
  updatedAt: string | null
  pingedAt: string | null
  projectId: string | null
  spells?: any
  isTemplate?: boolean
  data: AgentData | null
  likesCount?: string
  commentsCount?: string
  creatorName?: string | null
  description?: string | null
  isPublic?: boolean
  publicAgentId?: string
  remixable?: boolean
  isDraft?: boolean
  draftAgentId?: string
}

export type AgentMessages = {
  sender: string
  message: string
  entity: string
}
