import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '../trpc'
import { prisma } from '@magickml/portal-db'
import { v4 as uuidv4 } from 'uuid'

export const anonUserRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        fingerprint: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        let user = await prisma.anonymousUser.findFirst({
          where: { fingerprint: input.fingerprint },
        })

        if (!user) {
          user = await prisma.anonymousUser.create({
            data: {
              anonymousId: uuidv4(),
              fingerprint: input.fingerprint,
            },
          })
        }

        return user
      } catch (error) {
        console.error(error)
        throw new Error('An error occurred while creating a session.')
      }
    }),
})
