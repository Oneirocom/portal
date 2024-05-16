import Stripe from 'stripe'
import { clerkClient } from '@clerk/nextjs/server'
import { makeWizardPromotion, makeApprenticePromotion } from './promotions'
import { PortalSubscriptions } from '@magickml/portal-utils-shared'
import { buffer } from 'micro'
import { NextApiRequest } from 'next'
import { PortalBot } from 'server/event-tracker'

class StripeEventHandler {
  private stripe: Stripe

  private bot: PortalBot = new PortalBot(
    process.env.CLERK_WEBHOOK_LOGGING === 'true',
    typeof process.env.PORTAL_BOT_URL === 'string'
  )

  constructor(stripe: Stripe) {
    this.stripe = stripe
  }

  private async errorLog(event: string, content: string) {
    await this.bot.log({
      event,
      content,
      slackMessage: {
        text: `${event}: ${content}`,
        blocks: [],
      },
    })
  }

  private getWebhookSecret = () => process.env.STRIPE_WEBHOOK_SECRET!

  private extractSignature = (req: NextApiRequest) =>
    (() => {
      const sig = req.headers['stripe-signature']
      if (typeof sig !== 'string')
        throw new Error('Stripe signature is not a string or is undefined.')
      return sig
    })()

  private getRawBody = async (req: NextApiRequest) => await buffer(req)

  private async constructWebhookEvent(
    rawBody: string | Buffer,
    sig: string,
    webhookSecret: string
  ): Promise<Stripe.Event> {
    try {
      const event = this.stripe.webhooks.constructEvent(
        rawBody,
        sig,
        webhookSecret
      )
      return event
    } catch (error) {
      console.error('Error constructing webhook event:', error)
      throw error
    }
  }

  async handleEvent(req: NextApiRequest) {
    const sig = this.extractSignature(req)
    const webhookSecret = this.getWebhookSecret()
    try {
      const event = await this.constructWebhookEvent(
        await this.getRawBody(req),
        sig,
        webhookSecret
      )
      switch (event.type) {
        case 'checkout.session.completed':
          await this.handleCheckoutSessionCompleted(event)
          break
        default:
          console.log('Unhandled stripe event:', event.type)
          break
      }
    } catch (error) {
      console.error('Error handling stripe event:', error)
      throw error
    }
  }

  async handleCheckoutSessionCompleted(event: Stripe.Event) {
    const session = event.data.object as Stripe.Checkout.Session
    const userId = session?.metadata?.userId || ''
    const isBalance = session?.metadata?.balance === 'true' ? true : false
    const subscriptionName = session?.metadata?.subscriptionName as string
    const amount = session?.metadata?.amount as string

    if (isBalance) {
      const parsedAmount = parseFloat(amount)

      try {
        // Get the user's private metadata from Clerk
        const user = await clerkClient.users.getUser(userId)
        const privateMetadata = user.privateMetadata

        if (privateMetadata?.walletUser) {
          const userWallet = await fetch(
            `${process.env.KEYWORDS_API_URL}/api/user/detail/WALLET_${userId}`,
            {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.KEYWORDS_API_KEY}`,
              },
            }
          ).then(res => res.json())

          if (!userWallet) {
            throw new Error('User proxy data not found')
          }

          const walletUser = await fetch(
            `${process.env.KEYWORDS_API_URL}/api/user/update/WALLET_${userId}`,
            {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.KEYWORDS_API_KEY}`,
              },
              body: JSON.stringify({
                budget_duration: 'monthly',
                period_budget: parsedAmount + userWallet.period_budget,
              }),
            }
          ).then(res => res.json())

          if (!walletUser) {
            throw new Error('Failed to update wallet user')
          }
        } else {
          const walletUser = await fetch(
            `${process.env.KEYWORDS_API_URL}/api/user/create/`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.KEYWORDS_API_KEY}`,
              },
              body: JSON.stringify({
                budget_duration: 'monthly',
                period_budget: parsedAmount,
                customer_identifier: `WALLET_${userId}`,
                period_start: new Date().toISOString(),
              }),
            }
          ).then(res => res.json())

          if (!walletUser) {
            throw new Error('Failed to create wallet user')
          }

          await clerkClient.users.updateUserMetadata(userId, {
            privateMetadata: {
              walletUser: walletUser,
            },
          })
        }

        await this.bot.log({
          event: 'Checkout session completed',
          content: `Updated balance: ${userId} ${parsedAmount}`,
          slackMessage: {
            text: `Checkout session completed: ${userId} ${parsedAmount}`,
            blocks: [
              {
                type: 'section',
                text: {
                  type: 'mrkdwn',
                  text: `*${userId} Balance Information*\n*Amount*: ${parsedAmount}`,
                },
              },
            ],
          },
        })
      } catch (error) {
        await this.errorLog(
          'Checkout session completed',
          `Error updating balance: ${error}`
        )
      }
    } else {
      if (!userId || !subscriptionName) {
        await this.errorLog(
          'Checkout session completed',
          `Missing userId or subscriptionName`
        )

        return
      }
      // add promotion
      switch (subscriptionName.toUpperCase() as PortalSubscriptions) {
        case 'APPRENTICE':
          await makeApprenticePromotion(userId)
          break
        case 'WIZARD':
          await makeWizardPromotion(userId)
          break
        default:
          await this.errorLog(
            'Checkout session completed',
            `Unhandled subscription: ${subscriptionName}`
          )
          break
      }

      try {
        await clerkClient.users
          .updateUserMetadata(userId, {
            publicMetadata: {
              subscription: subscriptionName,
            },
          })
          .catch(err => {
            console.error('Error updating metadata:', err)
            throw err
          })

        await this.bot.log({
          event: 'Checkout session completed',
          content: `Updated user metadata: ${userId} ${subscriptionName}`,
          slackMessage: {
            text: `Checkout session completed: ${userId} ${subscriptionName}`,
            blocks: [
              {
                type: 'section',
                text: {
                  type: 'mrkdwn',
                  text: `*${userId} Subscription Information*\n*Subscription*: ${subscriptionName}`,
                },
              },
            ],
          },
        })
      } catch (error) {
        await this.errorLog(
          'Checkout session completed',
          `Error updating user metadata: ${error}`
        )
      }
    }
  }
}

export { StripeEventHandler }
