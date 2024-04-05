import { ImageType } from '@magickml/portal-utils-shared'
import Image from 'next/image'
import { PropsWithChildren } from 'react'
import {  getImage } from 'shared/utils'
import type { TemplateGetStaticProps } from '../template-page-isr'
import { Avatar, AvatarImage } from '@magickml/client-ui'
import { TemplatePageAsideItem } from './template-page-aside-item'

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
    <aside className="px-5 w-96 pb-4 flex-col justify-center items-start gap-y-10 inline-flex">
      <Image
        src={getImage({
          id: template?.id ?? '1',
          image: template?.image ?? '',
          type: ImageType.IMAGE,
        })}
        alt={template?.name ?? 'template-image'}
        className="bg-ds-card-alt rounded-[5px] overflow-hidden"
        width={300}
        height={300}
      />

      <div className="self-stretch flex flex-col justify-start items-start gap-8">
        <TemplatePageAsideItem title="Built By">
          <div className="inline-flex items-center gap-x-1 justify-start">
            <Avatar>
              <AvatarImage
                className="object-cover w-full h-full rounded-full"
                src={getImage({
                  id: template?.id ?? '1',
                  image: template?.image ?? '',
                  type: ImageType.IMAGE,
                })}
                alt={template.name?.at(0) || 'A'}
              />
              {template?.image ? template.name?.at(0) || 'A' : null}
            </Avatar>
            <p className="text-ds-primary font-medium text-base">@username</p>
          </div>
        </TemplatePageAsideItem>

        <TemplatePageAsideItem title="Models Used">
          {models.map(model => (
            <p key={model} className="font-medium text-base">
              {model}
            </p>
          ))}
        </TemplatePageAsideItem>

        <TemplatePageAsideItem title="Current Version">
          <p className="text-base font-normal">
            {template.templateVersions?.[0].version ?? '1'}
          </p>
        </TemplatePageAsideItem>

        <TemplatePageAsideItem title="Created">
          <p className="text-base font-normal">
            {new Date(template?.createdAt ?? '').toLocaleDateString()}
          </p>
        </TemplatePageAsideItem>

        <TemplatePageAsideItem title="Last Updated">
          <p className="text-base font-normal">
            {new Date(template?.updatedAt ?? '').toLocaleDateString()}
          </p>
        </TemplatePageAsideItem>
      </div>
    </aside>
  )
}
