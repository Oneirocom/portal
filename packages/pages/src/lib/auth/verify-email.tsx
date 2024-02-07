import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { api } from '@magickml/portal-api-client'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  formInputStyles,
  Input,
  Button,
} from '@magickml/portal-ui'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import {
  PortalLayout,
  AuthLayout,
  BG,
  BackgroundKey,
  MainLayout,
} from '@magickml/portal-layout'

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

export const VerifyEmail = () => {
  const router = useRouter()
  const { token } = router.query as { token: string }
  const [mode, setMode] = useState<'verify' | 'resend'>(
    token ? 'verify' : 'resend'
  )

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })
  const { mutateAsync: verifyEmail, status } =
    api.auth.verifyConfirmation.useMutation({
      onSuccess: () => {
        toast.success('Email verified. You can now log in!')
      },
      onError: error => {
        toast.error(error.message)
      },
    })

  const { mutateAsync: resendConfirmation } =
    api.auth.resendConfirmation.useMutation({
      onSuccess: data => {
        toast.success(
          'If a user with that email exists who has not verified their email, they will receive a verification email shortly.'
        )
      },
      onError: error => {
        toast.error(error.message)
      },
    })

  async function handleResend(values: z.infer<typeof formSchema>) {
    const { email } = values
    await resendConfirmation({ email })
  }

  const handleVerifyEmail = async () => {
    await verifyEmail({ token })
  }

  useEffect(() => {
    if (token) {
      setMode('verify')
      handleVerifyEmail()
    }
  }, [token])

  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      {mode === 'resend' ? (
        <>
          <p>
            If you need to resend your verification email, enter your email
            below.
          </p>
          <Form {...form}>
            <form
              onSubmit={e => {
                e.preventDefault()
                form.handleSubmit(handleResend)()
              }}
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
                Resend
              </Button>
            </form>
          </Form>
        </>
      ) : (
        <>
          {status === 'loading' && (
            <p className="text-sm text-center font-medium font-montserrat">
              Verifying email...
            </p>
          )}
          {status === 'success' && (
            <>
              <p className="text-sm text-center font-medium font-montserrat">
                Your email has been verified! Click the button below to sign in.
              </p>
              <Button
                size="md"
                className="w-full gap-x-2"
                type="submit"
                variant="portal-primary"
                onClick={() => {
                  router.push('/auth/sign-in')
                }}
                disabled={form.formState.isSubmitting}
              >
                Sign In
              </Button>
            </>
          )}
          {status === 'error' && (
            <p className="text-sm text-center font-medium font-montserrat">
              Invalid token
            </p>
          )}
          {status === 'idle' && <></>}
        </>
      )}
    </div>
  )
}

VerifyEmail.getLayout = function getLayout(page: any) {
  return (
    <PortalLayout>
      <MainLayout bg={BG[BackgroundKey.SIGN_IN]}>
        <AuthLayout title="Verify Email">{page}</AuthLayout>
      </MainLayout>
    </PortalLayout>
  )
}
