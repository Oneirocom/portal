import Stripe from 'stripe'
// import { prisma } from '@magickml/portal-db'

class StripeEventHandler {
//   private stripe: Stripe
  async handleEvent(event: Stripe.Event) {
    switch (event.type) {
      case 'checkout.session.completed':
        await this.handleCheckoutSessionCompleted(event)
        break
      default:
        console.log('Unhandled stripe event:', event.type)
        break
    }
  }

  async handleCheckoutSessionCompleted(event: Stripe.Event) {
    const session = event.data.object as Stripe.Checkout.Session
    const userId = session?.metadata.userId
    console.log('Checkout session completed:', session.id, userId)
  }
}

export { StripeEventHandler }
