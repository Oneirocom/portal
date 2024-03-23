import { useRef, useState } from 'react'
import { BaseAgentCard } from './base-agent-card'
import { AgentCardFooter } from './agent-card-footer'
import { AgentCardInfo } from './types'

type AgentCardTemplateProps = AgentCardInfo & {}

export const AgentCardTemplate: React.FC<AgentCardTemplateProps> = agent => {
  const footerState = useState(false)
  const footerRef = useRef<HTMLButtonElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (footerState[0]) {
      e.stopPropagation()
    } else {
      e.preventDefault()
      footerState[1](true)
    }
  }

  return (
    <BaseAgentCard
      agent={agent}
      onClick={handleClick}
      footer={
        <AgentCardFooter
          agent={agent}
          state={footerState}
          buttonRef={footerRef}
          submitText="Build"
          onSubmit={() => console.log('More info')}
        />
      }
    />
  )
}
