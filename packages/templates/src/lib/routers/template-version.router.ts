import {
  createTRPCRouter,
  protectedProcedure,
} from '@magickml/portal-server-core'
import { prismaPortal } from '@magickml/portal-db'
import { updateTemplateVersion, getTemplateVersion } from '../services'
import {
  updateTemplateVersionSchema,
  getTemplateVersionSchema,
} from '../schemas'

export const templateVersionRouter = createTRPCRouter({
  update: protectedProcedure
    .input(updateTemplateVersionSchema)
    .mutation(async ({ ctx, input }) => {
      const template = await prismaPortal.template.findUnique({
        where: { id: input.templateId },
      })

      if (!template) {
        throw new Error('Template not found')
      }

      if (template.userId !== ctx.auth.userId) {
        throw new Error('You are not authorized to update this template')
      }

      return await updateTemplateVersion(input.templateId)
    }),
  find: protectedProcedure
    .input(getTemplateVersionSchema)
    .query(async ({ input }) => {
      return await getTemplateVersion(input.templateId, input.version)
    }),
})
