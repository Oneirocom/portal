import { Fragment } from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Button,
  formInputStyles,
  Label,
} from '@magickml/portal-core-ui'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@magickml/portal-api-client'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import {
  PortalLayout,
  MainLayout,
  BG,
  BackgroundKey,
  AuthLayout,
} from '@magickml/portal-layout'

const passwordFormSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 chars' }),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export const ResetPassword = () => {
  const router = useRouter()
  const formSchema = passwordFormSchema
  type FormValues = z.infer<typeof formSchema>

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  const { mutateAsync: resetPassword, isLoading } =
    api.auth.resetPassword.useMutation({
      onSuccess: data => {
        toast.success('Password reset successfully')
        router.push('/auth/sign-in')
      },
      onError: error => {
        toast.error(error.message)
      },
    })

  const handlePasswordReset = async (values: FormValues) => {
    await resetPassword({
      password: values.password,
      token: router.query.token as string,
    })
  }

  return (
    <AuthLayout title="">
      <Fragment>
        <div className="flex flex-col self-stretch w-full gap-3">
          <Label className="py-4 text-2xl font-bold font-montserrat">
            Enter your New Password
          </Label>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handlePasswordReset)}
              className="w-full space-y-8"
            >
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className={formInputStyles}
                        placeholder="Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        className={formInputStyles}
                        placeholder="Confirm Password"
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
                Submit
                {isLoading && (
                  <div
                    className="inline-block ml-4 h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-r-transparent align-[-0.125em] text-info motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                  />
                )}
              </Button>
            </form>
          </Form>
        </div>
      </Fragment>
    </AuthLayout>
  )
}

ResetPassword.getLayout = function getLayout(page: any) {
  return (
    <PortalLayout>
      <MainLayout bg={BG[BackgroundKey.FORGOT_PASSWORD]}>{page}</MainLayout>
    </PortalLayout>
  )
}
