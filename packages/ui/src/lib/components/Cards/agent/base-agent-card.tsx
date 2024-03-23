import { Card, CardDescription, CardHeader, CardTitle } from '@magickml/client-ui'
import Image from 'next/legacy/image'
import { ImageType, getImage } from '@magickml/portal-utils-shared'
import { ReactNode } from 'react'

type BaseAgentCardProps = {
  id: string
  name: string | null
  image: string | null
  description: string | null
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  menu?: ReactNode
}

export const BaseAgentCard: React.FC<BaseAgentCardProps> = ({
  id,
  name,
  image,
  description,
  onClick,
  menu,
}) => {
  return (
    <Card
      onClick={onClick}
      key={id}
      className="w-44 h-60 lg:w-56 lg:h-80 flex flex-col hover:border-ds-primary hover:scale-105 transition-all duration-150 ease-in-out hover:overflow-visible cursor-pointer"
    >
      <div className="relative w-full basis-6/12 rounded-t-xl overflow-hidden m-0 p-0">
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
      <CardHeader className="p-0 pt-2.5 text-center basis-5/12 text-pretty">
        <CardTitle className="font-montserrat text-sm font-semibold">
          {name}
        </CardTitle>
        {description && (
          <CardDescription className="mx-1 line-clamp-3 lg:line-clamp-4">
            {description}
          </CardDescription>
        )}
      </CardHeader>
    </Card>
  )
}