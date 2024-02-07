import React from 'react'
import { useAtomValue } from 'jotai'
import { toggleAgentSettingsAtom } from '@magickml/portal-state'
import clsx from 'clsx'
import { AgentChatHeader } from '@magickml/portal-chat'
import { AgentData } from '@magickml/portal-types'

type Props = {
  isPublic?: boolean
  children: React.ReactNode
  agent: AgentData
}

export const AgentLayout: React.FC<Props> = ({
  isPublic = false,
  children,
  agent,
}) => {
  const toggleAgentSettings = useAtomValue(toggleAgentSettingsAtom)

  return (
    <div className="box-border relative flex flex-col w-full max-w-full overflow-hidden">
      <div
        className={clsx(
          'transition-all duration-300 ease-in-out w-full h-screen overflow-hidden relative',
          toggleAgentSettings ? 'flex-row' : 'flex-col'
        )}
      >
        <AgentChatHeader
          agent={agent}
          isPrivate={!isPublic}
          className="lg:hidden"
        />

        <div className="flex flex-row w-full h-full pt-12 mx-auto overflow-hidden md:pt-0 grow">
          {children}
        </div>
      </div>
    </div>
  )
}