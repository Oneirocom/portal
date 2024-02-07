import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { buffer } from 'micro'

const getSubscriptionIdForSubject = async () => {
  return ''
}

const getPriceIdForMeter = () => {
  return ''
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
})

export async function openmeterHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' })
    return
  }

  const idempotencyKey = req.headers['svix-id'] as string
  const msg = JSON.parse((await buffer(req)).toString())

  if (msg.type === 'report.meter') {
    await reportUsageToStripe(idempotencyKey, msg)
    res.status(200).json({ message: 'Success' })
    return
  }

  res.status(400).json({ message: 'Unknown event type' })
}

async function reportUsageToStripe(idempotencyKey: string, msg: any) {
  const {
    usage,
    // meter,
    // query
  } = msg

  const stripeSubscriptionId = await getSubscriptionIdForSubject()

  const subscriptionItems = await stripe.subscriptionItems.list({
    subscription: stripeSubscriptionId,
  })

  for (const { value, windowEnd } of usage) {
    const subscriptionItem = subscriptionItems.data.find(
      ({ price }) => price.id === getPriceIdForMeter()
    )

    if (subscriptionItem) {
      await stripe.subscriptionItems.createUsageRecord(
        subscriptionItem.id,
        {
          quantity: value,
          timestamp: windowEnd,
          action: 'set',
        },
        {
          idempotencyKey,
        }
      )
    }
  }
}
