import { clerkClient } from '@clerk/nextjs'

export const getFullUser = async (userId: string) => {
  console.log('GETTING USER', userId)
  const user = await clerkClient.users.getUser(userId)

  console.log('USER FOUND', user)

  if (!user) {
    throw new Error('User not found')
  }

  try {
    const customer = user?.privateMetadata?.stripeId as string

    if (!customer) {
      throw new Error('Stripe customer not found')
    }

    return { user, customer }
  } catch (error) {
    console.log('error', error)
  }

  return { user, customer: null }
}
