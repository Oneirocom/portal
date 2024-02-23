import { prismaPortal, PromotionType } from '@magickml/portal-db'
import { Decimal } from '@prisma/client/runtime/library'

export const makeTrialPromotion = async (userId: string) => {
  await prismaPortal.promotion.create({
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
  // this create an empty credit promotion but if we ever decide to add a price to the apprentice subscription
  // we can change the amount here
  await prismaPortal.promotion.create({
    data: {
      name: 'Apprentice',
      description: 'Apprentice subscription credits.',
      type: PromotionType.ADMIN,
      amount: new Decimal(0),
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
  await prismaPortal.promotion.create({
    data: {
      name: 'Wizard',
      description: 'Wizard subscription credits.',
      type: PromotionType.ADMIN,
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

export const makeBalancePromotion = async (userId: string, amount: number) => {
  await prismaPortal.promotion.create({
    data: {
      name: 'Balance',
      description: 'Balance credits.',
      type: PromotionType.ADMIN,
      amount: new Decimal(amount),
      validFrom: new Date(),
      validUntil: new Date(new Date().setDate(new Date().getDate() + 30)),
      isUsed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId,
    },
  })
}
