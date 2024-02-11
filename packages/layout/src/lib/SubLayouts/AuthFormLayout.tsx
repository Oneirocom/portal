import { AuthLayout } from './AuthLayout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  formInputStyles,
  Input,
  Label,
  Button,
} from '@magickml/portal-core-ui'
import { useForm } from 'react-hook-form'
import { useSession } from 'next-auth/react'
import { IoIosArrowBack } from 'react-icons/io'

const emailFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
})

type AuthFormLayoutProps = {
  onSubmit: (values: FormValues) => void
  title: string
  description?: string
  submitText?: string
  isLoading?: boolean
}

type FormValues = z.infer<typeof emailFormSchema>

export const AuthFormLayout = ({
  onSubmit,
  title,
  description,
  submitText,
  isLoading = false,
}: AuthFormLayoutProps) => {
  const form = useForm<z.infer<typeof emailFormSchema>>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: { email: '' },
  })
  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session.data) router.push('/')
  }, [])

  return (
    <AuthLayout title="">
      <Fragment>
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
            {title}
          </Label>
          <p className="text-sm text-center font-medium font-montserrat pb-1">
            {description ?? ''}
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
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
                {isLoading && (
                  <span className="loading loading-spinner loading-md" />
                )}
                {submitText}
              </Button>
            </form>
          </Form>
        </div>
      </Fragment>
    </AuthLayout>
  )
}
