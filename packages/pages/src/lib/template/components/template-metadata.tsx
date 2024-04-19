import { ImageType } from '@magickml/portal-utils-shared'
import { getImage } from 'shared/utils'
import type { TemplateGetStaticProps } from '../template-page-isr'
import { Avatar, AvatarImage, cn } from '@magickml/client-ui'
import { TempateMetadataItemItem } from './template-metadata-item'
import { WizardHatIcon, MagickWandIcon, CrystalBallIcon } from '../icons'
import { Psychology, Update, PlayArrow, Favorite } from '@mui/icons-material'

interface TemplateMetadataProps extends React.HTMLAttributes<HTMLDivElement> {
  template: TemplateGetStaticProps['template']
}

export const TemplateMetadata: React.FC<TemplateMetadataProps> = ({
  template,
  className,
  ...props
}) => {
  const metadata = template?.templateVersions?.[0].metadata as Record<
    string,
    any
  >
  const models = (metadata?.models as string[]) ?? []

  return (
    <div className={cn('inline-flex flex-col w-full', className)} {...props}>
      <TempateMetadataItemItem title="Built By" Icon={WizardHatIcon}>
        <div className="inline-flex w-full items-center justify-start gap-x-1">
          <Avatar className="w-8 h-8 items-start justify-start">
            <AvatarImage
              className="h-full w-full rounded-full"
              alt="Magick"
              src={getImage({
                id: template?.id ?? '1',
                image: template?.image ?? '',
                type: ImageType.IMAGE,
              })}
            />
          </Avatar>
          <span className="text-ds-primary-p dark:text-ds-primary-m  font-medium">
            Magick
          </span>
        </div>
      </TempateMetadataItemItem>

      <TempateMetadataItemItem title="Template Uses" Icon={PlayArrow}>
        <p className="text-white text-base font-medium">
          {template?.usageCount ?? 'n/a'}
        </p>
      </TempateMetadataItemItem>

      <TempateMetadataItemItem title="Likes" Icon={Favorite}>
        <p className="text-white text-base font-medium">7</p>
      </TempateMetadataItemItem>

      <TempateMetadataItemItem title="Current Version" Icon={Psychology}>
        <p className="font-medium">
          {`Version ${template?.templateVersions?.[0].version ?? '1'}`}
        </p>
      </TempateMetadataItemItem>

      <TempateMetadataItemItem title="Created" Icon={MagickWandIcon}>
        <p className="font-medium">
          {new Date(template?.createdAt ?? '').toLocaleDateString()}
        </p>
      </TempateMetadataItemItem>

      <TempateMetadataItemItem title="Last Updated" Icon={Update}>
        <p className="font-medium">
          {new Date(template?.updatedAt ?? '').toLocaleDateString()}
        </p>
      </TempateMetadataItemItem>

      <TempateMetadataItemItem
        title="Models Used"
        Icon={CrystalBallIcon}
        className="flex flex-col items-start justify-start gap-y-2 w-full border-none"
        constainerProps={{
          className: cn('w-full flex flex-row-wrap'),
        }}
      >
        {models.map(model => (
          <div className="inline-flex gap-x-1 basis-1/2">
            <Avatar key={model} className="w-8 h-8 items-start justify-start">
              <AvatarImage
                className="h-full w-full rounded-full"
                alt={model}
                src={getImage({
                  id: template?.id ?? '1',
                  image: template?.image ?? '',
                  type: ImageType.IMAGE,
                })}
              />
            </Avatar>
            <span>Model Org</span>
          </div>
        ))}
      </TempateMetadataItemItem>
    </div>
  )
}
