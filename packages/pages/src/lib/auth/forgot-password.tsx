import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'
import { api } from '@magickml/portal-api-client'
import { AuthLayout, PortalLayout, MainLayout, BG } from '@magickml/portal-layout'
import { IoIosArrowBack } from 'react-icons/io'
import Link from 'next/link'
import {
  Label,
  Form,
  FormField,
  FormItem,
  FormControl,
  Input,
  FormMessage,
  Button,
  formInputStyles,
} from '@magickml/portal-ui'

const emailFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

export const ForgotPassword = () => {
  const form = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: { email: '' },
  })
  const { mutateAsync: forgotPassword, status } =
    api.auth.forgotPassword.useMutation({
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

          <div className="flex flex-col self-stretch w-full gap-3">
            <div className="inline-flex items-center justify-start gap-2 dark:text-ds-primary-m text-ds-primary-p pb-6 text-sm font-medium">
              <IoIosArrowBack className="mt-1" />
              <Link
                className="focus:underline hover:underline"
                href="/auth/sign-in"
              >
                Back to Sign In
              </Link>
            </div>

            <Label className="mb-2 text-3xl font-bold text-center text-black md:text-left dark:text-white font-montserrat">
              Forgot Password?
            </Label>
            <p className="text-sm text-center font-medium font-montserrat pb-1">
              Enter your email and we’ll send you a link to reset your password.
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="w-full space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className={formInputStyles}
                          placeholder="Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  size="md"
                  className="w-full gap-x-2"
                  type="submit"
                  variant="portal-primary"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting && (
                    <span className="loading loading-spinner loading-md" />
                  )}
                  {form.formState.isSubmitting ? 'Signing In...' : 'Sign In'}
                </Button>
              </form>
            </Form>
          </div>
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