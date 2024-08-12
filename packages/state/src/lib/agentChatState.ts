import { atom } from 'jotai'
import { atomWithReset } from 'jotai/utils'
import { type Agent, type AgentMessages } from '@magickml/portal-types'

// Creating an atom for the agent data
export const agentDataAtom = atomWithReset<Agent>({
  id: '',
  workspace_id: '',
  rootSpell: null,
  // TODO: Deprecated
  // publicVariables: null,
  secrets: null,
  name: null,
  image: null,
  enabled: null,
  updatedAt: null,
  // pingedAt: null, // Deprecated
  projectId: null,
  spells: null,
  // data: null, // Deprecated
  creatorName: null,
  description: null,
})

export const agentMessagesAtom = atomWithReset<AgentMessages[]>([])

export const toggleAgentChatAtom = atom(true)
export const toggleAgentSettingsAtom = atom(true)
export const toggleAgentMobileSettingsAtom = atom(false)
export const settingsSheetAtom = atom(0)
