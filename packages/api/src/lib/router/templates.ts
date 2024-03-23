import { clerkClient } from '@clerk/nextjs'
import { createTRPCRouter, protectedProcedure } from '../trpc'
import { createFromAgent, removeTemplate } from '@magickml/portal-templates'
import { z } from 'zod'
import { prismaPortal } from '@magickml/portal-db'

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
  deleteTemplate: protectedProcedure
    .input(z.object({ templateId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const template = await prismaPortal.template.findUnique({
        where: { id: input.templateId },
      })

      if (!template) {
        throw new Error('Template not found')
      }

      if (template.userId !== ctx.auth.userId) {
        throw new Error('You are not authorized to delete this template')
      }

      await removeTemplate(input.templateId)
    }),
})
