import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  debug: process.env.CLERK_MIDDLEWARE_LOGGING === 'true',
  publicRoutes: [
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
    '/subscribe',
    'templates/(.*)',
    '/api/trpc/templates.find',
    '/templates/(.*)',
    `/templates`,
  ],
  ignoredRoutes: [
    '/api/magick',
    '/api/magick/budget/set_budget',
    '/api/magick/budget/get_budget',
    '/api/magick/user',
    '/api/magick/user(.*)',
  ],
})

export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)',
    '/',
    '/(api|trpc)(.*)',
    '/agents(.*)',
    '/projects(.*)',
    '/account(.*)',
    '/billing(.*)',
  ],
}
