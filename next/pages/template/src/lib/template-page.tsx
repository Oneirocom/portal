import type { TemplateGetStaticProps } from './template-page-isr'
import { TemplatePageContainer } from './layout/template-container'
import { TemplatePageSide } from './layout/template-page-aside'
import { TemplatePageMain } from './main/template-page-main'
import { ReactFlowProvider } from '@xyflow/react'
import { parseParams } from './template-page-isr'
import { prismaPortal } from '@magickml/portal-db'
import { notFound } from 'next/navigation'

export const dynamicParams = true

export async function TemplatePage({
  params,
}: {
  params: { templateId: string }
}) {
  const parsedParams = parseParams(params)

  if (!parsedParams) {
    notFound()
  }

  const template = await prismaPortal.template.findFirst({
    where: {
      id: parsedParams.id,
    },
    select: {
      id: true,
      name: true,
      image: true,
      description: true,
      createdAt: true,
      updatedAt: true,
      usageCount: true,
      userId: true,
      templateVersions: parsedParams.version
        ? {
            where: {
              version: parsedParams.version,
            },
            select: {
              id: true,
              version: true,
              spells: true,
              createdAt: true,
              updatedAt: true,
              metadata: true,
            },
          }
        : {
            orderBy: {
              version: 'desc',
            },
            take: 1,
            select: {
              id: true,
              version: true,
              spells: true,
              createdAt: true,
              updatedAt: true,
              metadata: true,
            },
          },
    },
  })

  if (!template) {
    notFound()
  }

  const returnTemplate: TemplateGetStaticProps['template'] = {
    ...template,
    createdAt: template?.createdAt?.toISOString() ?? '',
    updatedAt: template?.updatedAt?.toISOString() ?? '',
    // @ts-ignore
    templateVersions: template.templateVersions.map(version => ({
      ...version,
      createdAt: version.createdAt.toISOString(),
      updatedAt: version.updatedAt.toISOString(),
    })),
  }

  return (
    <>
      <TemplatePageContainer>
        <TemplatePageSide template={returnTemplate} />
        <ReactFlowProvider>
          <TemplatePageMain template={returnTemplate} />
        </ReactFlowProvider>
      </TemplatePageContainer>
    </>
  )
}
