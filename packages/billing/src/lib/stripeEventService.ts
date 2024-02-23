import Stripe from 'stripe'
import { clerkClient } from '@clerk/nextjs'
import { makeWizardPromotion, makeApprenticePromotion } from './promotions'
import { PortalSubscriptions } from '@magickml/portal-utils-shared'
import { buffer } from 'micro'
import { NextApiRequest } from 'next'
import { prismaPortal } from '@magickml/portal-db'

class StripeEventHandler {
  private stripe: Stripe

  constructor(stripe: Stripe) {
    this.stripe = stripe
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
    const userId = session?.metadata?.userId as string | undefined
    const isBalance = session?.metadata?.balance === 'true' ? true : false
    const subscriptionName = session?.metadata?.subscriptionName as string
    const amount = session?.metadata?.amount as string

    if (isBalance) {
      const parsedAmount = parseFloat(amount)

      try {
        await prismaPortal.budget.update({
          where: {
            userId: userId,
          },
          data: {
            balance: {
              increment: parsedAmount,
            },
          },
        })
      } catch (error) {
        console.error(
          'BIG WARNING: Error updating user balance:',
          error,
          'in handleCheckoutSessionCompleted'
        )
      }
    } else {
      if (!userId || !subscriptionName) {
        console.error(
          'BIG WARNING: Missing userId or subscriptionName in handleCheckoutSessionCompleted'
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
          console.log(
            'BIG WARNING: Unhandled subscription:',
            subscriptionName,
            'in handleCheckoutSessionCompleted'
          )
          break
      }

      try {
        await clerkClient.users.updateUserMetadata(userId, {
          publicMetadata: {
            subscription: subscriptionName.toUpperCase(),
          },
        })
      } catch (error) {
        console.error(
          'BIG WARNING: Error updating user metadata:',
          error,
          'in handleCheckoutSessionCompleted'
        )
      }
    }
  }
}

export { StripeEventHandler }
