import { createTRPCRouter, protectedProcedure } from '../trpc'
import { stripeService } from '@magickml/portal-billing'
import { z } from 'zod'
import { prisma } from '@magickml/portal-db'
import {
  makeAddBalance,
  makeApprenticeSub,
  makeWizardSub,
} from '@magickml/portal-billing'
import { PriceKeys } from '@magickml/portal-utils-shared'

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
        priceKey: z.nativeEnum(PriceKeys),
        amount: z.number().optional(), // Amount is optional, only for adding to balance
      })
    )
    .mutation(async ({ ctx, input }) => {
      const id = ctx.auth.userId
      const email = ctx.auth.user?.emailAddresses[0].emailAddress
      if (!email) {
        throw new Error('User must have an email address to create a checkout.')
      }
      if (typeof id !== 'string' || typeof email !== 'string') {
        throw new Error('Invalid session')
      }
      const { priceKey, amount } = input

      try {
        const customerId = await stripeService.createOrRetrieveStripeCustomerId(
          id,
          email
        )

        if (!customerId) {
          throw new Error(
            'Failed to create or retrieve Stripe customer ID in createSubCheckout.'
          )
        }

        let checkoutInput
        switch (priceKey) {
          case PriceKeys.Apprentice:
            checkoutInput = makeApprenticeSub(customerId)
            break
          case PriceKeys.Wizard:
            checkoutInput = makeWizardSub(customerId)
            break
          case PriceKeys.Balance:
            if (amount === undefined) {
              throw new Error('Amount must be specified for Balance.')
            }
            checkoutInput = makeAddBalance(customerId, amount)
            break
          default:
            throw new Error('Invalid price key.')
        }

        // Create the Stripe checkout session
        const checkoutSession = await stripeService.createCheckout(
          checkoutInput
        )

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
