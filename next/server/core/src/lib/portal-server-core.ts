/**
 * YOU PROBABLY DON'T NEED TO EDIT THIS FILE, UNLESS:
 * 1. You want to modify request context (see Part 1).
 * 2. You want to create a new middleware or type of procedure (see Part 3).
 *
 * TL;DR - This is where all the tRPC server stuff is created and plugged in. The pieces you will
 * need to use are documented accordingly near the end.
 */

import { initTRPC, TRPCError } from '@trpc/server'
import { type CreateNextContextOptions } from '@trpc/server/adapters/next'
import superjson from 'superjson'
import { ZodError } from 'zod'
import { prismaPortal } from '@magickml/portal-db'
import { NextApiRequest } from 'next'
import { getAuth } from '@clerk/nextjs/server'

/**
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API.
 *
 * These allow you to access things when processing a request, like the database, the session, etc.
 */

type CreateContextOptions = {
  req?: NextApiRequest
  auth: ReturnType<typeof getAuth>
}

/**
 * This helper generates the "internals" for a tRPC context. If you need to use it, you can export
 * it from here.
 *
 * Examples of things you may need it for:
 * - testing, so we don't have to mock Next.js' req/res
 * - tRPC's `createSSGHelpers`, where we don't have req/res
 *
 * @see https://create.t3.gg/en/usage/trpc#-serverapitrpcts
 */
const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    req: opts.req,
    db: prismaPortal,
    auth: opts.auth,
  }
}

/**
 * This is the actual context you will use in your router. It will be used to process every request
 * that goes through your tRPC endpoint.
 *
 * @see https://trpc.io/docs/context
 */
export const createTRPCContext = async (opts: CreateNextContextOptions) => {
  const { req } = opts

  return createInnerTRPCContext({
    req,
    auth: getAuth(opts.req),
  })
}

/**
 * 2. INITIALIZATION
 *
 * This is where the tRPC API is initialized, connecting the context and transformer. We also parse
 * ZodErrors so that you get typesafety on the frontend if your procedure fails due to validation
 * errors on the backend.
 */

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
      },
    }
  },
})

/**
 * 3. ROUTER & PROCEDURE (THE IMPORTANT BIT)
 *
 * These are the pieces you use to build your tRPC API. You should import these a lot in the
 * "/src/server/api/routers" directory.
 */

/**
 * This is how you create new routers and sub-routers in your tRPC API.
 *
 * @see https://trpc.io/docs/router
 */
export const createTRPCRouter = t.router

/** Middleware that enforces users are logged in before running the procedure. */
const enforceUserIsAuthed = t.middleware(({ next, ctx }) => {
  if (!ctx.auth.userId) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }
  return next({
    ctx: {
      auth: ctx.auth,
    },
  })
})

/**
 *  Middleware to enforce a specific header key on every request.
 */
const enforceHeaderKey = (headerKey: string, expectedKeyValue: string) => {
  return t.middleware(({ ctx, next }) => {
    const req = ctx.req
    if (!req) {
      console.error('Request object not available in context')
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Request object not available in context',
      })
    }

    const headerValue = req.headers[headerKey.toLowerCase()]
    if (!headerValue || headerValue !== expectedKeyValue) {
      console.error(`Invalid or missing '${headerKey}' in headers`)
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: `Invalid or missing '${headerKey}' in headers`,
      })
    }

    return next()
  })
}

/**
 * Public (unauthenticated) procedure
 *
 * This is the base piece you use to build new queries and mutations on your tRPC API. It does not
 * guarantee that a user querying is authorized, but you can still access user session data if they
 * are logged in.
 */
export const publicProcedure = t.procedure

/**
 * Protected (authenticated) procedure
 *
 * If you want a query or mutation to ONLY be accessible to logged in users, use this. It verifies
 * the session is valid and guarantees `ctx.session.user` is not null.
 *
 * @see https://trpc.io/docs/procedures
 */
export const protectedProcedure = t.procedure.use(enforceUserIsAuthed)

/**
 * Open API procedure
 * This is an easy way to expose a restful endpoint. It enforces a specific header key on every request.
 */
export const openAPIProcedure = t.procedure.use(
  enforceHeaderKey('x-api-key', process.env?.['PORTAL_AGENT_KEY'] || '')
)
