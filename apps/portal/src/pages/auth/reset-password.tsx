import { GetServerSidePropsContext } from 'next'
import { ResetPassword } from '@magickml/portal-pages'
import { prisma } from '@magickml/portal-db'

export default ResetPassword

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const token = ctx.query.token
  if (typeof token !== 'string') {
    return {
      redirect: {
        destination: '/auth/sign-in?invalidToken=true',
        permanent: false,
      },
    }
  }

  const passwordResetToken = await prisma.passwordResetToken.findFirst({
    where: {
      token,
      expiry: { gte: new Date() },
    },
  })

  if (!passwordResetToken) {
    return {
      redirect: {
        destination: '/auth/sign-in?invalidToken=true',
        permanent: false,
      },
    }
  }

  return {
    props: {
      token,
    },
  }
}
