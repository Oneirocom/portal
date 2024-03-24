import { PortalLayout, MainLayout } from '@magickml/portal-layout'
import { api } from '@magickml/portal-api-client'
import { AgentCardTemplate } from '@magickml/portal-ui'
import React from 'react'
import Head from 'next/head'
import { InputWithLabel, PortalDialog } from '@magickml/client-ui'
import TextareaWithLabel from 'packages/client/ui/src/lib/components/inputs/portal-textarea'

export const CreateAgentPage = () => {
  const { data: templates, isLoading: templatesLoading } =
    api.agents.getTemplates.useQuery()

  const [isOpen, setIsOpen] = React.useState(false)

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
              isPublic={false}
            />
          ))}
      </div>

      <PortalDialog
        base={{
          root: {
            open: isOpen,
            onOpenChange: setIsOpen,
          },
          trigger: {},
          content: {},
          title: {},
          description: {},
          footer: {},
        }}
        title="Create New Agent"
        description="Fill in the details to create a new agent."
        triggerButton={{
          variant: 'portal-primary',
          className: 'w-full',
          onClick: () => setIsOpen(true),
        }}
        triggerText="Create New Agent"
        footerButton={{
          variant: 'portal-primary',
          className: 'w-full',
          onClick: () => setIsOpen(false),
        }}
      >
        <InputWithLabel label="Name" id="name" />
        <TextareaWithLabel label="Description" id="description" rows={4} />
      </PortalDialog>
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
