import type { NextApiRequest, NextApiResponse } from 'next'
import { stripeService } from '@magickml/portal-billing'
import { getServerSession } from 'next-auth'
import { getAuthOptions } from '@magickml/portal-auth'

export const createPortalHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method !== 'GET') return res.status(405).end('Method Not Allowed')

  const session = await getServerSession(req, res, await getAuthOptions())
  if (!session?.user?.email) return res.status(401).end('Not authenticated')

  try {
    const customerId = await stripeService.createOrRetrieveStripeCustomerId(
      session.user.id,
      session.user.email
    )
    if (!customerId) return res.status(404).end('Customer not found')

    const portalUrl = await stripeService.createPortal(customerId)

    console.log('portalUrl', portalUrl)
    res.status(200).json({ url: portalUrl })
  } catch (error: any) {
    console.error(`Error message: ${error.message}`)
    res.status(500).end(`Server Error: ${error.message}`)
  }
}
