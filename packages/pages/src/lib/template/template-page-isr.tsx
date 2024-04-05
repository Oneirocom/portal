import type { InferGetStaticPropsType } from 'next'
import { prismaPortal } from '@magickml/portal-db'

export async function templatesGetStaticProps() {
  const template = await prismaPortal.template.findFirst({
    where: {
      id: 'baby-agi',
    },
    select: {
      id: true,
      name: true,
      image: true,
      description: true,
      createdAt: true,
      updatedAt: true,
      templateVersions: {
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

  return {
    props: {
      template: {
        ...template,
        createdAt: template?.createdAt?.toISOString(),
        updatedAt: template?.createdAt?.toISOString(),
        templateVersions: template?.templateVersions.map(version => ({
          ...version,
          createdAt: version.createdAt.toISOString(),
          updatedAt: version.updatedAt.toISOString(),
        })),
      },
    },
    revalidate: 600, // Revalidate every 10 minutes (600 seconds)
  }
}

export type TemplateGetStaticProps = InferGetStaticPropsType<
  typeof templatesGetStaticProps
>
