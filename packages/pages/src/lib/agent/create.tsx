import { PortalLayout, MainLayout } from '@magickml/portal-layout'
import { api } from '@magickml/portal-api-client'
import { AgentCardTemplate } from '@magickml/portal-ui'
import React from 'react'
import Head from 'next/head'
import { useUser } from '@clerk/nextjs'
import { PageHeader, type PageHeaderProps } from '../ui/page-header'
import { PageSection } from '../ui/page-section'

const header: PageHeaderProps = {
  title: 'Create an Agent',
  description:
    'Choose from a selection of our Official Magick Agents that you would like to customize and make your own!',
  loading: false,
}

export const CreateAgentPage = () => {
  const { isSignedIn } = useUser()

  const { data: officalTemplates, ...officialQuery } =
    api.templates.find.useQuery({
      type: 'OFFICIAL',
    })

  const { data: communityTemplates, ...communityQuery } =
    api.templates.find.useQuery(
      {
        type: 'COMMUNITY',
      },
      {
        enabled: isSignedIn,
      }
    )

  const { data: userTemplates, ...userQuery } = api.templates.find.useQuery(
    {
      self: true,
    },
    {
      enabled: isSignedIn,
    }
  )

  return (
    <>
      <Head>
        <title>Create an Agent | MagickML</title>
        <meta
          name="description"
          content="Choose from a selection of our Official Magick Agents that you would like to customize and make your own!"
        />
      </Head>

      <PageHeader {...header} />

      <PageSection
        title="Official Agent Templates"
        loading={officialQuery.isLoading}
      >
        {!officialQuery.isLoading &&
          officalTemplates &&
          officalTemplates.map((t, i: number) => (
            <AgentCardTemplate
              key={`${t.id}--official`}
              id={t.id}
              name={t.name ?? 'Untitled'}
              image={t.image}
              description={t?.description ?? ''}
              isPublic={t.public}
              creator={t.userId}
              metadata={t.templateVersions[0]?.metadata ?? null}
              ogAgentId={t.ogAgentId}
              version={t.templateVersions[0]?.version.toString() ?? null}
            />
          ))}
      </div>
      <MagickDialog
        logo={false}
        open={open}
        hideButton={true}
        isLoading={isMakingAgentRemix}
        setOpen={setOpen}
        trigger={<RemixButton onClick={() => setOpen(true)} />}
        title="Name Your Agent"
        description="Using a Template will create a new Agent with the same spell as the Template."
        onSubmit={handleRemixAgent}
        submitText="Create"
        submitDisabled={!name}
      >
        <Label htmlFor="name" className="text-left">
          Name your agent
        </Label>
        <Input
          id="agentName"
          autoComplete="off"
          value={name}
          onChange={e => setName(e.target.value)}
          className="focus:border-secondary-highlight bg-ds-card-alt placeholder:font-montserrat placeholder:text-black/70 dark:placeholder:text-white/70 w-full p-2 border-2 border-[#808f9a] rounded-[8px] dark:text-white"
          placeholder="Tom Bombadil"
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleRemixAgent()
            }
          }}
        />
      </MagickDialog>
    </>
  )
}

CreateAgentPage.getLayout = (page: React.ReactElement) => {
  return (
    <PortalLayout>
      <MainLayout classNames="p-2 lg:p-10 gap-y-10">{page}</MainLayout>
    </PortalLayout>
  )
}
