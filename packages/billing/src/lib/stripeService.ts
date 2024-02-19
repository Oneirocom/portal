import Stripe from 'stripe'
import { prisma } from '@magickml/portal-db'
import { makeTrialPromotion } from './promotions'
import { PriceKeys } from '@magickml/portal-utils-shared'
import { clerkClient } from '@clerk/nextjs'
import { StripeEventHandler } from './stripeEventService'
import { NextApiRequest } from 'next'

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
    const stripeSigningSecret = this.getSecret()

    this.stripe = new Stripe(stripeSigningSecret, {
      apiVersion: '2023-10-16',
      appInfo: {
        name: 'MagickML',
        version: '0.1.0',
      },
    })

    this.eventHandler = new StripeEventHandler(this.stripe)
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

  private getSecret = () => process.env.STRIPE_SIGNING_SECRET!

  private getPriceKeyValue(input: keyof typeof PriceKeys): string | undefined {
    return PriceKeys[input]
  }

  private async createCustomPrice(amount: number): Promise<Stripe.Price> {
    return await this.stripe.prices.create({
      unit_amount: amount * 100,
      currency: 'usd',
      product_data: {
        name: 'Add to Balance',
        unit_label: 'USD',
        metadata: {
          amount: amount.toString(),
          balance: 'true',
        },
      },
    })
  }

  private async getUser(userId: string) {
    try {
      const user = await clerkClient.users.getUser(userId)
      return {
        ...user,
        email: user.emailAddresses[0].emailAddress,
      }
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

  async createSubscriptionCheckout({
    priceId,
    customer,
    userId,
    name,
  }: {
    priceId: string
    customer: string
    userId: string
    name: string
  }): Promise<Stripe.Response<Stripe.Checkout.Session>> {
    try {
      const session = await this.stripe.checkout.sessions.create({
        mode: 'subscription',
        payment_method_types: ['card'],
        billing_address_collection: 'required',
        customer,
        customer_update: { address: 'auto' },
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        metadata: {
          userId,
          subscriptionName: name.toUpperCase(),
        },
        success_url: `${this.getAppURL()}/account`,
        cancel_url: `${this.getAppURL()}/account`,
      })

      return session
    } catch (error) {
      console.error('Error creating subscription checkout:', error)
      throw error
    }
  }

  async createBalanceCheckout({
    amount,
    customer,
    userId,
  }: {
    amount: number
    customer: string
    userId: string
  }): Promise<Stripe.Response<Stripe.Checkout.Session>> {
    try {
      const price = await this.createCustomPrice(amount)

      const session = await this.stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'required',
        customer,
        customer_update: { address: 'auto' },
        line_items: [
          {
            price: price.id,
            quantity: 1,
          },
        ],
        metadata: {
          userId,
          amount: amount.toString(),
          balance: 'true',
        },
        success_url: `${this.getAppURL()}/account`,
        cancel_url: `${this.getAppURL()}/account`,
      })

      return session
    } catch (error) {
      console.error('Error creating balance checkout:', error)
      throw error
    }
  }

  async createPortal(customerId: string): Promise<string> {
    const portalSession = await this.stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: this.getAppURL() + '/account',
    })
    return portalSession.url
  }

  async createDefaultBudget(userId: string): Promise<void> {
    try {
      await prisma.budget.create({
        data: {
          userId,
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

  async handleNewCustomer(userId: string): Promise<string> {
    if (!userId) throw new Error('userId is required')
    if (!(await this.checkBudgetExists(userId))) {
      this.createDefaultBudget(userId)
    }

    const stripe = await this.stripe.customers.create({
      metadata: {
        userId,
      },
    })

    if (!stripe) throw new Error('Stripe customer not found')
    return stripe.id
  }

  async deleteCustomer(userId: string): Promise<void> {
    const customerData = await this.stripe.customers.search({
      query: `metadata['userId']:'${userId}'`,
    })

    const customer = customerData.data[0]

    if (!customer) throw new Error('Stripe customer not found')

    try {
      await this.stripe.customers.del(customer.id)
    } catch (error) {
      console.error('Error deleting customer:', error)
      throw error
    }
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

  async getSubscriptionKeys() {
    // get all products from stripe where metadata field "subscription" exists
    const products = await this.stripe.products.list({ limit: 100 })

    return products.data.filter(
      product => product.metadata.subscription === 'APPRENTICE' || 'WIZARD'
    )
  }

  async handleWebhook(req: NextApiRequest) {
    this.eventHandler.handleEvent(req)
  }
}

export const stripeService = new StripeService()
