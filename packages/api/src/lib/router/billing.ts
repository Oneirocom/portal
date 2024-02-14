import { createTRPCRouter, protectedProcedure } from '../trpc'
import { stripeService } from '@magickml/portal-billing'
import { z } from 'zod'
import { prisma } from '@magickml/portal-db'
import { getFullUser } from '@magickml/portal-auth'

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
      const user = await getFullUser(ctx.auth.userId)

      try {
        const checkoutSession = await stripeService.createSubscriptionCheckout({
          priceId: input.price,
          customer: user.customer,
          userId: ctx.auth.userId,
          name: input.name,
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
