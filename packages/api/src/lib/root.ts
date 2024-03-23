import { createTRPCRouter } from './trpc'
import { projectsRouter } from './router/projects'
import { documentsRouter } from './router/documents'
import { agentsRouter } from './router/agents'
import { chatRouter } from './router/chat'
import { anonUserRouter } from './router/anonUsers'
import { billingRouter } from './router/billing'
import { templatesRouter } from './router/templates'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const portalRouter = createTRPCRouter({
  projects: projectsRouter,
  documents: documentsRouter,
  agents: agentsRouter,
  chat: chatRouter,
  anonUsers: anonUserRouter,
  billing: billingRouter,
  tempaltes: templatesRouter,
})

// export type definition of API
export type AppRouter = typeof portalRouter
