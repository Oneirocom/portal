import type { NextApiRequest, NextApiResponse } from 'next'
import { stripeService, PriceKeys, type PriceKey } from '@magickml/portal-billing'
import { getServerSession } from 'next-auth'
import { getAuthOptions } from '@magickml/portal-auth'

type Inputs = { price: PriceKey | undefined; amount: number | undefined }

export const addBalanceHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed')

  const { price, amount }: Inputs = req.body
  if (!price || !PriceKeys[price])
    return res.status(400).end('Invalid or missing price ID')
  if (!amount) return res.status(400).end('Missing amount')

  const session = await getServerSession(req, res, await getAuthOptions())
  if (!session?.user?.email) return res.status(401).end('Not authenticated')

  try {
    const customer = await stripeService.createOrRetrieveStripeCustomerId(
      session.user.id,
      session.user.email
    )
    if (!customer) return res.status(404).end('Customer not found')

    const checkout = await stripeService.createCheckout(
      price,
      amount,
      customer,
      'one_time',
      `${process.env.APP_URL}/success`,
      `${process.env.APP_URL}/cancel`
    )

    res.status(200).json({ url: checkout.url })
  } catch (err: any) {
    console.error(`Error message: ${err.message}`)
    res.status(500).end(`Server Error: ${err.message}`)
  }
}
