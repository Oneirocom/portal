import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
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
  '/templates',
  '/',
])

const isIgnoredRoute = createRouteMatcher([
  '/api/magick',
  '/api/magick/budget/set_budget',
  '/api/magick/budget/get_budget',
  '/api/magick/user',
  '/api/magick/user(.*)',
])

export default clerkMiddleware(
  (auth, req) => {
    if (isIgnoredRoute(req)) {
      // Skip auth check for ignored routes
      return
    }
    if (!isPublicRoute(req)) {
      // Protect routes that are not public
      auth().protect()
    }
  },
  { debug: process.env.CLERK_MIDDLEWARE_LOGGING === 'true' }
)

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)',
    '/',
    '/(api|trpc)(.*)',
    '/agents(.*)',
    '/projects(.*)',
    '/account(.*)',
    '/billing(.*)',
    '/templates(.*)',
  ],
}
