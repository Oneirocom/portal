import { UserProfile } from '@clerk/nextjs'
import { MainLayout, PortalLayout } from '@magickml/portal-layout'

const UserProfilePage = () => (
  <UserProfile path="/profile" routing="path" />
)

export default UserProfilePage

UserProfilePage.getLayout = function getLayout(page: any) {
  return (
    <PortalLayout>
      <MainLayout classNames="items-center justify-center relative">{page}</MainLayout>
    </PortalLayout>
  )
}
