import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
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
