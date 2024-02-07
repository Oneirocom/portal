import Stripe from 'stripe'
import { prisma } from '@magickml/portal-db'
import { NextApiRequest } from 'next'
import { StripeEventHandler } from './stripeEventHandler'
import { buffer } from 'micro'
import { makeTrialPromotion } from './promotions'
import { PriceKeys, ProductKeys } from '@magickml/portal-utils-shared'

export interface CreateCheckoutInput {
  price: keyof typeof PriceKeys
  amount: number | undefined
  customerId: string
  priceType: 'recurring' | 'one_time'
  successUrl: string
  cancelUrl?: string
}
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

  private async createCustomPrice(amount: number): Promise<Stripe.Price> {
    return await this.stripe.prices.create({
      // Convert the amount from dollars to cents
      unit_amount: amount * 100, // Correct conversion to cents
      currency: 'usd',
      product: ProductKeys.Balance,
    })
  }

  private async getUser(userId: string) {
    try {
      const user = await prisma.user.findFirst({
        where: { id: userId },
        select: { email: true, id: true },
      })
      return user
    } catch (error) {
      console.error('Error getting user:', error)
      throw error
    }
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
    const user = await this.getUser(userId)
    try {
      const customer = await prisma.customers.findFirst({
        where: { email: user?.email },
      })

      let id: string | undefined

      if (!customer && email) {
        id = await this.createStripeCustomer(email)
      } else if (customer) {
        id = customer.id
      } else {
        throw new Error('No email provided')
      }

      return id
    } catch (error) {
      console.error('Error in createOrRetrieveStripeCustomerId:', error)
      throw error
    }
  }

  async checkIfUserIsCustomer(userId: string): Promise<boolean> {
    const user = await this.getUser(userId)
    try {
      const customer = await prisma.customers.findFirst({
        where: { email: user?.email },
      })
      return Boolean(customer)
    } catch (error) {
      console.error('Error checking if user is a customer:', error)
      throw error
    }
  }

  async getUserSubscription(userId: string): Promise<string | false> {
    const user = await this.getUser(userId)
    try {
      // Retrieve the customer record from your database
      const customer = await prisma.customers.findFirst({
        where: { email: user?.email },
      })
      if (!customer) {
        return false
      }

      // Retrieve the Stripe customer's subscriptions
      const subscriptions = await this.stripe.subscriptions.list({
        customer: customer.id,
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
    input: CreateCheckoutInput
  ): Promise<Stripe.Checkout.Session> {
    const { price, amount, customerId, priceType, successUrl, cancelUrl } =
      input

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
      cancel_url: cancelUrl ?? `${this.getAppURL()}/account`,
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

  async createDefaultBudget(userId: string): Promise<void> {
    try {
      await prisma.budget.create({
        data: {
          User: {
            connect: {
              id: userId,
            },
          },
          balance: 0,
        },
      })

      await makeTrialPromotion(userId)
    } catch (error) {
      console.error('Error creating default wallet:', error)
      throw error
    }
  }

  async checkBudgetExists(userId: string): Promise<boolean> {
    try {
      const budget = await prisma.budget.findFirst({ where: { userId } })
      return Boolean(budget)
    } catch (error) {
      console.error('Error checking if wallet exists:', error)
      throw error
    }
  }

  async handleNewCustomer(userId: string, email: string): Promise<void> {
    if (!(await this.checkBudgetExists(userId))) {
      this.createDefaultBudget(userId)
    }
    await this.createOrRetrieveStripeCustomerId(userId, email)
  }

  async getClientSubscription(
    userId: string
  ): Promise<{ subscriptionId: string; productName: string } | false> {
    const user = await this.getUser(userId)
    try {
      const customer = await prisma.customers.findFirst({
        where: { email: user?.email },
      })
      if (!customer) {
        return false
      }

      const subscriptions = await this.stripe.subscriptions.list({
        customer: customer.id,
        status: 'active',
      })

      if (subscriptions.data.length === 0) return false

      const subscriptionId = subscriptions.data[0].id
      const subscription = await this.stripe.subscriptions.retrieve(
        subscriptionId
      )

      // Assuming there's always at least one item in the subscription
      const productId = subscription.items.data[0].price.product

      // Retrieve the product to get its name
      const product = await this.stripe.products.retrieve(productId as string)

      return {
        subscriptionId: subscription.id,
        productName: product.name,
      }
    } catch (error) {
      console.error('Error getting client subscription:', error)
      throw error
    }
  }
}

export const stripeService = new StripeService()
