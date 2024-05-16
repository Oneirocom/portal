import { UserProfile } from '@clerk/nextjs'
import { MainLayout } from '@magickml/portal-layout-next/server'

const AccountPage = () => (
  <MainLayout>
    <UserProfile path="/account" routing="virtual" />
  </MainLayout>
)

export default AccountPage
