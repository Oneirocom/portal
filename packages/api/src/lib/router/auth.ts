import { createTRPCRouter, publicProcedure } from '../trpc'
import { prisma } from '@magickml/portal-db'
import { z } from 'zod'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import { encode } from 'next-auth/jwt'
import { getAuthOptions } from '@magickml/portal-auth'
import { hasAccess } from '../utils/shared'

import { sendMail, sendResetPasswordEmail } from '@magickml/portal-mail'

const makeLink = (token: string) => {
  return `${process.env.APP_URL}/auth/verify-email?token=${token}`
}

export const authRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(8),
      })
    )
    .mutation(async ({ input }) => {
      const { email, password } = input

      // Check if the user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email: email.toLowerCase() },
      })
      if (existingUser) {
        throw new Error('User already exists')
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10)

      // Create User and Credential
      const user = await prisma.user.create({
        data: {
          email,
          credential: {
            create: {
              password: hashedPassword,
            },
          },
        },
      })

      if (!user) {
        throw new Error('User creation failed')
      }

      const confirmationToken = uuidv4()
      await prisma.emailConfirmation.create({
        data: {
          userId: user.id,
          token: confirmationToken,
          expiry: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 day
        },
      })

      const verificationLink = makeLink(confirmationToken)

      // Send email to user with the confirmation token
      await sendMail({
        from: process.env.EMAIL_FROM ?? '',
        to: email,
        subject: 'Email Confirmation',
        // text: `Please confirm your email by clicking on the following link: ${verificationLink}`,
        html: `<p>Please confirm your email by clicking on the following link: <a href="${verificationLink}">Verify Email</a></p>`,
      })

      return { user }
    }),
  verifyResetPasswordToken: publicProcedure
    .input(z.object({ token: z.string() }))
    .mutation(async ({ input }) => {
      const { token } = input

      const passwordResetToken = await prisma.passwordResetToken.findFirst({
        where: {
          token,
          expiry: { gte: new Date() },
        },
      })

      if (!passwordResetToken) {
        throw new Error('Invalid token')
      }

      return { success: true }
    }),
  resetPassword: publicProcedure
    .input(z.object({ token: z.string(), password: z.string() }))
    .mutation(async ({ input }) => {
      const { token, password } = input

      const passwordResetToken = await prisma.passwordResetToken.findFirst({
        where: {
          token,
          expiry: { gte: new Date() },
        },
        include: {
          user: true,
        },
      })

      if (!passwordResetToken) {
        throw new Error('Invalid token')
      }

      const hashedPassword = await bcrypt.hash(password, 10)

      const credential = await prisma.credential.findUnique({
        where: { userId: passwordResetToken.userId },
      })
      if (!credential) {
        await prisma.credential.create({
          data: {
            userId: passwordResetToken.userId,
            password: hashedPassword,
          },
        })
      } else {
        await prisma.credential.update({
          where: { userId: passwordResetToken.userId },
          data: { password: hashedPassword },
        })
      }

      await prisma.passwordResetToken.delete({
        where: { id: passwordResetToken.id },
      })

      return { success: true }
    }),
  forgotPassword: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ input }) => {
      const { email } = input

      const user = await prisma.user.findUnique({
        where: { email: email.toLowerCase() },
      })

      if (!user) {
        throw new Error('User not found')
      }

      const resetToken = uuidv4()

      await prisma.passwordResetToken.create({
        data: {
          userId: user.id,
          token: resetToken,
          expiry: new Date(Date.now() + 1000 * 60 * 60),
        },
      })

      const resetLink = `${process.env.APP_URL}/auth/reset-password?token=${resetToken}`
      if (process.env.EMAIL_SERVER_PASSWORD) {
        await sendResetPasswordEmail({
          email,
          url: resetLink,
        })
      } else {
        console.log(`\x1b[33m\x1b[91mMagick Link: ${resetLink}\x1b[0m`)
      }

      return { success: true }
    }),
  updatePassword: publicProcedure
    .input(z.object({ password: z.string(), email: z.string() }))
    .mutation(async ({ input }) => {
      const { password, email } = input
      const user = await prisma.user.findUnique({
        where: { email: email.toLowerCase() },
      })
      if (!user) {
        throw new Error('User not found')
      }
      const hashedPassword = await bcrypt.hash(password, 10)

      const credential = await prisma.credential.findUnique({
        where: { userId: user.id },
      })

      if (!credential) {
        await prisma.credential.create({
          data: {
            userId: user.id,
            password: hashedPassword,
          },
        })
      } else {
        await prisma.credential.update({
          where: { userId: user.id },
          data: { password: hashedPassword },
        })
      }
      return { success: true }
    }),
  resendConfirmation: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ input }) => {
      const { email } = input

      const user = await prisma.user.findUnique({
        where: { email: email.toLowerCase() },
      })

      if (!user) {
        throw new Error('User not found')
      }

      if (user.emailVerified) {
        throw new Error('Email already verified')
      }

      const confirmationToken = uuidv4()
      await prisma.emailConfirmation.create({
        data: {
          userId: user.id,
          token: confirmationToken,
          expiry: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 day from now
        },
      })

      const verificationLink = makeLink(confirmationToken)

      await sendMail({
        from: process.env.EMAIL_FROM ?? '',
        to: email,
        subject: 'Email Confirmation Resend',
        // text: `Please confirm your email using this link: ${verificationLink}`,
        html: `<p>Please confirm your email using this link <a href="${verificationLink}">here</a></p>`,
      })

      return { success: true }
    }),

  verifyConfirmation: publicProcedure
    .input(z.object({ token: z.string() }))
    .mutation(async ({ input }) => {
      const { token } = input

      const emailConfirmation = await prisma.emailConfirmation.findFirst({
        where: {
          token,
          expiry: { gte: new Date() },
        },
        include: {
          user: true,
        },
      })

      if (!emailConfirmation) {
        throw new Error('Invalid token')
      }

      if (emailConfirmation.user.emailVerified) {
        throw new Error('Email already verified')
      }

      await prisma.user.update({
        where: { id: emailConfirmation.userId },
        data: { emailVerified: new Date() },
      })

      await prisma.emailConfirmation.delete({
        where: { id: emailConfirmation.id },
      })

      return { success: true }
    }),

  chatToken: publicProcedure
    .input(z.object({ agentId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      if (ctx.session?.user?.id) {
        const agent = await prisma.agents.findUnique({
          where: { id: input.agentId },
          select: {
            projectId: true,
          },
        })
        if (!agent || !agent.projectId) {
          throw new Error('Agent not found')
        }

        const access = hasAccess(ctx.session?.user?.id, agent?.projectId)
        if (!access) {
          return await encode({
            token: {
              user: ctx.session?.user,
              permissions: ['agent:run'],
            },
            secret: (await getAuthOptions()).secret as string,
            maxAge: 10 * 60,
          })
        }

        return await encode({
          token: {
            user: ctx.session?.user,
            permissions: ['agent:run'],
            project: agent?.projectId,
          },
          secret: (await getAuthOptions()).secret as string,
          maxAge: 10 * 60,
        })
      } else {
        return await encode({
          token: {
            user: 'anonymous',
            permissions: ['agent:run'],
          },
          secret: (await getAuthOptions()).secret as string,
          maxAge: 10 * 60,
        })
      }
    }),
})
