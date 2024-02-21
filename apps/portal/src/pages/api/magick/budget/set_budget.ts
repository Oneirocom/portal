import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@magickml/portal-db'
import { validateBudgetRequest } from '@magickml/portal-utils-server'

const cl = (message: any) => {
  if (process.env.BUDGET_LOGGING === 'true') {
    console.log(message)
  }
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  validateBudgetRequest(req, res, 'POST')

  const { project_name, user_dict } = req.body
  cl('Received request:' + JSON.stringify(req.body))

  try {
    const project = await prisma.project.findFirst({
      where: {
        id: project_name,
      },
    })

    if (!project) {
      cl('Project not found:' + project_name)
      return res
        .status(404)
        .json({ status: 'error', message: 'Project not found' })
    }

    const wallet = await prisma.budget.findUnique({
      where: {
        userId: project.owner,
      },
    })

    if (!wallet) {
      cl('Wallet not found for user:' + project.owner)
      return res
        .status(404)
        .json({ status: 'error', message: 'Wallet not found' })
    }

    cl('Found wallet:' + JSON.stringify(wallet))

    const currentCost = user_dict[project_name]?.current_cost || 0

    const markUp = 1.2
    const newCharge = currentCost * markUp
    cl('Calculating new charge:' + newCharge)

    let remainingCharge = newCharge
    const promotions = await prisma.promotion.findMany({
      where: {
        userId: project.owner,
        validUntil: {
          gte: new Date(),
        },
        isUsed: false,
      },
      orderBy: {
        validUntil: 'asc',
      },
    })

    cl('Found promotions:' + JSON.stringify(promotions))

    for (const promo of promotions) {
      if (remainingCharge <= 0) break

      const promoAmount = parseFloat(promo.amount.toString())
      if (promoAmount <= remainingCharge) {
        remainingCharge -= promoAmount
        await prisma.promotion.update({
          where: { id: promo.id },
          data: { isUsed: true, amount: 0 },
        })
        cl(
          `Fully used promotion ${promo.id}, remaining charge:` +
            remainingCharge
        )
      } else {
        const updatedPromoAmount = promoAmount - remainingCharge
        remainingCharge = 0
        await prisma.promotion.update({
          where: { id: promo.id },
          data: { amount: updatedPromoAmount },
        })
        cl(
          `Partially used promotion ${promo.id}, remaining promotion amount:` +
            updatedPromoAmount
        )
      }
    }

    if (remainingCharge > 0) {
      const newUserBalance =
        parseFloat(wallet.balance.toString()) - remainingCharge
      await prisma.budget.update({
        where: {
          userId: project.owner,
        },
        data: {
          balance: newUserBalance,
        },
      })
      cl('Updated wallet with new balance:' + newUserBalance)
    } else {
      cl('No need to update wallet balance, promotions covered the charge')
    }

    return res
      .status(200)
      .json({ status: 'success', message: 'Budget processed successfully' })
  } catch (error: any) {
    console.error('Error processing request:', error.message)
    return res.status(500).json({ status: 'error', message: error.message })
  }
}

export default handler
