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
      </Head>
      <div className="inline-flex gap-x-1 items-center">
        <h1 className="text-3xl font-semibold">Agents</h1>
        {isLoading && (
          <div className="loading loading-spinner text-ds-primary" />
        )}
      </div>
      <p className="text-lg font-medium text-ds-secondary-p dark:text-ds-secondary-m">
        {`Choose from your Agents to access the Development Environment, where you
        can edit it's Spell.`}
      </p>
      <h3 className="text-2xl font-montAlt text-ds-secondary-p dark:text-ds-secondary-m">
        Choose your Agent:
      </h3>

      <div className="relative flex flex-wrap justify-center pb-10 gap-x-4 gap-y-4 lg:justify-start">
        {!isLoading &&
          data &&
          Array.isArray(data.pages) &&
          data.pages
            .flatMap(page => (page.items ? page.items : []))
            .map((agent, i: number) => (
              <AgentCard
                key={agent.id}
                id={agent.id}
                projectId={agent.projectId ?? ''}
                name={agent.name ?? 'Untitled'}
                image={agent.image}
                description={agent?.description ?? ''}
                publicAgentId={agent.publicAgentId ?? ''}
              />
            ))}

        <Card
          onClick={() => router.push('/agents/create')}
          className="text-center font-medium font-montserrat bg-tranparent dark:bg-[#03010d] border-ds-primary-m border-dashed
        w-44 h-60 lg:w-56 lg:h-80 flex flex-col hover:scale-105 transition-all duration-150 ease-in-out hover:overflow-visible cursor-pointer justify-center items-center"
        >
          <span className="text-6xl text-ds-primary-m ">+</span>
          <span className="text-base text-ds-primary-m ">Create New Agent</span>
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
      </div>
    </>
  )
}

AgentsPage.getLayout = (page: React.ReactElement) => {
  return (
    <PortalLayout>
      <MainLayout classNames="p-2 lg:p-10 gap-y-4">{page}</MainLayout>
    </PortalLayout>
  )
}
