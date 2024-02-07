import { type GetServerSidePropsContext } from 'next'
import { getServerSession } from 'next-auth'
import { getToken } from 'next-auth/jwt'
import { authOptions } from './auth-options'

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = async (ctx: {
  req: GetServerSidePropsContext['req']
  res: GetServerSidePropsContext['res']
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions)
}

export const getServerAuthToken = async (ctx: {
  req: GetServerSidePropsContext['req']
}) => {
  return getToken({
    req: ctx.req,
    secret: authOptions.secret,
    raw: true,
  })
}
