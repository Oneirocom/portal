import { getSubscriptionKeys } from '@magickml/portal-billing'
import { SubscribePage } from '@magickml/portal-pages'
import { GetStaticProps } from 'next'
import { SubscribePageProps } from '@magickml/portal-types'

export default SubscribePage

export const getStaticProps: GetStaticProps<SubscribePageProps> = async () => {
  const subscriptions = await getSubscriptionKeys()

  return {
    props: {
      ...subscriptions,
    },
  }
}
