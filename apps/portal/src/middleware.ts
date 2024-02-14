import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  debug: process.env.CLERK_MIDDLEWARE_LOGGING === 'true',
  publicRoutes: [
    '/',
    '/auth/sign-in',
    '/auth/sign-up',
    '/auth/verify',
    '/api',
    '/api/auth/sync',
    '/api/billing/sync',
  ],
})

export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)',
    '/',
    '/(api|trpc)(.*)',
    '/agents(.*)',
    '/account(.*)',
    '/profile(.*)',
  ],
}
