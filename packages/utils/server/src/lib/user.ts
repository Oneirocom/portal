import { clerkClient } from '@clerk/nextjs'

export type ProxyUser = {
  id: string
  name: string
  customer_identifier: string
  created_at: string
  last_active: string
  top_models: {}
  email: string
  period_start: string
  period_end: string
  budget_duration: string
  period_budget: number
  total_budget: number
  total_usage: number
  total_period_usage: number
  organization: number
}

const fetchUserData = async (userId: string, walletUser: string) => {
  try {
    const response = (await fetch(
      `${process.env.KEYWORDS_API_URL}/api/user/detail/${walletUser}_${userId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.KEYWORDS_API_KEY}`,
        },
      }
    ).then(res => res.json())) as ProxyUser
    return response
  } catch (error) {
    console.error('Error fetching user data:', error)
    throw error
  }
}

const updateUserMetadata = async (
  userId: string,
  metadata: { mpUser: ProxyUser; walletUser: ProxyUser }
) => {
  return clerkClient.users.updateUserMetadata(userId, {
    privateMetadata: {
      mpUser: metadata.mpUser,
      walletUser: metadata.walletUser,
    },
  })
}

export const getFullUser = async (userId: string) => {
  const user = await clerkClient.users.getUser(userId)
  try {
    if (!user) {
      throw new Error('User not found')
    }

    try {
      const [mpUser, walletUser] = await Promise.all([
        fetchUserData(userId, 'MP'),
        fetchUserData(userId, 'WALLET'),
      ])

      if (mpUser?.customer_identifier && walletUser?.customer_identifier) {
        await updateUserMetadata(userId, { mpUser, walletUser })
      } else {
        try {
          const mpUser: ProxyUser = await fetch(
            `${process.env.KEYWORDS_API_URL}/api/users/create/`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.KEYWORDS_API_KEY}`,
              },
              body: JSON.stringify({
                customer_identifier: `MP_${userId}`,
              }),
            }
          )
            .then(res => res.json())
            .catch(error => {
              console.error('Error creating default wallet:', error)
              throw error
            })

          const walletUser: ProxyUser = await fetch(
            `${process.env.KEYWORDS_API_URL}/api/users/create/`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.KEYWORDS_API_KEY}`,
              },
              body: JSON.stringify({
                customer_identifier: `WALLET_${userId}`,
              }),
            }
          )
            .then(res => res.json())
            .catch(error => {
              console.error('Error creating default wallet:', error)
              throw error
            })

          if (
            !mpUser?.customer_identifier ||
            !walletUser?.customer_identifier
          ) {
            throw new Error('Error creating proxy users')
          }
          await clerkClient.users.updateUserMetadata(userId, {
            privateMetadata: {
              mpUser: mpUser,
              walletUser: walletUser,
            },
          })
        } catch (error) {
          console.error('Error creating default wallet:', error)
          throw error
        }
      }

      const customer = user?.privateMetadata?.stripeId as string
      if (!customer) {
        throw new Error('Stripe customer not found')
      }

      return { user, customer }
    } catch (error) {
      console.error('Error getting user data:', error)
      throw error
    }
  } catch (error) {
    console.error('Error getting user:', error)
    throw error
  }
}
