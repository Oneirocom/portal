import { authOptions } from '@magickml/portal-auth'
import { AgentsPage } from '@magickml/portal-pages'
import { getInfiniteAgents, paginateItems } from '@magickml/portal-utils-server'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'

export default AgentsPage

export const getServerSideProps: GetServerSideProps = async ctx => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions)
  if (!session) {
    return {
      redirect: {
        destination: '/auth/sign-in',
        permanent: false,
      },
    }
  }

  const limit = 10

  const fetchedItems = await getInfiniteAgents({
    limit,
    userId: session.user.id,
  })

  const result = paginateItems(fetchedItems, limit)

  return {
    props: {
      initialData: {
        ...result,
        nextCursor: result.nextCursor || null,
      },
    },
  }
}
