import Image from 'next/legacy/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  formInputStyles,
  Button,
  Input,
} from '@magickml/client-ui'
import { useForm } from 'react-hook-form'
import { signIn, useSession } from 'next-auth/react'
import toast from 'react-hot-toast'
import {
  PortalLayout,
  BG,
  MainLayout,
  AuthLayout,
} from '@magickml/portal-layout'

const passwordFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 chars' }),
})

export const SignIn = () => {
  const router = useRouter()
  const formSchema = passwordFormSchema
  const [loading, setLoading] = useState(false)
  const session = useSession()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })
  const handleSignin = async (
    values: z.infer<typeof passwordFormSchema>,
    provider: string
  ) => {
    return await signIn(provider, {
      ...values,
      redirect: false,
      callbackUrl: '/',
    })
  }

  useEffect(() => {
    if (session.data) router.push('/')
  }, [])

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true)
    const provider = 'credentials'
    const res = await handleSignin(values, provider)

    if (res && !res.ok) {
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
      toast.success('Signed in successfully')
      router.push('/')
    }
    setLoading(false)
  }

  return (
    <Fragment>
      <div className="flex flex-col self-stretch w-full gap-3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="w-full space-y-4"
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      className={formInputStyles}
                      placeholder="Password"
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
              {loading && (
                <span className="loading loading-spinner loading-md" />
              )}
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>
        </Form>
        <Link
          href="/auth/forgot-password"
          className="text-sm text-center font-medium dark:text-ds-primary-m text-ds-primary-p"
        >
          Forgot password?
        </Link>

        <p className="text-sm text-center py-1">OR</p>

        <Button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          variant="basic"
          size="lg"
          className="relative"
        >
          <Image
            src="/images/logos/google-white.png"
            layout="fill"
            alt="Sign in with Google"
            className="object-contain py-2"
          />
        </Button>
        <Button
          variant="basic"
          size="md"
          className="w-full"
          onClick={() => router.push('/auth/magick-link')}
        >
          Login with a Magick Link
        </Button>
      </div>
    </Fragment>
  )
}

SignIn.getLayout = function getLayout(page: any) {
  return (
    <PortalLayout>
      <MainLayout bg={BG['sign-in']}>
        <AuthLayout title="Sign In" secondary={<SecondarySection />}>
          {page}
        </AuthLayout>
      </MainLayout>
    </PortalLayout>
  )
}

const SecondarySection = () => {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center self-stretch gap-3">
      <h4 className="text-sm font-medium dark:text-white font-montAlt">
        Don’t have an account?
      </h4>
      <Button
        onClick={() => router.push('/auth/sign-up')}
        variant="basic"
        className="w-full"
        size="md"
      >
        Create New Account
      </Button>
    </div>
  )
}
