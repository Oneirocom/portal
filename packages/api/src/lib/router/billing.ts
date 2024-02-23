import { createTRPCRouter, protectedProcedure } from '../trpc'
import { stripeService } from '@magickml/portal-billing'
import { z } from 'zod'
import { prismaPortal, type Transaction } from '@magickml/portal-db'
import { getFullUser, paginateItems } from '@magickml/portal-utils-server'
import type Stripe from 'stripe'

export const billingRouter = createTRPCRouter({
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

      if (!user.customer) {
        throw new Error('Stripe customer not found')
      }

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
        console.error('Error in createCheckout:', error)
        throw error
      }
    }),

  getBudget: protectedProcedure.query(async ({ ctx }) => {
    const budget = await prismaPortal.budget.findFirst({
      where: {
        userId: ctx.auth.userId,
      },
    })

    if (!budget) {
      throw new Error('Budget not found')
    }

    const promotions = await prismaPortal.promotion.findMany({
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
      balance: budget.balance.toNumber(),
      promotional_balance: promoCredit,
    }

    return data
  }),

  getPromotions: protectedProcedure.query(async ({ ctx }) => {
    const promotions = await prismaPortal.promotion.findMany({
      where: {
        userId: ctx.auth.userId,
        isUsed: false,
        validFrom: { lte: new Date() },
        validUntil: { gte: new Date() },
      },
    })

    return promotions
  }),
  getTransactions: protectedProcedure
    .input(
      z.object({
        limit: z.number().optional(),
        cursor: z.string().optional(),
        projectId: z.string().optional(),
        agentId: z.string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? 10
      const { cursor, projectId, agentId } = input
      const mode = projectId ? 'project' : agentId ? 'agent' : 'user'
      let transactions: Transaction[]
      switch (mode) {
        case 'project':
          console.log('project')
          transactions = await prismaPortal.transaction.findMany({
            where: {
              projectId,
              userId: ctx.auth.userId,
              createdAt: { lt: cursor ? new Date(cursor) : new Date() },
            },
            take: limit,
            orderBy: {
              createdAt: 'desc',
            },
          })
          break
        case 'agent':
          console.log('agent')
          transactions = await prismaPortal.transaction.findMany({
            where: {
              agentId,
              userId: ctx.auth.userId,
              createdAt: { lt: cursor ? new Date(cursor) : new Date() },
            },
            take: limit,
            orderBy: {
              createdAt: 'desc',
            },
          })
          break
        default:
          transactions = await prismaPortal.transaction.findMany({
            where: {
              userId: ctx.auth.userId,
              createdAt: { lt: cursor ? new Date(cursor) : new Date() },
            },
            take: limit,
            orderBy: {
              createdAt: 'desc',
            },
          })
          break
      }

      return paginateItems(transactions, limit)
    }),
})
