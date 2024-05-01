import { MainLayout, PortalLayout } from '@magickml/portal-layout'

import type { TemplateGetStaticProps } from './template-page-isr'
import { TemplatePageContainer } from './layout/template-container'
import { TemplatePageSide } from './layout/template-page-aside'
import { TemplatePageMain } from './main/template-page-main'
import { ReactFlowProvider } from 'reactflow'
import Head from 'next/head'
import { getImage, ImageType } from 'shared/utils'

export function TemplatePage({ template }: TemplateGetStaticProps) {
  return (
    <>
      <Head>
        <title>{template.name} | MagickML</title>
        <meta name="description" content={template?.description || ''} />
        <meta property="og:title" content={template.name} />
        <meta property="og:description" content={template?.description || ''} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_APP_URL}/templates/${template.id}`}
        />
        <meta property="og:site_name" content="MagickML" />
        <meta
          property="og:image"
          content={getImage({
            id: template.id,
            image: template.image,
            type: ImageType.IMAGE,
          })}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
      </Head>
      <TemplatePageContainer>
        <TemplatePageSide template={template} />
        <ReactFlowProvider>
          <TemplatePageMain template={template} />
        </ReactFlowProvider>
      </TemplatePageContainer>
    </>
  )
}
TemplatePage.getLayout = (page: React.ReactElement) => {
  return (
    <PortalLayout>
      <MainLayout classNames="p-2 lg:p-10 gap-y-10">{page}</MainLayout>
    </PortalLayout>
  )
}
