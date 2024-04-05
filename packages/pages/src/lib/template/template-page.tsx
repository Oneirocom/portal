import { MainLayout, PortalLayout } from '@magickml/portal-layout'

import type { TemplateGetStaticProps } from './template-page-isr'
import { TemplatePageContainer } from './template-container'
import { TemplatePageSide } from './aside/template-page-aside'
import { TemplatePageMain } from './main/template-page-main'

export function TemplatePage({ template }: TemplateGetStaticProps) {
  return (
    <TemplatePageContainer>
      <TemplatePageSide template={template} />
      <TemplatePageMain template={template} />
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
