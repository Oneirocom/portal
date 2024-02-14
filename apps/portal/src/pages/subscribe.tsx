import { getSubscriptionKeys } from '@magickml/portal-billing'
import { SubscribePage, type SubscribePageProps } from '@magickml/portal-pages'
import { GetStaticProps } from 'next'

export default SubscribePage

export const getStaticProps: GetStaticProps<SubscribePageProps> = async () => {
  const subscriptions = await getSubscriptionKeys()

  return {
    props: {
      ...subscriptions,
    },
  }
}
