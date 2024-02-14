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

export const makeApprenticePromotion = async (userId: string) => {
  await prisma.promotion.create({
    data: {
      name: 'Apprentice',
      description: 'Apprentice subscription credits.',
      type: PromotionType.INTRO,
      amount: new Decimal(10),
      validFrom: new Date(),
      validUntil: new Date(new Date().setDate(new Date().getDate() + 30)),
      isUsed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId,
    },
  })
}

export const makeWizardPromotion = async (userId: string) => {
  await prisma.promotion.create({
    data: {
      name: 'Wizard',
      description: 'Wizard subscription credits.',
      type: PromotionType.INTRO,
      amount: new Decimal(25),
      validFrom: new Date(),
      validUntil: new Date(new Date().setDate(new Date().getDate() + 30)),
      isUsed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId,
    },
  })
}
