import { MainLayout, PortalLayout } from '@magickml/portal-layout'

import type { TemplateGetStaticProps } from './template-page-isr'
import { TemplatePageContainer } from './template-container'
import { TemplatePageSide } from './aside/template-page-aside'
import { TemplatePageMain } from './main/template-page-main'
import { ReactFlowProvider } from 'reactflow'

export function TemplatePage({ template }: TemplateGetStaticProps) {
  return (
    <TemplatePageContainer>
      <TemplatePageSide template={template} />
      <ReactFlowProvider>
        <TemplatePageMain template={template} />
      </ReactFlowProvider>
    </TemplatePageContainer>
  )
}
TemplatePage.getLayout = (page: React.ReactElement) => {
  return (
    <PortalLayout>
      <MainLayout classNames="p-2 lg:p-10 gap-y-10">{page}</MainLayout>
    </PortalLayout>
  )
}
