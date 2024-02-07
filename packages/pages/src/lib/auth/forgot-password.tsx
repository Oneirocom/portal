import * as z from 'zod'
import toast from 'react-hot-toast'
import {
  AuthFormLayout,
  AuthLayout,
  MainLayout,
  PortalLayout,
  BG,
} from '@magickml/portal-layout'
import { api } from '@magickml/portal-api-client'

const emailFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

export const ForgotPassword = () => {
  const {
    mutateAsync: forgotPassword,
    isLoading: forgotPasswordLoading,
    status,
  } = api.auth.forgotPassword.useMutation({
    onSuccess: () => {
      toast.success('Email sent successfully')
    },
    onError: error => {
      toast.error(error.message)
    },
  })

  const handleSubmit = async (values: z.infer<typeof emailFormSchema>) => {
    const { email } = values
    await forgotPassword({ email })
  }

  return (
    <>
      {status === 'success' && <Modal />}
      {status !== 'success' && (
        <AuthFormLayout
          title="Forgot Password?"
          description="Enter your email and we'll send you a link to reset your password."
          onSubmit={handleSubmit}
          isLoading={forgotPasswordLoading}
        />
      )}
    </>
  )
}

const Modal = () => {
  return (
    <AuthLayout title="Password Reset">
      <p className="text-sm text-center font-medium font-montserrat">
        Check your email for a reset password link. If it doesn&apos;t appear
        within a few minutes, check your spam folder.
      </p>
    </AuthLayout>
  )
}

ForgotPassword.getLayout = function getLayout(page: any) {
  return (
    <PortalLayout>
      <MainLayout bg={BG['forgot-password']}>{page}</MainLayout>
    </PortalLayout>
  )
}
