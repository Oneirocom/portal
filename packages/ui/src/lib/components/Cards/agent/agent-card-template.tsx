import { useRef, useState } from 'react'
import { BaseAgentCard } from './base-agent-card'
import { AgentCardFooter } from './agent-card-footer'
import { AgentCardInfo } from './types'
import React from 'react'
import { CreateAgentDialog } from './create-agent-dialog'

type AgentCardTemplateProps = AgentCardInfo & {}

export const AgentCardTemplate: React.FC<AgentCardTemplateProps> = agent => {
  const footerState = useState(false)
  const footerRef = useRef<HTMLButtonElement>(null)
  const createState = useState(false)

  const isFooterActive = (e: MouseEvent) => {
    if (footerRef.current) {
      return footerRef.current.contains(e.target as Node)
    }
    return false
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isFooterActive(e.nativeEvent) || footerState[0]) {
      e.stopPropagation()
    } else if (!createState[0]) {
      createState[1](true)
    }
  }

  const handleFooterSubmit = () => {
    footerState[1](false)
    createState[1](true)
  }

  return (
    <BaseAgentCard
      agent={agent}
      onClick={handleClick}
      footer={
        <>
          <AgentCardFooter
            agent={agent}
            state={footerState}
            buttonRef={footerRef}
            submitText="Build"
            onSubmit={handleFooterSubmit}
          />
          <CreateAgentDialog templateId={agent.id} state={createState} />
        </>
      }
    />
  )
}
