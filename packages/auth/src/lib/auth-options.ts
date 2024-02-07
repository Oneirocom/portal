import { AuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@magickml/portal-db'
import {
  magickLinkProvider,
  passwordProvider,
  googleProvider,
} from './authProviders'
import { PostHog } from 'posthog-node'
import { stripeService } from '@magickml/portal-billing'

const getOauthFlag = async () => {
  const client = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  })
  return await client.isFeatureEnabled('use-0auth', 'default')
}

const getProviderList = async () => {
  return [
    magickLinkProvider,
    passwordProvider,
    ...((await getOauthFlag()) ? [googleProvider] : []),
  ]
}

export const getAuthOptions = async (): Promise<AuthOptions> => {
  return {
    pages: {
      signIn: '/auth/sign-in',
      verifyRequest: '/auth/verify',
      error: '/auth/error', // Error code passed in query string as ?error=
      signOut: '/auth/signout',
    },
    adapter: PrismaAdapter(prisma),
    callbacks: {
      jwt: async ({ token, user }) => {
        if (user) {
          token.user = user
        }
        return token
      },

      session: async ({ session, token }) => {
        if (token) {
          session.user = token.user
        }
        return session
      },
    },

    debug: !(process.env.NODE_ENV === 'production'),
    events: {
      signIn: async ({ user }) => {
        // handle first time sign in or if we need to do something
        // also good for updating existing users on next sign in
        if (user.lastActive === null) {
          // check if they have a default workspace
          const defaultWorkspace = await prisma.workspaces.findFirst({
            where: {
              creator_id: user.id,
              is_default: true,
            },
          })
          // if they dont create one
          if (!defaultWorkspace) {
            await prisma.workspaces.create({
              data: {
                name: `${user.email}'s Workspace`,
                creator_id: user.id,
                is_default: true,
                workspace_members: {
                  create: {
                    user_id: user.id,
                    role: 'owner',
                    status: 'accepted',
                  },
                },
              },
            })
          }
        }

        // make them a budget if they dont have one
        try {
          const wallet = await prisma.budget.findUnique({
            where: {
              userId: user.id,
            },
          })

          if (!wallet) {
            await prisma.budget.create({
              data: {
                userId: user.id,
              },
            })
          }
        } catch (e) {
          console.log(e)
        }

        if (!user.email) {
          throw new Error('User has no email, auth provider is misconfigured')
        }
        await stripeService.createOrRetrieveStripeCustomerId(
          user.id,
          user.email
        )

        // handle making a onboarding record if they dont have one
        const onboarding = await prisma.onboarding.findFirst({
          where: {
            user: {
              id: user.id,
            },
          },
        })

        if (!onboarding) {
          await prisma.onboarding.create({
            data: {
              user: {
                connect: {
                  id: user.id,
                },
              },
            },
          })
        }

        // update last active
        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            lastActive: new Date(),
          },
        })
      },
    },
    providers: await getProviderList(),
    secret: process.env.NEXTAUTH_SECRET || 'secret',

    session: {
      strategy: 'jwt',
    },
  }
}

export const authOptions = getAuthOptions()
