import { SpellInterfaceWithGraph } from 'server/schemas'
import { TemplateGetStaticProps } from '../template-page-isr'
import { TemplatePageHeader } from './template-page-header'
import { TemplatePageSubHeader } from './template-page-subheader'
import dynamic from 'next/dynamic'
import { useRef } from 'react'

type TemplatePageMainProps = {
  template: TemplateGetStaticProps['template']
}

export const TemplatePageMain = (props: TemplatePageMainProps) => {
  const { template } = props
  const spell = template?.templateVersions?.[0].spells?.[0] as
    | SpellInterfaceWithGraph
    | undefined
    | null
  const parentRef = useRef<HTMLDivElement>(null)

  const ReadOnlyFlow = dynamic(
    () => import('@magickml/flow-core').then(mod => mod.ReadOnlyFlow),
    {
      ssr: false,
      loading: () => (
        <object
          type="image/svg+xml"
          data="/images/loading.svg"
          aria-label="loading..."
          className="w-full h-full max-h-96 max-w-4xl bg-ds-card-alt"
        ></object>
      ),
    }
  )

  return (
    <main className="w-full px-10 items-start gap-8 flex flex-col">
      <TemplatePageHeader template={template} />
      <TemplatePageSubHeader template={template} />
      <div
        ref={parentRef}
        className="w-full h-full max-h-[400px] max-w-7xl bg-ds-card-alt rounded-[5px] border border-ds-primary-m dark:ds-primary-p overflow-hidden"
      >
        {spell ? (
          <ReadOnlyFlow
            spell={spell}
            windowDimensions={{ width: 1280, height: 400 }}
            parentRef={parentRef}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-ds-primary-m dark:text-ds-primary-p">
            No spell found
          </div>
        )}
      </div>
    </main>
  )
}
