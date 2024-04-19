import { useEffect } from 'react'
import { api } from '@magickml/portal-api-client'
import { useRouter } from 'next/router'
import { MainLayout, PortalLayout } from '@magickml/portal-layout'
import Head from 'next/head'
import { useInView } from 'react-intersection-observer'
import clsx from 'clsx'
import { AgentCard } from '@magickml/portal-ui'
import { Card, Button } from '@magickml/client-ui'
import { useUser } from '@clerk/nextjs'
import { PageHeader, type PageHeaderProps } from '../ui/page-header'
import { PageSection } from '../ui/page-section'
import { imgPrep } from './shared'

const header: PageHeaderProps = {
  title: 'Agents',
  description:
    "Choose from your Agents to access the Development Environment, where you can edit it's Spell.",
  loading: false,
}

export const AgentsPage = ({ initialData }) => {
  const { isSignedIn } = useUser()
  const router = useRouter()
  const { ref, inView } = useInView()
  const { data, isFetchingNextPage, fetchNextPage, hasNextPage, isLoading } =
    api.agents.getInfinite.useInfiniteQuery(
      {},
      {
        getNextPageParam: lastPage => lastPage.nextCursor,
        refetchInterval: 1000 * 60 * 1, // 1 minute
        initialData: initialData,
        enabled: isSignedIn,
      }
    )

  useEffect(() => {
    if (inView && data) {
      fetchNextPage()
    }
  }, [inView, data])

  return (
    <>
      <Head>
        <title>Agents | MagickML</title>
        <meta
          name="description"
          content="Choose from your Agents to access the Development Environment, where you can edit it's Spell."
        />
      </Head>

      <PageHeader {...header} loading={isLoading} />

      <PageSection title="Your Agents">
        {!isLoading &&
          data &&
          Array.isArray(data.pages) &&
          data.pages
            .flatMap(page => (page.items ? page.items : []))
            .map((agent, i: number) => (
              <AgentCard
                {...agent}
                key={`${agent.id}--official`}
                image={imgPrep(agent.image)}
              />
            ))}

        <Card
          onClick={() => router.push('/templates')}
          className="text-center font-medium font-montserrat bg-ds-card border-ds-primary-m border-dashed
        w-44 h-60 lg:w-56 lg:h-80 flex flex-col hover:scale-105 transition-all duration-150 ease-in-out hover:overflow-visible cursor-pointer justify-center items-center"
        >
          <span className="text-6xl dark:text-ds-primary-m text-ds-primary-p ">
            +
          </span>
          <span className="text-base dark:text-ds-primary-m text-ds-primary-p">
            Create New Agent
          </span>
        </Card>

        <div className="flex flex-col w-full">
          <Button
            ref={ref}
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            variant="outline"
            className={clsx('max-w-xs mx-auto', !hasNextPage && 'hidden')}
          >
            {isFetchingNextPage ? (
              <span className="loading loading-dot text-secondary-highlight" />
            ) : hasNextPage ? (
              'Load more'
            ) : (
              'No more agents'
            )}
          </Button>
        </div>
      </PageSection>
    </>
  )
}

AgentsPage.getLayout = (page: React.ReactElement) => {
  return (
    <PortalLayout>
      <MainLayout classNames="p-2 lg:p-10 gap-y-10">{page}</MainLayout>
    </PortalLayout>
  )
}
