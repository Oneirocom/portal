import { ImageType } from '@magickml/portal-utils-shared'
import { PropsWithChildren } from 'react'
import { getImage } from 'shared/utils'
import type { TemplateGetStaticProps } from '../template-page-isr'
import { Avatar, AvatarImage, cn } from '@magickml/client-ui'
import { TemplatePageAsideItem } from './template-page-aside-item'
import { WizardHatIcon, MagickWandIcon, CrystalBallIcon } from '../icons'
import { Psychology, Update } from '@mui/icons-material'

type TemplatePageSideProps = {
  template: TemplateGetStaticProps['template']
}

export const TemplatePageSide = (
  props: PropsWithChildren<TemplatePageSideProps>
) => {
  const { template } = props
  const metadata = template?.templateVersions?.[0].metadata as Record<
    string,
    any
  >
  const models = (metadata?.models as string[]) ?? []

  return (
    <aside className="px-5 min-w-96 flex-col justify-start items-start hidden md:inline-flex gap-10">
      <Avatar className="w-48 h-48 mx-auto">
        <AvatarImage
          className="h-full w-full rounded-[10px]"
          src={getImage({
            id: template?.id ?? '1',
            image: template?.image ?? '',
            type: ImageType.IMAGE,
          })}
          alt={template.name?.at(0) || 'A'}
        />
        {template?.image ? template.name?.at(0) || 'A' : null}
      </Avatar>

      <div className="inline-flex flex-col w-full gap-5">
        <TemplatePageAsideItem title="Built By" Icon={WizardHatIcon}>
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
        </TemplatePageAsideItem>

        {/* <TemplatePageAsideItem title="Interactions">
          <p className="text-white text-base font-medium">93</p>
        </TemplatePageAsideItem>

        <TemplatePageAsideItem title="Likes">
          <p className="text-white text-base font-medium">7</p>
        </TemplatePageAsideItem> */}

        <TemplatePageAsideItem title="Current Version" Icon={Psychology}>
          <p className="text-white  font-medium">
            {`Version ${template?.templateVersions?.[0].version ?? '1'}`}
          </p>
        </TemplatePageAsideItem>

        <TemplatePageAsideItem title="Created" Icon={MagickWandIcon}>
          <p className="text-white  font-medium">
            {new Date(template?.createdAt ?? '').toLocaleDateString()}
          </p>
        </TemplatePageAsideItem>

        <TemplatePageAsideItem title="Last Updated" Icon={Update}>
          <p className="text-white  font-medium">
            {new Date(template?.updatedAt ?? '').toLocaleDateString()}
          </p>
        </TemplatePageAsideItem>

        <TemplatePageAsideItem
          title="Models Used"
          Icon={CrystalBallIcon}
          className="flex-col items-start justify-start"
        >
          {models.map(model => (
            <p key={model} className="text-gray-100  font-normal">
              {model}
            </p>
          ))}
        </TemplatePageAsideItem>
      </div>
    </aside>
  )
}
