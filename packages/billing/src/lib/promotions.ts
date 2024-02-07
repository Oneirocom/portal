import { prisma, PromotionType } from '@magickml/portal-db'
import { Decimal } from '@prisma/client/runtime/library'

export const makeTrialPromotion = async (userId: string) => {
  await prisma.promotion.create({
    data: {
      name: 'Trial',
      description: 'Get started for free with $2,00 in credits',
      type: PromotionType.INTRO,
      amount: new Decimal(2),
      validFrom: new Date(),
      validUntil: new Date(new Date().setDate(new Date().getDate() + 30)),
      isUsed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId,
    },
  })
}
