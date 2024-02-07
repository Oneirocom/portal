import { createNextApiHandler } from '@trpc/server/adapters/next'
import { createTRPCContext, portalRouter } from '@magickml/portal-api'

export const maxDuration = 300

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb',
    },
    responseLimit: '4mb',
  },
}

// export API handler
export default createNextApiHandler({
  router: portalRouter,
  createContext: createTRPCContext,
  onError: error => {
    console.error(error)
  },
})
