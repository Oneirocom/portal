import { useState } from 'react'
import { BaseAgentCard } from './base-agent-card'
import { AgentCardMenu } from './menu/'

type AgentCardProps = {
  id: string
  projectId: string | null
  name: string | null
  image: string | null
  description: string | null
  publicAgentId: string | null
}

export const AgentCard: React.FC<AgentCardProps> = agent => {
  const menuState = useState(false)
  const deleteModalState = useState(false)
  const publicModalState = useState(false)
  const renameModalState = useState(false)
  const imageModalState = useState(false)
  const templateModalState = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      menuState[0] ||
      deleteModalState[0] ||
      publicModalState[0] ||
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
      {...agent}
      onClick={handleClick}
      menu={
        <AgentCardMenu
          agentName={agent.name}
          agentId={agent.id}
          agentDescription={agent.description}
          projectId={agent.projectId}
          isPublic={false}
          openState={menuState}
          deleteModalState={deleteModalState}
          publicModalState={publicModalState}
          renameModalState={renameModalState}
          imageModalState={imageModalState}
          templateModalState={templateModalState}
        />
      }
    />
  )
}
