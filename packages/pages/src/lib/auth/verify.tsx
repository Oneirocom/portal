import { Button } from '@magickml/portal-ui'
import {
  PortalLayout,
  AuthLayout,
  MainLayout,
  BG,
} from '@magickml/portal-layout'
import { useRouter } from 'next/router'

export const Verify = () => {
  const router = useRouter()
  return (
    <>
      {`Check your email for a login link. If it doesn't appear within a few
  minutes, check your spam folder.`}
      <Button
        size="md"
        className="w-full gap-x-2"
        type="submit"
        variant="portal-primary"
        onClick={() => router.push('/')}
      >
        Go Home
      </Button>
    </>
  )
}

Verify.getLayout = function getLayout(page: any) {
  return (
    <PortalLayout>
      <MainLayout bg={BG['magick-link']}>
        <AuthLayout title="Verification">{page}</AuthLayout>
      </MainLayout>
    </PortalLayout>
  )
}
