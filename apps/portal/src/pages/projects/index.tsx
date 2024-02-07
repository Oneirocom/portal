import { authOptions } from '@magickml/portal-auth'
import { GetServerSidePropsContext } from 'next'
import { getServerSession } from 'next-auth'
import { ProjectsPage } from '@magickml/portal-pages'
import { unauthorizedRedirect } from '@magickml/portal-utils-server'

export default ProjectsPage

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerSession(ctx.req, ctx.res, authOptions)

  if (!session) {
    return unauthorizedRedirect({
      destination: '/auth/sign-in',
      message: 'notLoggedIn',
    })
  }

  // if (session?.user.role !== 'ADMIN') {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   }
  // }

  return {
    props: {},
  }
}
