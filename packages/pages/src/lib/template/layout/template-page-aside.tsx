import { PropsWithChildren } from 'react'
import type { TemplateGetStaticProps } from '../template-page-isr'
import { TemplateAgentImage } from '../components/template-agent-image'
import { TemplateMetadata } from '../components/template-metadata'

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
    <aside className="px-5 max-w-96 w-full h-full overflow-y-auto flex-col justify-start items-start hidden md:inline-flex gap-10">
      <TemplateAgentImage template={template} />
      <TemplateMetadata template={template} />
    </aside>
  )
}
