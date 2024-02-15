import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  debug: process.env.CLERK_MIDDLEWARE_LOGGING === 'true',
  publicRoutes: [
    '/',
    '/auth/sign-in',
    '/auth/sign-up',
    '/auth/verify',
    '/terms',
    '/privacy',
    '/eula',
    '/404',
    '/api',
    '/api/auth/sync',
    '/api/billing/sync',
    '/api/magick(.*)',
    '404',
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
