import { createTRPCRouter } from '@magickml/portal-server-core'
import { projectsRouter } from './router/projects'
import { documentsRouter } from './router/documents'
import { agentsRouter } from './router/agents'
import { chatRouter } from './router/chat'
import { anonUserRouter } from './router/anonUsers'
import { billingRouter } from './router/billing'
import { chatRouterV2 } from './router/chatv2'
import { templateRouters } from '@magickml/portal-templates'

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
  templates: templateRouters.base,
  templateVersions: templateRouters.version,
  chatv2: chatRouterV2,
})

// export type definition of API
export type AppRouter = typeof portalRouter
