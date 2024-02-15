import { createTRPCRouter, protectedProcedure } from '../trpc'
import { stripeService } from '@magickml/portal-billing'
import { z } from 'zod'
import { prisma } from '@magickml/portal-db'
import { getFullUser } from '@magickml/portal-utils-server'
import type Stripe from 'stripe'

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
        price: z.string().optional(), // Optional, only for subscriptions
        name: z.string(),
        amount: z.number().optional(), // Optional, only for adding to balance
      })
    )
    .mutation(async ({ ctx, input }) => {
      const user = await getFullUser(ctx.auth.userId)

      let checkoutSession: Stripe.Response<Stripe.Checkout.Session>
      try {
        if (input.amount) {
          checkoutSession = await stripeService.createBalanceCheckout({
            amount: input.amount,
            customer: user.customer,
            userId: ctx.auth.userId,
          })
        } else {
          if (!input.price) {
            throw new Error('Price ID is required for subscriptions')
          }
          checkoutSession = await stripeService.createSubscriptionCheckout({
            priceId: input.price,
            customer: user.customer,
            userId: ctx.auth.userId,
            name: input.name,
          })
        }

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
      where: {
        userId: ctx.auth.userId,
      },
    })

    if (!budget) {
      throw new Error('Budget not found')
    }

    const promotions = await prisma.promotion.findMany({
      where: {
        userId: ctx.auth.userId,
        validUntil: {
          gte: new Date(),
        },
        isUsed: false,
      },
    })

    const promoCredit = promotions.reduce(
      (acc, promo) => acc + promo.amount.toNumber(),
      0
    )

    const data = {
      total_budget: budget.balance.toNumber() + promoCredit,
    }

    return data
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
