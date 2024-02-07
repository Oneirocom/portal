import { authOptions } from '@magickml/portal-auth'
import { GetServerSidePropsContext } from 'next'
import { getServerSession } from 'next-auth'
import { decode, encode, getToken } from 'next-auth/jwt'
import { checkIfUserIsMember } from '@magickml/portal-api'
import { prisma } from '@magickml/portal-db'
import { Editor } from '@magickml/portal-pages'

export default Editor

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const projectId = ctx.params?.projectId

  if (!projectId) {
    return {
      redirect: {
        destination: '/projects',
        permanent: false,
      },
    }
  }

  // I think checking session and token is redundant, but I'm not sure
  const token = await getToken({
    req: ctx.req,
    secret: authOptions.secret as string,
    raw: true,
  })
  const session = await getServerSession(ctx.req, ctx.res, authOptions)

  if (!session || !token) {
    return {
      redirect: {
        destination: '/auth/sign-in',
        permanent: false,
      },
    }
  }

  // decode the token
  const decodedToken = await decode({
    token,
    secret: authOptions.secret as string,
  })

  if (!decodedToken) {
    return {
      redirect: {
        destination: '/projects',
        permanent: false,
      },
    }
  }

  // check if the user has access to the project
  const project = await prisma.project.findUnique({
    where: {
      id: projectId as string,
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

  const access = await checkIfUserIsMember(
    project.workspace_id || '',
    session.user.id,
    false
  )

  if (!access) {
    return {
      redirect: {
        destination: '/projects',
        permanent: false,
      },
    }
  }

  // add project to token
  const newToken = await encode({
    token: {
      ...decodedToken,
      user: {
        ...decodedToken.user,
        permissions: ['owner:*'],
      },
      project: projectId as string,
      // user: session.user.id,
    },
    secret: authOptions.secret as string,

    maxAge: 24 * 60 * 60, // 24 hours
  })

  // test if the new token is valid
  const newDecodedToken = await decode({
    token: newToken,
    secret: authOptions.secret as string,
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
      token: newToken,
      decodedToken: newDecodedToken,
      projectId: projectId as string,
      email: session.user.email,
    },
  }
}
