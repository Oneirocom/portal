import { prisma } from '@magickml/portal-db'
import { unauthorizedRedirect } from '@magickml/portal-utils-server'
import { authorizeTester } from '@magickml/portal-utils-shared'
import { getServerSession } from 'next-auth'
import { CreateAgentPage } from '@magickml/portal-pages'
import { GetServerSidePropsContext } from 'next'
import { authOptions } from '@magickml/portal-auth'

export default CreateAgentPage

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerSession(ctx.req, ctx.res, authOptions)

  if (!session) {
    return unauthorizedRedirect({
      destination: '/auth/sign-in',
      message: 'notLoggedIn',
    })
  }

  if (authorizeTester(session?.user.role)) {
    return unauthorizedRedirect({
      destination: '/auth/sign-in',
      message: 'notAuthorized',
    })
  }

  const templateAgents = await prisma.agents.findMany({
    where: {
      isTemplate: true,
      remixable: true,
    },
    select: {
      commentsCount: true,
      creatorName: true,
      creatorImage: true,
      enabled: true,
      likesCount: true,
      name: true,
      image: true,
      id: true,
      publicAgentId: true,
      description: true,
    },
    orderBy: {
      likesCount: 'desc',
    },
    take: 5,
  })

  // We probably want to optimize this for popular remixable agents
  const remixableAgents = await prisma.agents.findMany({
    where: {
      remixable: true,
      isTemplate: false,
    },
    select: {
      commentsCount: true,
      creatorName: true,
      creatorImage: true,
      enabled: true,
      likesCount: true,
      name: true,
      image: true,
      id: true,
      publicAgentId: true,
      description: true,
    },
    orderBy: {
      likesCount: 'desc',
    },
    take: 20,
  })

  return {
    props: {
      initialRemixableAgents: remixableAgents?.map(agent => ({
        ...agent,
        likesCount: Number(agent.likesCount),
        commentsCount: Number(agent.commentsCount),
      })),
      initialTemplateAgents: templateAgents?.map(agent => ({
        ...agent,
        likesCount: Number(agent.likesCount),
        commentsCount: Number(agent.commentsCount),
      })),
    },
  }
}
