import { NextApiRequest, NextApiResponse } from 'next'
import { prismaPortal } from '@magickml/portal-db'
import { validateBudgetRequest } from '@magickml/portal-utils-server'
import { recordTransaction, TransactionSource } from '@magickml/portal-billing'

const cl = (message: any) => {
  if (process.env.BUDGET_LOGGING === 'true') {
    console.log(message)
  }
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  validateBudgetRequest(req, res, 'POST')

  const { project_name, user_dict } = req.body
  cl('Received request:' + JSON.stringify(req.body))

  const currentCost = user_dict[project_name]?.current_cost || 0

  const markUp = 1.2
  const newCharge = currentCost * markUp
  cl('Calculating new charge:' + newCharge)

  const project = await prismaPortal.project.findFirst({
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

  try {
    const wallet = await prismaPortal.budget.findUnique({
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

    let remainingCharge = newCharge
    const promotions = await prismaPortal.promotion.findMany({
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
        await prismaPortal.promotion.update({
          where: { id: promo.id },
          data: { isUsed: true, amount: 0 },
        })
        await recordTransaction(
          project.owner,
          project_name,
          promoAmount,
          true,
          TransactionSource.PROMOTION
        )

        cl(
          `Fully used promotion ${promo.id}, remaining charge:` +
            remainingCharge
        )
      } else {
        const updatedPromoAmount = promoAmount - remainingCharge
        remainingCharge = 0
        await prismaPortal.promotion.update({
          where: { id: promo.id },
          data: { amount: updatedPromoAmount },
        })

        await recordTransaction(
          project.owner,
          project_name,
          remainingCharge,
          true,
          TransactionSource.PROMOTION
        )
        cl(
          `Partially used promotion ${promo.id}, remaining promotion amount:` +
            updatedPromoAmount
        )
      }
    }

    if (remainingCharge > 0) {
      const newUserBalance =
        parseFloat(wallet.balance.toString()) - remainingCharge
      await prismaPortal.budget.update({
        where: {
          userId: project.owner,
        },
        data: {
          balance: newUserBalance,
        },
      })
      await recordTransaction(
        project.owner,
        project_name,
        remainingCharge,
        true,
        TransactionSource.BUDGET
      )
      cl('Updated wallet with new balance:' + newUserBalance)
    } else {
      cl('No need to update wallet balance, promotions covered the charge')
    }

    return res
      .status(200)
      .json({ status: 'success', message: 'Budget processed successfully' })
  } catch (error: any) {
    console.error('Error processing request:', error.message)
    await recordTransaction(
      project.owner,
      project_name,
      newCharge,
      false,
      TransactionSource.BUDGET
    )
    return res.status(500).json({ status: 'error', message: error.message })
  }
}

export default handler
