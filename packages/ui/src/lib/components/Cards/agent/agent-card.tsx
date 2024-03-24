import { useRef, useState } from 'react'
import { BaseAgentCard } from './base-agent-card'
import { AgentCardMenu } from './menu/agent-card-menu'
import { AgentCardFooter } from './agent-card-footer'
import { AgentCardInfo } from './types'

type AgentCardProps = AgentCardInfo & {
  projectId: string
}

export const AgentCard: React.FC<AgentCardProps> = agent => {
  const footerRef = useRef<HTMLButtonElement>(null)
  const footerState = useState(false)
  const menuState = useState(false)
  const deleteModalState = useState(false)
  const renameModalState = useState(false)
  const imageModalState = useState(false)
  const templateModalState = useState(false)

  const isFooterActive = (e: MouseEvent) => {
    if (footerRef.current) {
      return footerRef.current.contains(e.target as Node)
    }
    return false
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      isFooterActive(e.nativeEvent) ||
      footerState[0] ||
      menuState[0] ||
      deleteModalState[0] ||
      renameModalState[0] ||
      imageModalState[0] ||
      templateModalState[0]
    ) {
      e.stopPropagation()
    } else {
      window.open(`/projects/${agent.projectId}`, '_blank')
    }
  }

  return (
    <BaseAgentCard
      agent={agent}
      onClick={handleClick}
      menu={
        <AgentCardMenu
          agentName={agent.name}
          agentId={agent.id}
          agentDescription={agent.description}
          projectId={agent.projectId}
          isPublic={true} // TODO: get from API
          openState={menuState}
          deleteModalState={deleteModalState}
          renameModalState={renameModalState}
          imageModalState={imageModalState}
          templateModalState={templateModalState}
        />
      }
      footer={
        <AgentCardFooter
          agent={agent}
          state={footerState}
          buttonRef={footerRef}
          submitText="More Info"
          onSubmit={() => console.log('More info')}
        />
      }
    />
  )
}
