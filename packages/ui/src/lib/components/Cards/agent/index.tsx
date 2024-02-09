import { Card, CardDescription, CardHeader, CardTitle } from '../../ui/card'
import Image from "next/legacy/image"
import { ImageType, getImage } from '@magickml/portal-utils-shared'
import { AgentCardMenu } from './agent-card-menu'
import { useRouter } from 'next/router'
import { useState } from 'react'

type AgentCardProps = {
  id: string
  projectId: string | null
  name: string | null
  image: string | null
  description: string | null
  publicAgentId: string | null
}

export const AgentCard: React.FC<AgentCardProps> = agent => {
  const router = useRouter()
  const menuState = useState(false)
  const deleteModalState = useState(false)
  const publicModalState = useState(false)
  const renameModalState = useState(false)
  const imageModalState = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      menuState[0] ||
      deleteModalState[0] ||
      publicModalState[0] ||
      renameModalState[0] ||
      imageModalState[0]
    ) {
      e.stopPropagation()
    } else {
      router.push(`/projects/${agent.projectId}`)
    }
  }

  return (
    <Card
      onClick={handleClick}
      key={agent.id}
      className="w-44 h-60 lg:w-56 lg:h-80 flex flex-col hover:border-ds-primary hover:scale-105 transition-all duration-150 ease-in-out hover:overflow-visible cursor-pointer"
    >
      <div className="relative w-full basis-6/12 rounded-t-xl overflow-hidden m-0 p-0">
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
        />
        <Image
          src={getImage({
            id: agent.id,
            image: agent.image,
            type: ImageType.IMAGE,
          })}
          alt={agent?.name ? agent.name : 'Placeholder'}
          layout="fill"
          className="object-cover"
        />
      </div>
      <CardHeader className="p-0 pt-2.5 text-center basis-5/12 text-pretty">
        <CardTitle className="font-montserrat text-sm font-semibold">
          {agent.name}
        </CardTitle>
        {agent?.description && (
          <CardDescription className="mx-1 line-clamp-3 lg:line-clamp-4">
            {agent.description}
          </CardDescription>
        )}
      </CardHeader>
    </Card>
  )
}
