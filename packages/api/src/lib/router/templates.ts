import { clerkClient } from '@clerk/nextjs'
import { createTRPCRouter, protectedProcedure } from '../trpc'
import { createFromAgent } from '@magickml/portal-templates'
import { z } from 'zod'

export const templatesRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        agentId: z.string(),
        name: z.string(),
        description: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // check clerk metadata for role
      const user = await clerkClient.users.getUser(ctx.auth.userId)
      const role = user.publicMetadata?.role
      if (role !== 'ADMIN') {
        throw new Error('User is not authorized to create templates.')
      }

      return await createFromAgent({
        ...input,
        userId: ctx.auth.userId,
        type: role === 'ADMIN' ? 'OFFICIAL' : 'COMMUNITY',
      })
    }),
})
