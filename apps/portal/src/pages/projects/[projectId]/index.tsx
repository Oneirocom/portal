import { GetServerSidePropsContext } from 'next'
import { prepareToken } from '@magickml/portal-api'
import { prisma } from '@magickml/portal-db'
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

  // check if project exists
  const project = await prisma.project.findUnique({
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
  await prisma.project.update({
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
}
