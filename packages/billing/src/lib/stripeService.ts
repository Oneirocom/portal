// @ts-nocheck
import Stripe from 'stripe'
import { prisma } from '@magickml/portal-db'
import { NextApiRequest } from 'next'
import { StripeEventHandler } from './stripeEventHandler'
import { buffer } from 'micro'

export enum PriceKeys {
  Balance = 'price_1OV9nVAppV38CWoMzmNyU9v0',
  Mage = 'price_1OV9dbAppV38CWoMPowixa58',
  Wizard = 'price_1OV9ezAppV38CWoMWtT8KDpL',
  Archmage = 'price_1OV9flAppV38CWoM9n19fRm1',
}

export enum ProductKeys {
  Balance = 'prod_PJnOSnUwv1GSFB',
  Mage = 'prod_J5JzRjZ6Kj8K1e',
  Wizard = 'prod_J5JzPf0zGd5QXe',
  Archmage = 'prod_J5JzN5Z5Xs6J2y',
}

export type PriceKey = keyof typeof PriceKeys

export class StripeService {
  private stripe: Stripe
  private eventHandler: StripeEventHandler

  constructor() {
    const stripeSigningSecret = this.getSigningSecret()

    this.stripe = new Stripe(stripeSigningSecret, {
      apiVersion: '2023-10-16',
      appInfo: {
        name: 'MagickML',
        version: '0.1.0',
      },
    })

    this.eventHandler = new StripeEventHandler()
  }

  private getEnv(env: string): string {
    const envVar = process.env[env]
    if (!envVar) {
      throw new Error(`${env} environment variable is not set.`)
    }

    if (typeof envVar !== 'string') {
      throw new Error(`${env} environment variable is not a string.`)
    }

    return envVar
  }

  private getAppURL(): string {
    return this.getEnv('APP_URL')
  }

  private getWebhookSecret = () => process.env.STRIPE_WEBHOOK_SECRET!

  private getSigningSecret = () => process.env.STRIPE_SIGNING_SECRET!

  private extractSignature = (req: NextApiRequest) =>
    (() => {
      const sig = req.headers['stripe-signature']
      if (typeof sig !== 'string')
        throw new Error('Stripe signature is not a string or is undefined.')
      return sig
    })()

  private getRawBody = async (req: NextApiRequest) => await buffer(req)

  private getPriceKeyValue(input: keyof typeof PriceKeys): string | undefined {
    return PriceKeys[input]
  }

  private async createCustomPrice(price: number): Promise<Stripe.Price> {
    return await this.stripe.prices.create({
      unit_amount: price,
      currency: 'usd',
      product: ProductKeys.Balance,
    })
  }

  async createStripeCustomer(email: string): Promise<string> {
    try {
      const stripeCustomer = await this.stripe.customers.create({ email })
      return stripeCustomer.id
    } catch (error) {
      console.error('Error creating Stripe customer:', error)
      throw error
    }
  }

  async createOrRetrieveStripeCustomerId(
    userId: string,
    email: string
  ): Promise<string | undefined> {
    try {
      let customer = await prisma.customer.findFirst({ where: { userId } })

      if (!customer && email) {
        const stripeCustomerId = await this.createStripeCustomer(email)
        customer = await prisma.customer.create({
          data: { stripeCustomerId, email, userId },
        })
      }

      return customer?.stripeCustomerId
    } catch (error) {
      console.error('Error in createOrRetrieveStripeCustomerId:', error)
      throw error
    }
  }

  async checkIfUserIsCustomer(userId: string): Promise<boolean> {
    try {
      const customer = await prisma.customer.findFirst({ where: { userId } })
      return Boolean(customer)
    } catch (error) {
      console.error('Error checking if user is a customer:', error)
      throw error
    }
  }

  async getUserSubscription(userId: string): Promise<string | false> {
    try {
      // Retrieve the customer record from your database
      const customer = await prisma.customer.findFirst({ where: { userId } })
      if (!customer) {
        return false
      }

      // Retrieve the Stripe customer's subscriptions
      const subscriptions = await this.stripe.subscriptions.list({
        customer: customer.stripeCustomerId,
        status: 'active',
      })

      if (subscriptions.data.length === 0) return false

      const productId = subscriptions.data[0].items.data[0].price.product
      const productData = await this.stripe.products.retrieve(
        productId as string
      )

      return productData.name
    } catch (error) {
      console.error('Error checking user subscription:', error)
      throw error
    }
  }

  async constructWebhookEvent(
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

  async handleStripeEvent(req: NextApiRequest) {
    const sig = this.extractSignature(req)
    const webhookSecret = this.getWebhookSecret()
    try {
      const event = await this.constructWebhookEvent(
        await this.getRawBody(req),
        sig,
        webhookSecret
      )
      await this.eventHandler.handleEvent(event)
    } catch (error) {
      console.error('Error handling Stripe event:', error)
      throw error
    }
  }

  async createCheckout(
    price: keyof typeof PriceKeys,
    amount: number | undefined,
    customerId: string,
    priceType: 'recurring' | 'one_time',
    successUrl: string,
    cancelUrl?: string
  ): Promise<Stripe.Checkout.Session> {
    console.log(`price: ${price}, amount: ${amount}`)
    let priceId
    if (price === 'Balance') {
      if (!amount) throw new Error('Amount is required for custom price')
      const customPrice = await this.createCustomPrice(amount)
      priceId = customPrice.id
    } else {
      priceId = this.getPriceKeyValue(price)
    }

    if (!priceId) throw new Error('Invalid price key')

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      customer: customerId,
      customer_update: { address: 'auto' },
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl ?? `${this.getAppURL()}/billing`,
    }

    sessionParams.mode = priceType === 'recurring' ? 'subscription' : 'payment'

    return await this.stripe.checkout.sessions.create(sessionParams)
  }

  async createPortal(customerId: string): Promise<string> {
    const portalSession = await this.stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: this.getAppURL() + '/billing',
    })
    return portalSession.url
  }
}

export const stripeService = new StripeService()
