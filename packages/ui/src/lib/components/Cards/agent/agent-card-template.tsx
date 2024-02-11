import { Card, CardDescription, CardHeader, CardTitle } from '@magickml/client-ui'
import Image from 'next/legacy/image'
import { ImageType, getImage } from '@magickml/portal-utils-shared'

type AgentCardTemplateProps = {
  id: string
  name: string | null
  image: string | null
  description: string | null
  handleClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const AgentCardTemplate: React.FC<AgentCardTemplateProps> = agent => {
  return (
    <Card
      onClick={agent.handleClick}
      key={agent.id}
      className="w-44 h-60 lg:w-56 lg:h-80 flex flex-col hover:border-ds-primary hover:scale-105 transition-all duration-150 ease-in-out hover:overflow-visible cursor-pointer"
    >
      <div className="relative w-full basis-6/12 rounded-t-xl overflow-hidden m-0 p-0">
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
