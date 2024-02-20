// Next.js API endpoint for setting budget information for a project
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { prisma } from '@magickml/portal-db'
import { validateBudgetRequest } from '@magickml/portal-utils-server'

// Zod schema for request body
const RequestSchema = z.object({
  project_name: z.string(),
  user_dict: z.object({
    total_budget: z.number(),
    duration: z.number(),
    created_at: z.number(),
    last_updated_at: z.number(),
    current_cost: z.number().optional(),
    model_cost: z.record(z.number()).optional(),
  }),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Validate request method
  validateBudgetRequest(req, res, 'POST')

  // Validate request body
  const result = RequestSchema.safeParse(req.body)
  if (!result.success) {
    return res.status(400).json({ status: 'error', message: 'Invalid request' })
  }

  const { project_name, user_dict } = result.data

  try {
    const project = await prisma.project.findFirst({
      where: {
        id: project_name,
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

    const currentCost = user_dict.current_cost || 0
    const modelCost = user_dict.model_cost || {}
    const markUp = 1.2
    const newCharge = currentCost * markUp

    // Apply promotions and update their remaining amounts
    let remainingCharge = newCharge
    const promotions = await prisma.promotion.findMany({
      where: {
        userId: project.owner,
        validUntil: {
          gte: new Date(),
        },
        isUsed: false,
      },
    })

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

    return res
      .status(200)
      .json({ status: 'success', message: 'Budget updated successfully' })
  } catch (error: any) {
    return res.status(500).json({ status: 'error', message: error.message })
  }
}
