import { createTRPCRouter } from './trpc'
import { projectsRouter } from './router/projects'
import { documentsRouter } from './router/documents'
import { spellsRouter } from './router/spells'
import { agentsRouter } from './router/agents'
import { publicAgentsRouter } from './router/publicAgents'
import { chatRouter } from './router/chat'
import { anonUserRouter } from './router/anonUsers'
import { billingRouter } from './router/billing'
import { budgetRouter } from './router/magick'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const portalRouter = createTRPCRouter({
  projects: projectsRouter,
  documents: documentsRouter,
  spells: spellsRouter,
  agents: agentsRouter,
  publicAgents: publicAgentsRouter,
  chat: chatRouter,
  anonUsers: anonUserRouter,
  billing: billingRouter,
  magick: budgetRouter,
})

// export type definition of API
export type AppRouter = typeof portalRouter
