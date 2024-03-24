import { clerkClient } from '@clerk/nextjs'
import { createTRPCRouter, protectedProcedure } from '../trpc'
import {
  createFromAgent,
  removeTemplate,
  rateTemplate,
  getTemplateRating,
  updateTemplateVersion,
  getTemplateVersion,
  createTemplateCollection,
  getTemplateCollection,
} from '@magickml/portal-templates'
import { z } from 'zod'
import { prismaPortal, TemplateType } from '@magickml/portal-db'

export const templatesRouter = createTRPCRouter({
  find: protectedProcedure
    .input(
      z.object({
        type: z
          .nativeEnum(TemplateType)
          .optional()
          .default(TemplateType.OFFICIAL),
        userId: z.string().optional(),
      })
    )
    .query(async ({ input, ctx }) => {
      const isUserRequested = !!input.userId
      const isUser = ctx.auth.userId === input.userId

      return await prismaPortal.template.findMany({
        where: {
          type: input.type,
          deletedAt: null,
          public: isUserRequested
            ? isUser
              ? undefined
              : true
            : input.type === 'OFFICIAL'
            ? undefined
            : true,
          userId: input.userId,
        },
        orderBy: {
          createdAt: 'desc',
        },
        select: {
          id: true,
          name: true,
          description: true,
          image: true,
          updatedAt: true,
        },
      })
    }),
  create: protectedProcedure
    .input(
      z.object({
        agentId: z.string(),
        name: z.string(),
        description: z.string().optional(),
        public: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // check clerk metadata for role
      const user = await clerkClient.users.getUser(ctx.auth.userId)

      return await createFromAgent({
        ...input,
        userId: ctx.auth.userId,
        type: user.publicMetadata?.role === 'ADMIN' ? 'OFFICIAL' : 'COMMUNITY',
        public: input.public ?? false,
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
  rateTemplate: protectedProcedure
    .input(
      z.object({
        templateId: z.string(),
        rating: z.number().min(1).max(5),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await rateTemplate(input.templateId, ctx.auth.userId, input.rating)
    }),
  getTemplateRating: protectedProcedure
    .input(z.object({ templateId: z.string() }))
    .query(async ({ input }) => {
      return await getTemplateRating(input.templateId)
    }),
  updateTemplateVersion: protectedProcedure
    .input(
      z.object({
        templateId: z.string(),
        spells: z.array(
          z.object({
            id: z.string().optional(),
            projectId: z.string().optional(),
            name: z.string().optional(),
            graph: z.record(z.unknown()).optional(),
            type: z.string().optional(),
          })
        ),
      })
    )
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

      // TODO: FIX ANY. Theres a way to type json cols in the schema.prisma file
      await updateTemplateVersion(input.templateId, input.spells as any)
    }),
  getTemplateVersion: protectedProcedure
    .input(
      z.object({
        templateId: z.string(),
        version: z.number(),
      })
    )
    .query(async ({ input }) => {
      return await getTemplateVersion(input.templateId, input.version)
    }),
  createTemplateCollection: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string().optional(),
        templates: z.array(
          z.object({
            templateId: z.string(),
            version: z.number(),
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await createTemplateCollection(input)
    }),
  getTemplateCollection: protectedProcedure
    .input(z.object({ collectionId: z.string() }))
    .query(async ({ input }) => {
      return await getTemplateCollection(input.collectionId)
    }),
})
