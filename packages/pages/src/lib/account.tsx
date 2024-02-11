import { toast } from 'react-hot-toast'
import { MainLayout, PortalLayout } from '@magickml/portal-layout'
import { MagickDialog } from '@magickml/portal-ui'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Input,
  formInputStyles,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Progress,
  Button,
} from '@magickml/client-ui'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import axios from 'axios'
import clsx from 'clsx'
import { useState } from 'react'
import { z } from 'zod'
import { api } from '@magickml/portal-api-client'
import { PriceKeys } from '@magickml/portal-utils-shared'

const amountSchema = z.object({
  amount: z
    .number()
    .min(5, 'Minimum amount is $5.00')
    .max(1000, 'Maximum amount is $1000.00'),
})

export const AccountPage = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const session = useSession()
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

  const formSchema = passwordFormSchema
  type FormValues = z.infer<typeof formSchema>

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  const clearData = () => {
    setOpen(false)
    form.resetField('password')
    form.resetField('confirmPassword')
  }

  const { mutateAsync: updatePassword, isLoading } =
    api.auth.updatePassword.useMutation({
      onSuccess: () => {
        toast.success('Password updated successfully')
        clearData()
      },
      onError: error => {
        toast.error(error.message)
        clearData()
      },
    })

  const handlePasswordUpdate = async (values: z.infer<typeof formSchema>) => {
    const email = session.data?.user?.email
    return await updatePassword({
      password: values.password,
      email: email ?? '',
    })
  }

  const [inputValue, setInputValue] = useState<string>('5.00')
  const [error, setError] = useState<string | undefined>()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '').replace(/^0+/, '')
    setInputValue(value)
  }

  const { mutateAsync: createCheckout } =
    api.billing.createCheckout.useMutation({
      onSuccess: data => {
        typeof data.checkoutSession.url === 'string'
          ? router.push(data.checkoutSession.url)
          : toast.error('Something went wrong')
      },
      onError: error => {
        toast.error(error.message || 'Error processing checkout')
      },
    })

  const handleAddBalance = async () => {
    const parsedValue = parseFloat(inputValue)
    if (isNaN(parsedValue)) {
      setError('Invalid amount')
      toast.error('Invalid amount')
      return
    }

    const result = amountSchema.safeParse({ amount: parsedValue })
    if (!result.success) {
      setError(result.error.errors[0].message)
      toast.error(result.error.errors[0].message)
      return
    }

    setError(undefined)

    try {
      await createCheckout({
        priceKey: PriceKeys.Balance,
        amount: parsedValue,
      })
    } catch (error) {
      console.error(error)
      toast.error('Error creating checkout session')
    }
  }

  const handlePortal = async () => {
    try {
      const response = await axios.get('/api/billing/checkout/create-portal')
      const portalUrl = response.data.url
      if (portalUrl) {
        window.location.href = portalUrl
      } else {
        throw new Error('No portal URL returned')
      }
    } catch (error) {
      console.error(error)
      toast.error('Error accessing billing portal')
    }
  }

  const { data: subscription } = api.billing.getSubscription.useQuery()

  const { data: budget } = api.billing.getBudget.useQuery()

  const { data: promotions } = api.billing.getPromotions.useQuery()

  const introPromotion = promotions?.find(
    promotion => promotion.type === 'INTRO'
  )

  const introCredits = introPromotion
    ? (parseFloat(introPromotion.amount.toString()) / 2) * 100
    : 0

  const introAmount = (introCredits / 100) * 2

  // const getSubscriptionName = () => {
  //   if (!subscription) {
  //     return "Free Tier";
  //   }

  //   if (subscription.exists) {
  //     return subscription.subscription?.items;
  //   }

  //   return "Free Tier";
  // };

  return (
    <div className="flex flex-col font-montserrat justify-center items-start">
      {/* Header */}
      <div className="self-stretch justify-center items-center gap-5 inline-flex p-4 lg:p-10">
        <h1 className="grow shrink basis-0 text-2xl font-bold font-montAlt">
          Account
        </h1>
      </div>

      {/* Security */}
      <div className="flex flex-col gap-y-2 p-4 lg:p-10 border-b border-ds-neutral w-full">
        <h3 className="text-2xl font-montAlt font-medium">Security</h3>
        <p className="font-montAlt pb-2">
          Update or Set the password for your account.
        </p>
        <Button
          onClick={() => setOpen(true)}
          variant="portal-neutral"
          size="md"
          className="max-w-2xs text-lg"
        >
          Update Password
        </Button>
        <MagickDialog
          open={open}
          setOpen={setOpen}
          submitButton={false}
          description="Create a password that is at least 8 characters long."
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handlePasswordUpdate)}
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
                size="lg"
                variant="primary"
                className="w-full"
                type="submit"
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
        </MagickDialog>
      </div>

      {/* Billing */}
      <div className="flex flex-col gap-y-2 p-4 lg:p-10 border-none border-ds-neutral w-full">
        <h3 className="text-2xl font-montAlt font-medium">Billing</h3>
        <p className="font-montAlt pb-2">
          Review and manage your subscription usage.
        </p>
        {/* Cards */}
        <div className="self-stretch pb-4 justify-center items-center gap-6 flex lg:flex-row flex-col">
          <Card>
            <p className="text-center text-3xl font-medium">
              {subscription?.exists ? 'Pro' : 'Neophyte'}
            </p>
            <p className="text-center text-ds-secondary-p dark:text-ds-secondary-m text-base font-normal">
              {subscription?.exists ? (
                <pre>{JSON.stringify(subscription)}</pre>
              ) : (
                <span>Free Tier Plan</span>
              )}
            </p>
            <Button
              onClick={() => router.push('/subscribe')}
              variant="portal-neutral"
              size="md"
              className="w-full"
            >
              View Plans
            </Button>
          </Card>

          <Card>
            <p className="text-center text-3xl font-medium inline-flex items-center gap-x-2">
              <span>
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="auto_awesome">
                    <g id="Vector">
                      <path
                        d="M17.2762 7.49998L18.3897 5.20831L20.8394 4.16665L18.3897 3.12498L17.2762 0.833313L16.1627 3.12498L13.713 4.16665L16.1627 5.20831L17.2762 7.49998Z"
                        fill="currentColor"
                      />
                      <path
                        d="M17.2762 12.5L16.1627 14.7916L13.713 15.8333L16.1627 16.875L17.2762 19.1666L18.3897 16.875L20.8394 15.8333L18.3897 14.7916L17.2762 12.5Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.5951 7.91665L8.36814 3.33331L6.14112 7.91665L1.2417 9.99998L6.14112 12.0833L8.36814 16.6666L10.5951 12.0833L15.4946 9.99998L10.5951 7.91665ZM9.25003 10.825L8.36814 12.6416L7.48624 10.825L5.54429 9.99998L7.48624 9.17498L8.36814 7.35831L9.25003 9.17498L11.192 9.99998L9.25003 10.825Z"
                        fill="currentColor"
                      />
                    </g>
                  </g>
                </svg>
              </span>
              Free Trial Magick Power
            </p>
            <Progress value={introCredits} max={100} />
            <p className="text-center text-ds-secondary-p dark:text-ds-secondary-m text-base font-normal">
              {`${Number(introAmount.toFixed(2)) * 100} / 200`}
            </p>
          </Card>

          <Card>
            <p className="text-center text-3xl font-medium">
              {budget
                ? `$${(Number(budget.balance) / 100).toFixed(2)}`
                : '$0.00'}
            </p>
            <p className="text-center text-ds-secondary-p dark:text-ds-secondary-m text-base font-normal ">
              Balance remaining
            </p>
          </Card>
        </div>

        {/* Add Balance */}
        <div className="w-full bg-ds-card-alt p-6 rounded-lg lg:inline-flex">
          <div className="grow items-start gap-1 flex flex-col">
            <div className="text-lg font-semibold ">
              Manually Add to Balance
            </div>
            <div className="text-ds-secondary-p dark:text-ds-secondary-m text-sm font-normal ">
              Minimum amount of $5.00 required
            </div>
          </div>
          <div className="inline-flex items-baseline gap-2 lg:inline-flex">
            <div className="flex flex-col">
              <Input
                type="text"
                value={`$${inputValue}`}
                onChange={handleInputChange}
                className="relative lg:grow lg:shrink lg:basis-0 lg:w-96 h-10 px-6 py-2 bg-ds-card border-ds-secondary rounded-lg border"
              />

              {error && (
                <span className="text-red-500 text-xs mt-1 text-center">
                  {error}
                </span>
              )}
            </div>
            <button
              onClick={handleAddBalance}
              className="w-24 lg:ml-6 px-4 py-2 text-center white text-base font-normal bg-ds-card rounded-lg border border-neutral-700 justify-center items-center gap-1 flex"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Manage Account */}
        <div className="w-full bg-ds-card-alt p-6 rounded-lg lg:inline-flex lg:mt-2">
          <div className="grow items-start gap-1 flex flex-col">
            <div className="text-lg font-semibold ">Billing Portal</div>
            <div className="text-ds-secondary-p dark:text-ds-secondary-m text-sm font-normal ">
              Visit here to manage your subscriptions, view invoices, and update
              your payment method.
            </div>
          </div>
          <div className="items-baseline gap-2 lg:inline-flex">
            <Button
              onClick={handlePortal}
              size="lg"
              variant="agent"
              className="!bg-ds-neutral text-ds-white lg:px-10 w-full lg:w-fit rounded-lg justify-center items-center gap-2.5 flex"
            >
              Manage Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

AccountPage.getLayout = function getLayout(page: any) {
  return (
    <PortalLayout>
      <MainLayout classNames="!mx-0">{page}</MainLayout>
    </PortalLayout>
  )
}

type StandardProps = {
  children: React.ReactNode
  classNames?: string
}

type CardProps = {
  children: React.ReactNode
  wrapperClassNames?: string
  contentClassNames?: string
}

const Card = (props: CardProps) => {
  return (
    <CardWrapper classNames={props.wrapperClassNames}>
      <CardContent classNames={props.contentClassNames}>
        {props.children}
      </CardContent>
    </CardWrapper>
  )
}

const CardWrapper = (props: StandardProps) => {
  return (
    <div
      className={clsx(
        'grow shrink basis-0 w-full h-40 min-h-[160px] p-6 bg-ds-card rounded-lg justify-center items-center gap-4 flex',
        props.classNames
      )}
    >
      {props.children}
    </div>
  )
}

const CardContent = (props: StandardProps) => {
  return (
    <div
      className={clsx(
        'flex-col justify-center items-center gap-2.5 inline-flex',
        props.classNames
      )}
    >
      {props.children}
    </div>
  )
}

interface SectionProps {
  children: React.ReactNode
  className?: string
}

const Section: React.FC<SectionProps> & {
  Wrapper: React.FC<SectionProps>
  Content: React.FC<SectionProps>
} = ({ children }) => {
  return children
}

const SectionWrapper: React.FC<SectionProps> = ({ children }) => {
  return (
    <div className="p-4 lg:p-10  border-b border-neutral-700 flex-col justify-center items-center gap-10 flex">
      {children}
    </div>
  )
}

const SectionContent: React.FC<SectionProps> = ({ children }) => {
  return (
    <div className="bg-ds-card-alt rounded-lg w-full flex flex-col lg:flex-row lg:inline-flex py-6 px-8 gap-4">
      {children}
    </div>
  )
}

Section.Wrapper = SectionWrapper
Section.Content = SectionContent
