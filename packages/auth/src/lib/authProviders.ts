import EmailProvider from 'next-auth/providers/email'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { checkRole } from '@magickml/portal-utils-server'
import { authorizeTester } from '@magickml/portal-utils-shared'
import { prisma } from '@magickml/portal-db'
import bcrypt from 'bcrypt'
import { sendMagicLinkEmail, emailConfig } from '@magickml/portal-mail'

const passwordProvider = CredentialsProvider({
  name: 'Credentials',
  credentials: {
    email: {
      label: 'Username',
      type: 'text',
      placeholder: 'test@magickml.com',
    },
    password: { label: 'Password', type: 'password' },
  },
  async authorize(credentials) {
    if (!credentials?.email || !credentials?.password) {
      throw new Error('Missing credentials')
    }

    const user = await prisma.user.findUnique({
      where: {
        email: credentials.email,
      },
      include: {
        credential: true,
      },
    })

    if (!user || !user.credential) {
      throw new Error('User not found')
    }

    // Check if password matches
    const isValidPassword = await bcrypt.compare(
      credentials.password,
      user.credential.password
    )

    if (!isValidPassword) {
      throw new Error('Invalid password')
    }

    if (!user.emailVerified) {
      throw new Error('Email not confirmed')
    }

    const userData = {
      ...user,
      credential: undefined,
    }

    return userData
  },
})

const magickLinkProvider = EmailProvider({
  from: process.env.EMAIL_FROM,
  server: emailConfig,
  sendVerificationRequest: async ({ identifier: email, url }) => {
    if (process.env.WHITELIST === 'true') {
      const role = await checkRole(email)
      if (!role) {
        return Promise.reject(new Error('User not found'))
      } else if (authorizeTester(role)) {
        return Promise.reject(new Error('User does not have access.'))
      }
    }

    if (process.env.EMAIL_SERVER_PASSWORD) {
      await sendMagicLinkEmail({
        email,
        url,
      })
    } else {
      console.log(`\x1b[33m\x1b[91mMagick Link: ${url}\x1b[0m`)
    }
  },
})

const googleProvider = GoogleProvider({
  clientId: process.env.GOOGLE_ID || '',
  clientSecret: process.env.GOOGLE_SECRET || '',
})

export { passwordProvider, magickLinkProvider, googleProvider }
