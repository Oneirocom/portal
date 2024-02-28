import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { CookieBanner } from '@magickml/portal-ui'
import { useSession } from '@clerk/nextjs'

type Props = {
  children: React.ReactNode
}

export const CustomPosthogProvider = ({ children }: Props) => {
  // get sessionId from query params
  const router = useRouter()
  const { sessionId: webflowSessionId } = router.query
  const { isSignedIn, session } = useSession()
  const [showBanner, setShowBanner] = useState(false)

  // Initialize PostHog
  useEffect(() => {
    if (typeof window !== 'undefined') {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
        api_host:
          process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
        loaded: posthog => {
          if (process.env.NODE_ENV === 'development') posthog.debug()
        },
        disable_session_recording: process.env.NODE_ENV === 'development',
      })
    }
  }, [])

  useEffect(() => {
    if (webflowSessionId) {
      // savw webflow id to localstorage
      posthog.alias(webflowSessionId as string)
    }
  }, [webflowSessionId])

  // Track page views with PostHog
  useEffect(() => {
    const handleRouteChange = () => posthog.capture('$pageview')
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // Set identity
  useEffect(() => {
    if (isSignedIn && session?.user?.primaryEmailAddress?.emailAddress) {
      posthog.identify(session?.user.primaryEmailAddress.emailAddress, {
        email: session?.user.primaryEmailAddress.emailAddress,
        firstName: session?.user.firstName,
        lastName: session?.user.lastName,
        userName: session?.user.username,
        id: session?.user.id,
      })
    } else {
      posthog.reset()
    }
  }, [isSignedIn, session])

  // Check cookie tracking status
  useEffect(() => {
    if (posthog.has_opted_out_capturing()) {
      return
    } else if (posthog.has_opted_in_capturing()) {
      return
    } else {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    posthog.opt_in_capturing()
    setShowBanner(false)
  }

  const declineCookies = () => {
    posthog.opt_out_capturing()
    setShowBanner(false)
  }

  return (
    <PostHogProvider client={posthog}>
      {children}
      <CookieBanner
        showBanner={showBanner}
        acceptCookies={acceptCookies}
        declineCookies={declineCookies}
      />
    </PostHogProvider>
  )
}
