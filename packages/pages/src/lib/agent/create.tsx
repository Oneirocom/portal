import { PortalLayout, MainLayout } from '@magickml/portal-layout'
import { api } from '@magickml/portal-api-client'
import { AgentCardTemplate } from '@magickml/portal-ui'
import React from 'react'
import Head from 'next/head'

export const CreateAgentPage = () => {
  const { data: templates, isLoading: templatesLoading } =
    api.agents.getTemplates.useQuery()

  return (
    <>
      <Head>
        <title>Create an Agent | MagickML</title>
      </Head>
      <h1 className="text-3xl font-semibold">Create an Agent</h1>
      <h3 className="text-2xl font-montAlt text-ds-secondary-p dark:text-ds-secondary-m">
        Select an Official Magick Starter Agents to start from:
      </h3>
      <div className="relative flex flex-wrap justify-center pb-10 gap-x-4 gap-y-4 lg:justify-start">
        {!templatesLoading &&
          templates &&
          templates.map((t, i: number) => (
            <AgentCardTemplate
              key={t.id}
              id={t.id}
              name={t.name ?? 'Untitled'}
              image={t.image}
              description={t?.description ?? ''}
            />
          ))}
      </div>
    </>
  )
}

CreateAgentPage.getLayout = (page: React.ReactElement) => {
  return (
    <PortalLayout>
      <MainLayout classNames="p-2 lg:p-10 gap-y-4">{page}</MainLayout>
    </PortalLayout>
  )
}
