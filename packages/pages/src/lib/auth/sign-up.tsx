import Link from 'next/link'
import Image from "next/legacy/image"
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { useSession } from 'next-auth/react'

import { api } from '@magickml/portal-api-client'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
  PortalLayout,
  AuthLayout,
  MainLayout,
  BG,
} from '@magickml/portal-layout'
import {
  formInputStyles,
  Input,
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@magickml/portal-core-ui'
import { signIn } from 'next-auth/react'

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 chars' }),
})

export const SignUp = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const session = useSession()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  useEffect(() => {
    if (session.data) router.push('/')
  }, [])

  const { mutateAsync: signUp } = api.auth.signUp.useMutation({
    onSuccess: data => {
      toast.success('Account created successfully')
      router.push('/auth/verify')
    },
    onError: error => {
      toast.error(error.message)
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    const { email, password } = values
    await signUp({ email, password })
    setLoading(false)
  }

  return (
    <>
      <div className="flex flex-col self-stretch w-full gap-3">
        <>
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
          <p className="text-sm text-center py-1">OR</p>
        </>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
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
            {/* spacer*/}
            <div className="" />
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
              {loading ? 'Signing up...' : 'Sign up'}
            </Button>
          </form>
        </Form>
      </div>

      <div className="flex self-stretch justify-center gap-3">
        <p className="text-sm font-medium dark:text-white">
          Already have an account?
        </p>
        <Link
          href="/auth/sign-in"
          className="text-sm font-medium font-montAlt text-ds-primary-p dark:text-ds-primary-m"
        >
          Log In
        </Link>
      </div>
    </>
  )
}

SignUp.getLayout = function getLayout(page: any) {
  return (
    <PortalLayout>
      <MainLayout bg={BG['sign-up']}>
        <AuthLayout title="Sign Up">{page}</AuthLayout>
      </MainLayout>
    </PortalLayout>
  )
}
