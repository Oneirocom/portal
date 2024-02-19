import { z } from 'zod'
import { createTRPCRouter, openAPIProcedure } from '../trpc'
import { prisma } from '@magickml/portal-db'
import { getFullUser } from '@magickml/portal-utils-server'

// Zod schemas
const budgetDataSchema = z.object({
  total_budget: z.number(),
  duration: z.number(),
  created_at: z.number(),
  last_updated_at: z.number(),
  current_cost: z.number().optional(),
  model_cost: z.record(z.number()).optional(),
})

const statusSchema = z.union([
  z.literal('success'),
  z.literal('error'),
  z.string(),
])

const getBudgetResponseSchema = z.object({
  status: statusSchema,
  data: z.record(budgetDataSchema),
})

const setBudgetRequestSchema = z.object({
  project_name: z.string(),
  user_dict: z.record(budgetDataSchema),
})

const setBudgetResponseSchema = z.object({
  status: statusSchema,
  message: z.string(),
})

const userSchema = z
  .object({
    id: z.string(),
    email: z.string().email().nullable(),
    name: z.string().nullable(),
    balance: z.number().nullable(),
    promoCredit: z.number().nullable(),
    introCredit: z.number().nullable(),
    hasSubscription: z.boolean(),
    subscriptionName: z.string().nullable(),
  })
  .nullable()

const getUserResponseSchema = z.object({
  status: statusSchema,
  user: userSchema,
})

export const budgetRouter = createTRPCRouter({
  getBudget: openAPIProcedure
    .meta({
      openapi: {
        method: 'POST',
        path: '/magick/budget/get_budget',
        tags: ['budget'],
        summary: 'Get budget information for a project',
      },
    })
    .input(z.object({ project_name: z.string() }))
    .output(getBudgetResponseSchema)
    .query(async ({ input }) => {
      const project = await prisma.project.findFirst({
        where: {
          id: input.project_name,
        },
        select: {
          id: true,
          owner: true,
        },
      })

      if (!project) {
        throw new Error('Project not found')
      }

      const budget = await prisma.budget.findFirst({
        where: {
          userId: project.owner,
        },
      })

      if (!budget) {
        return {
          status: 'error',
          data: {},
          message: 'Budget not found',
        }
      }

      const promotions = await prisma.promotion.findMany({
        where: {
          userId: project.owner,
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
        [project.id]: {
          total_budget: budget.balance.toNumber() + promoCredit,
          duration: 0,
          created_at: budget.createdAt.getTime(),
          last_updated_at: budget?.updatedAt ? budget.updatedAt.getTime() : 0,
          current_cost: budget?.currentCost?.toNumber() || 0,
          model_cost: (budget.modelCost as Record<string, number>) || {},
        },
      }

      return {
        status: 'success',
        data,
      }
    }),

  setBudget: openAPIProcedure
    .meta({
      openapi: {
        method: 'POST',
        path: '/magick/budget/set_budget',
        tags: ['budget'],
        summary: 'Set budget information for a project',
      },
    })
    .input(setBudgetRequestSchema)
    .output(setBudgetResponseSchema)
    .mutation(async ({ input }) => {
      const project = await prisma.project.findFirst({
        where: {
          id: input.project_name,
        },
      })

      if (!project) {
        throw new Error('Project not found')
      }

      const wallet = await prisma.budget.findUnique({
        where: {
          userId: project.owner,
        },
      })

      if (!wallet) {
        throw new Error('Wallet not found')
      }

      const promotions = await prisma.promotion.findMany({
        where: {
          userId: project.owner,
          validUntil: {
            gte: new Date(),
          },
          isUsed: false,
        },
      })

      const currentCost = input.user_dict[project.id].current_cost || 0
      const modelCost = input.user_dict[project.id].model_cost || {}
      const markUp = 1.2
      const newCharge = currentCost * markUp

      // Apply promotions and update their remaining amounts
      let remainingCharge = newCharge
      for (const promo of promotions) {
        if (remainingCharge <= 0) break
        let promoAmount = promo.amount.toNumber()

        if (promoAmount <= remainingCharge) {
          // Full promotion amount is used
          remainingCharge -= promoAmount
          await prisma.promotion.update({
            where: { id: promo.id },
            data: { isUsed: true },
          })
        } else {
          // Only part of the promotion is used
          promoAmount -= remainingCharge
          remainingCharge = 0
          await prisma.promotion.update({
            where: { id: promo.id },
            data: { amount: promoAmount },
          })
        }
      }

      const effectiveCharge = Math.max(0, remainingCharge)
      const newUserBalance = wallet.balance.toNumber() - effectiveCharge

      // Update the budget
      await prisma.budget.update({
        where: {
          userId: project.owner,
        },
        data: {
          balance: newUserBalance,
          currentCost: currentCost,
          modelCost: modelCost,
        },
      })

      return {
        status: 'success',
        message: 'Budget updated',
      }
    }),

  getUser: openAPIProcedure
    .meta({
      openapi: {
        method: 'GET',
        path: '/magick/user/{project_id}',
        tags: ['budget'],
        summary: 'Get user information for a project',
      },
    })
    .input(z.object({ project_id: z.string() }))
    .output(getUserResponseSchema)
    .query(async ({ input }) => {
      const project = await prisma.project.findFirst({
        where: {
          id: input.project_id,
        },
        select: {
          id: true,
          owner: true,
        },
      })

      if (!project) {
        return {
          status: 'error',
          user: null,
          message: 'Project not found',
        }
      }

      const { user } = await getFullUser(project.owner)

      if (!user) {
        return {
          status: 'error',
          user: null,
          message: 'User not found',
        }
      }

      const wallet = await prisma.budget.findUnique({
        where: {
          userId: project.owner,
        },
      })

      if (!wallet) {
        await prisma.budget.create({
          data: {
            userId: project.owner,
          },
        })
      }

      // Retrieve promotions and calculate total promotional credit
      const promotions = await prisma.promotion.findMany({
        where: {
          userId: project.owner,
          validUntil: {
            gte: new Date(),
          },
          isUsed: false,
        },
      })

      let introCredit = 0
      let promoCredit = 0

      if (promotions && promotions.length > 0) {
        const introPromotion = promotions.filter(
          promo => promo.type === 'INTRO'
        )[0]
        introCredit = introPromotion?.amount.toNumber() || 0

        promoCredit = promotions.reduce(
          (acc, promo) => acc + (promo?.amount || 0).toNumber(),
          0
        )
      }

      // Add promotional credit to the user's balance
      const userBalance = wallet?.balance.toNumber() || 0

      return {
        status: 'success',
        user: {
          id: user.id,
          email: user.emailAddresses[0].emailAddress,
          name: user.username,
          balance: userBalance,
          promoCredit: promoCredit || 0,
          introCredit: introCredit || 0,
          hasSubscription: (user.publicMetadata.subscription as
            | string
            | undefined)
            ? true
            : false,
          subscriptionName:
            (user.publicMetadata.subscription as string | undefined) ??
            'Neophyte',
        },
      }
    }),
})

export default budgetRouter
