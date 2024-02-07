// @ts-nocheck
import Stripe from 'stripe'
import { prisma } from '@magickml/portal-db'

class StripeEventHandler {
  async handleEvent(event: Stripe.Event) {
    switch (event.type) {
      case 'product.created':
      case 'product.updated':
        await this.upsertProductRecord(event.data.object as Stripe.Product)
        break
      case 'price.created':
      case 'price.updated':
        await this.upsertPriceRecord(event.data.object as Stripe.Price)
        break
      case 'customer.created':
      case 'customer.updated':
        await this.upsertCustomerRecord(event.data.object as Stripe.Customer)
        break
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted':
        const subscription = event.data.object as Stripe.Subscription
        await this.manageSubscriptionStatusChange(
          subscription.id,
          subscription.customer as string,
          event.type === 'customer.subscription.created'
        )
        break
      case 'checkout.session.completed':
        const checkoutSession = event.data.object as Stripe.Checkout.Session
        if (checkoutSession.mode === 'subscription') {
          const subscriptionId = checkoutSession.subscription
          await this.manageSubscriptionStatusChange(
            subscriptionId as string,
            checkoutSession.customer as string,
            true
          )
        }
        break
      default:
        throw new Error('Unhandled relevant event!')
    }
  }

  private async upsertCustomerRecord(customer: Stripe.Customer) {
    //first get the user by email
    if (!customer.email) {
      throw new Error('Customer email is missing')
    }

    const user = await prisma.user.findUnique({
      where: { email: customer.email },
    })

    if (!user) {
      throw new Error(`User with email ${customer.email} not found`)
    }

    await prisma.customers.upsert({
      where: { id: customer.id },
      update: {
        email: customer.email ?? undefined,
      },
      create: {
        id: customer.id,
        email: customer.email ?? '',
      },
    })
  }

  private async upsertProductRecord(product: Stripe.Product) {
    await prisma.products.upsert({
      where: { id: product.id },
      update: {
        name: product.name,
        description: product.description,
        active: product.active,
        metadata: product.metadata,
      },
      create: {
        id: product.id,
        name: product.name,
        description: product.description,
        active: product.active,
        metadata: product.metadata,
      },
    })
  }
  private async upsertPriceRecord(price: Stripe.Price) {
    const product = await prisma.products.findUnique({
      where: { id: price.product as string },
    })

    if (!product) {
      throw new Error(`Product with Stripe ID ${price.product} not found`)
    }

    await prisma.prices.upsert({
      where: { id: price.id },
      update: {
        unit_amount: price.unit_amount,
        currency: price.currency,
        active: price.active,
        id: product.id,
      },
      create: {
        id: price.id,
        unit_amount: price.unit_amount,
        currency: price.currency,
        active: price.active,
        product: product.id,
      },
    })
  }

  private async manageSubscriptionStatusChange(
    subscriptionId: string,
    customerId: string,
    isCreating: boolean
  ) {
    await prisma.subscriptions.upsert({
      where: { id: subscriptionId },
      update: {
        customerId: customerId,
        status: isCreating ? 'created' : 'updated',
      },
      create: {
        stripeId: subscriptionId,
        customerId: customerId,
        status: isCreating ? 'created' : 'updated',
      },
    })
  }
}

export { StripeEventHandler }
