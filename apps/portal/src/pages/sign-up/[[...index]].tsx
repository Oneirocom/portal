import { SignUp } from '@clerk/nextjs'
import { MainLayout, PortalLayout } from '@magickml/portal-layout'

export default function Page() {
  return <SignUp signInUrl='/sign-in'  />
}

Page.getLayout = function getLayout(page: any) {
  return (
    <PortalLayout>
      <MainLayout classNames="items-center justify-center">{page}</MainLayout>
    </PortalLayout>
  )
}
