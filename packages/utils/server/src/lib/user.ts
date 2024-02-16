import { clerkClient } from '@clerk/nextjs'

export const getFullUser = async (userId: string) => {
  try {
    const user = await clerkClient.users.getUser(userId)

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
  } catch (error) {
    console.error('Error getting user:', error)
    throw error
  }
}
