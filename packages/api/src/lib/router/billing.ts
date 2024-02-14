import { createTRPCRouter, protectedProcedure } from '../trpc'
import { stripeService } from '@magickml/portal-billing'
import { z } from 'zod'
import { prisma } from '@magickml/portal-db'
import { clerkClient } from '@clerk/nextjs'

export const billingRouter = createTRPCRouter({
  getSubscription: protectedProcedure.query(async ({ ctx }) => {
    const subscription = await stripeService.getClientSubscription(
      ctx.auth.userId
    )

    if (!subscription) {
      return {
        exists: false,
      }
    }

    return {
      subscription,
      exists: !!subscription,
    }
  }),

  createCheckout: protectedProcedure
    .input(
      z.object({
        price: z.string(),
        name: z.string(),
        amount: z.number().optional(), // Optional, only for adding to balance
      })
    )
    .mutation(async ({ ctx, input }) => {
      // this is only because privateMetadata is not available in ctx.auth
      const user = await clerkClient.users.getUser(ctx.auth.userId)
      if (!user) {
        throw new Error('User not found')
      }

      const customer = user.privateMetadata.stripeId as string

      if (!customer) {
        throw new Error('Stripe customer not found')
      }

      try {
        const checkoutSession = await stripeService.createSubscriptionCheckout({
          priceId: input.price,
          customer,
          userId: ctx.auth.userId,
        })

        if (!checkoutSession) {
          throw new Error('Failed to create Stripe checkout session.')
        }

        return { checkoutSession }
      } catch (error) {
        console.error('Error in createSubCheckout:', error)
        throw error
      }
    }),

  getBudget: protectedProcedure.query(async ({ ctx }) => {
    const budget = await prisma.budget.findFirst({
      where: { userId: ctx.auth.userId },
    })

    return budget
  }),

  getPromotions: protectedProcedure.query(async ({ ctx }) => {
    const promotions = await prisma.promotion.findMany({
      where: {
        userId: ctx.auth.userId,
        isUsed: false,
        validFrom: { lte: new Date() },
        validUntil: { gte: new Date() },
      },
    })

    return promotions
  }),
})
