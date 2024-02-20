import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { prisma } from '@magickml/portal-db'
import {
  getFullUser,
  validateBudgetRequest,
} from '@magickml/portal-utils-server'

// Zod schema for request query
const QuerySchema = z.object({
  project_id: z.string(),
})

async function handler(req: NextApiRequest, res: NextApiResponse) {
  validateBudgetRequest(req, res, 'GET')
  // Validate request query
  const result = QuerySchema.safeParse(req.query)
  if (!result.success) {
    return res.status(400).json({ status: 'error', message: 'Invalid request' })
  }

  const { project_id } = result.data

  try {
    const project = await prisma.project.findFirst({
      where: {
        id: project_id,
      },
      select: {
        id: true,
        owner: true,
      },
    })

    if (!project) {
      return res
        .status(404)
        .json({ status: 'error', message: 'Project not found' })
    }

    const userResult = await getFullUser(project.owner)

    if (!userResult || !userResult.user) {
      return res
        .status(404)
        .json({ status: 'error', message: 'User not found' })
    }

    const { user } = userResult

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

    const promoCredit = promotions.reduce(
      (acc, promo) => acc + promo.amount.toNumber(),
      0
    )

    const responseUser = {
      id: user.id,
      email: user.emailAddresses[0]?.emailAddress ?? null,
      name: user.username ?? null,
      balance: wallet?.balance.toNumber() ?? 0,
      promoCredit,
      introCredit: 0, // Calculate based on specific criteria
      hasSubscription: !!user.publicMetadata?.subscription,
      subscriptionName: user.publicMetadata?.subscription ?? 'Neophyte',
    }

    return res.status(200).json({ status: 'success', user: responseUser })
  } catch (error: any) {
    return res.status(500).json({ status: 'error', message: error.message })
  }
}

export default handler
