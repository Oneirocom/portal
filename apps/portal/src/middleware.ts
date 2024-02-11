import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  afterAuth: (auth, req, evt) => {
    // if (auth.userId || auth.isPublicRoute) {
    // }
  },
  publicRoutes: [
    '/, /auth/sign-in, /auth/sign-up, /auth/verify',
    '/api',
    '/api/auth/sync',
  ],
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
