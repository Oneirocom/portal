import { clerkClient } from '@clerk/clerk-sdk-node'
import { KeywordsService } from '@magickml/keywords'

export const getFullUser = async (userId: string) => {
  const keywordsService = new KeywordsService()
  try {
    const user = await clerkClient.users.getUser(userId)
    if (!user) throw new Error('User not found')

    let { mpUser, walletUser } = await keywordsService.fetchProxyWallets(userId)
    if (!mpUser?.customer_identifier || !walletUser?.customer_identifier) {
      const userData = await keywordsService.createWalletUsers(userId)
      mpUser = userData.mpUser
      walletUser = userData.walletUser
    }

    if (!mpUser.period_budget || !walletUser.period_budget) {
      await keywordsService.ensurePeriodBudget({ mpUser, walletUser })
    }

    const useWallet = mpUser.period_budget - mpUser.total_period_usage <= 0
    await clerkClient.users.updateUserMetadata(userId, {
      privateMetadata: {
        mpUser,
        walletUser,
        useWallet,
      },
    })

    const customer = user.privateMetadata?.['stripeId'] as string | undefined
    if (!customer) {
      throw new Error('Stripe customer not found')
    }

    return { user, customer, mpUser, walletUser, useWallet }
  } catch (error) {
    console.error('Error in getFullUser:', error)
    throw error
  }
}
