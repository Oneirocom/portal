import { useState } from 'react'
import { TemplateGetStaticProps } from '../template-page-isr'
import { TemplatePageHeader } from './template-page-header'
import { TemplatePageSubHeader } from './template-page-subheader'
import dynamic from 'next/dynamic'

type TemplatePageMainProps = {
  template: TemplateGetStaticProps['template']
}

export const TemplatePageMain = (props: TemplatePageMainProps) => {
  const { template } = props
  const spell = template?.templateVersions?.[0].spells?.[0]
  const [loading, setLoading] = useState(true)

  const ReadOnlyFlow = dynamic(
    () => import('client/editor').then(mod => mod.MagickIDE),
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
      <div className="w-full h-full max-h-[400px] max-w-7xl bg-ds-card-alt rounded-[5px] border border-ds-primary-m dark:ds-primary-p overflow-hidden">
        {/* @ts-ignore */}
        <ReadOnlyFlow spell={spell} />
      </div>
    </main>
  )
}
