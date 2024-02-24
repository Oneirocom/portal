import { UserProfile } from '@clerk/nextjs'
import { MainLayout, PortalLayout } from '@magickml/portal-layout'

const UserAccountPage = () => <UserProfile path="/account" routing="path" />

export default UserAccountPage

UserAccountPage.getLayout = function getLayout(page: any) {
  return (
    <PortalLayout>
      <MainLayout classNames="items-center justify-center relative">
        {page}
      </MainLayout>
    </PortalLayout>
  )
}
