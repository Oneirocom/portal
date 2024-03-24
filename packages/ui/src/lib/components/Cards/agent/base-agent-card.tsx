import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@magickml/client-ui'
import Image from 'next/legacy/image'
import { ImageType, getImage } from '@magickml/portal-utils-shared'
import { ReactNode } from 'react'
import { AgentCardInfo } from './types'

type BaseAgentCardProps = {
  agent: AgentCardInfo
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  menu?: ReactNode
  footer?: ReactNode
}

export const BaseAgentCard: React.FC<BaseAgentCardProps> = ({
  agent,
  onClick,
  menu,
  footer,
}) => {
  const { id, name, image, description } = agent

  return (
    <Card
      onClick={onClick}
      key={id}
      className="w-44 h-60 lg:w-56 lg:h-80 flex flex-col border-ds-neutral hover:border-ds-primary hover:scale-[102.5%] transition-all duration-150 ease-in-out hover:overflow-visible cursor-pointer"
    >
      <div className="relative w-full h-[53%] rounded-t-xl overflow-hidden m-0 p-0">
        {menu}
        <Image
          src={getImage({
            id,
            image,
            type: ImageType.IMAGE,
          })}
          alt={name ?? 'Placeholder'}
          layout="fill"
          className="object-cover"
        />
      </div>
      <CardHeader className="p-0 pt-2.5 h-[35%] text-center text-pretty grow">
        <CardTitle className="font-montserrat text-sm lg:text-base font-medium">
          {name}
        </CardTitle>
        {description && (
          <CardDescription className="mx-2 line-clamp-2 text-xs lg:text-base text-center dark:!text-ds-white !text-ds-black">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardFooter className="h-[12%]">{footer}</CardFooter>
    </Card>
  )
}
