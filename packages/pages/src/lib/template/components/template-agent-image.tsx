import { ImageType } from '@magickml/portal-utils-shared'
import { getImage } from 'shared/utils'
import { Avatar, AvatarImage, cn } from '@magickml/client-ui'
import type { TemplateGetStaticProps } from '../template-page-isr'

interface TemplateAgentImageProps extends React.ComponentProps<typeof Avatar> {
  template: TemplateGetStaticProps['template']
}

export const TemplateAgentImage: React.FC<TemplateAgentImageProps> = ({
  template,
  className,
  ...props
}) => {
  return (
    <Avatar
      className={cn(
        'w-full aspect-square max-w-72 h-auto !rounded-[10px] mx-auto',
        className
      )}
      {...props}
    >
      <AvatarImage
        className="h-full w-full !rounded-[10px]"
        src={getImage({
          id: template?.id ?? '1',
          image: template?.image ?? '',
          type: ImageType.IMAGE,
        })}
        alt={template.name?.at(0) || 'A'}
      />
      {template?.image ? template.name?.at(0) || 'A' : null}
    </Avatar>
  )
}
