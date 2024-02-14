import { clerkClient } from '@clerk/nextjs'

export const getFullUser = async (userId: string) => {
  const user = await clerkClient.users.getUser(userId)
  if (!user) {
    throw new Error('User not found')
  }

  const customer = user.privateMetadata.stripeId as string

  if (!customer) {
    throw new Error('Stripe customer not found')
  }

  return { user, customer }
}
