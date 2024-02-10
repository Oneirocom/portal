import { SignIn } from '@clerk/nextjs'
import { MainLayout, PortalLayout } from '@magickml/portal-layout'

export default function Page() {
  return <SignIn signUpUrl='/sign-up' />
}

Page.getLayout = function getLayout(page: any) {
  return (
    <PortalLayout>
      <MainLayout classNames="items-center justify-center">{page}</MainLayout>
    </PortalLayout>
  )
}
