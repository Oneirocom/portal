import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { prisma } from '@magickml/portal-db'
import { validateBudgetRequest } from '@magickml/portal-utils-server'

const RequestSchema = z.object({
  project_name: z.string(),
})

export default async function (req: NextApiRequest, res: NextApiResponse) {
    validateBudgetRequest(req, res, 'POST')

  // Validate request body
  const result = RequestSchema.safeParse(req.body)
  if (!result.success) {
    return res.status(400).json({ status: 'error', message: 'Invalid request' })
  }

  const { project_name } = result.data

  try {
    const project = await prisma.project.findFirst({
      where: {
        id: project_name,
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
      return res
        .status(404)
        .json({ status: 'error', message: 'Budget not found' })
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

    return res.status(200).json({ status: 'success', data })
  } catch (error: any) {
    return res.status(500).json({ status: 'error', message: error.message })
  }
}
