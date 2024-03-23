import { BaseAgentCard } from './base-agent-card'

type AgentCardTemplateProps = {
  id: string
  name: string | null
  image: string | null
  description: string | null
  handleClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const AgentCardTemplate: React.FC<AgentCardTemplateProps> = agent => {
  return <BaseAgentCard {...agent} onClick={agent.handleClick} />
}
