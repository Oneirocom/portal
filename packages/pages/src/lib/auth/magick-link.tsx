import { useRouter } from 'next/router'
import { useState } from 'react'
import * as z from 'zod'
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'
import {
  PortalLayout,
  MainLayout,
  BG,
  AuthFormLayout,
} from '@magickml/portal-layout'

const emailFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

export const MagickLink = () => {
  const router = useRouter()
  const formSchema = emailFormSchema
  const [loading, setLoading] = useState(false)

  const handleSignin = async (
    values: z.infer<typeof emailFormSchema>,
    provider: string
  ) => {
    return await signIn(provider, {
      ...values,
      redirect: false,
      callbackUrl: '/',
    })
  }

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true)
    const provider = 'email'
    const res = await handleSignin(values, provider)
    if (res?.error) {
      toast.error('Sign up for our waitlist to get early access!')
    } else if (res && !res.ok) {
      switch (res.error) {
        case 'Email not confirmed':
          toast.error('You need to verify your email first')
          router.push('/auth/verify-email')
          break
        case 'User not found':
          toast.error('Join our waitlist to get early access')
          break
        default:
          toast.error(res.error || 'Something went wrong')
      }
    } else {
      toast.success('A Magick link has been sent to your email')
      router.push('/auth/verify')
    }
    setLoading(false)
  }

  return (
    <AuthFormLayout
      onSubmit={handleSubmit}
      submitText={loading ? 'Loading...' : 'Send Magick Link'}
      title="Login with a Magick Link"
      isLoading={loading}
    />
  )
}

MagickLink.getLayout = function getLayout(page: any) {
  return (
    <PortalLayout>
      <MainLayout bg={BG['magick-link']}>{page}</MainLayout>
    </PortalLayout>
  )
}
