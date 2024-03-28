import { GetServerSidePropsContext } from 'next'
import { prepareToken } from '@magickml/portal-server-router'
import { prismaPortal } from '@magickml/portal-db'
import { Editor } from '@magickml/portal-pages'
import { getAuth } from '@clerk/nextjs/server'

export default Editor

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const projectId = ctx.params?.projectId
  const auth = getAuth(ctx.req)

  if (typeof projectId !== 'string' || !auth.userId) {
    return {
      redirect: {
        destination: '/projects',
        permanent: false,
      },
    }
  }

  try {
    // check if project exists
    const project = await prismaPortal.project.findUnique({
      where: {
        id: projectId as string,
      },
      select: {
        id: true,
      },
    })

    if (!project) {
      return {
        redirect: {
          destination: '/projects',
          permanent: false,
        },
      }
    }

    const token = await prepareToken({
      user: auth,
      projectId: projectId as string,
    })

    // update the projects last active date
    await prismaPortal.project.update({
      where: {
        id: projectId as string,
      },
      data: {
        lastActive: new Date(),
      },
    })

    return {
      props: {
        token,
        projectId,
        userId: auth.userId,
        email: '',
        apiUrl,
      },
    }
  } catch (error) {
    console.error('Error in getServerSideProps:', error)
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    }
  }
}
