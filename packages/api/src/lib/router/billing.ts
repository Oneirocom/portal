import { createTRPCRouter, protectedProcedure } from '../trpc'
import { prisma } from '@magickml/portal-db'

export const billingRouter = createTRPCRouter({
  getSubscription: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id // Get user ID from session

    const subscription = await prisma.subscription.findFirst({
      where: {
        Customer: {
          userId: userId,
        },
      },
    })
    console.log(subscription)

    return subscription
  }),
})
