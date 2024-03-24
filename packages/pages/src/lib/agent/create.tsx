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
  const { user, isSignedIn } = useUser()

  const { data: officalTemplates, ...officialQuery } =
    api.templates.find.useQuery({
      type: 'OFFICIAL',
    })

  const { data: userTemplates, ...userQuery } = api.templates.find.useQuery(
    {
      type: 'COMMUNITY',
      userId: user?.id,
    },
    {
      enabled: isSignedIn,
    }
  )

  const { data: communityTemplates, ...communityQuery } =
    api.templates.find.useQuery({
      type: 'COMMUNITY',
    })

  return (
    <>
      <Head>
        <title>Create an Agent | MagickML</title>
      </Head>
      {/* <div className="gap-y-4 flex flex-col w-full">
        <h1 className="text-3xl font-semibold font-montserrat">
          Create an Agent
        </h1>
        <p className="text-base font-normal font-montserrat">
          Choose from a selection of our Official Magick Agents that you would
          like to customize and make your own!
        </p>
      </div> */}
      <PageHeader {...header} />

      <PageSection
        title="Official Agent Templates"
        loading={officialQuery.isLoading}
      >
        {!officialQuery.isLoading &&
          officalTemplates &&
          officalTemplates.map((t, i: number) => (
            <AgentCardTemplate
              key={t.id}
              id={t.id}
              name={t.name ?? 'Untitled'}
              image={t.image}
              description={t?.description ?? ''}
              isPublic={false}
            />
          ))}
      </PageSection>

      <PageSection
        title="Community Agent Templates"
        loading={communityQuery.isLoading}
      >
        {!communityQuery.isLoading &&
          communityTemplates &&
          communityTemplates.map((t, i: number) => (
            <AgentCardTemplate
              key={t.id}
              id={t.id}
              name={t.name ?? 'Untitled'}
              image={t.image}
              description={t?.description ?? ''}
              isPublic={true}
            />
          ))}
      </PageSection>

      <PageSection title="Your Agent Templates" loading={userQuery.isLoading}>
        {!userQuery.isLoading &&
          userTemplates &&
          userTemplates.map((t, i: number) => (
            <AgentCardTemplate
              key={t.id}
              id={t.id}
              name={t.name ?? 'Untitled'}
              image={t.image}
              description={t?.description ?? ''}
              isPublic={false}
            />
          ))}
      </PageSection>
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
