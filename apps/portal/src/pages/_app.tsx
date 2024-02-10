import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NextPage } from 'next'

import { SessionProvider } from 'next-auth/react'

// styles
import '../../../../../../packages/client/stylesheets/src/App.css'
import '../../../../../../packages/client/stylesheets/src/design-globals/design-globals.css'
import 'dockview/dist/styles/dockview.css'
import '../../../../../../packages/client/stylesheets/src/themes.scss'
import 'reactflow/dist/style.css'
import '../styles/globals.css'
import 'node_modules/latex.js/dist/css/katex.css'
import '../../../../../../packages/client/stylesheets/src/behaveFlow.css'
import '../../../../../../packages/client/stylesheets/src/dockview.css'

// import "styles/sheetOverrides.css";
// import "driver.js/dist/driver.css";
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { Montserrat, Montserrat_Alternates } from 'next/font/google'

// state
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { api } from '@magickml/portal-api-client'

// posthog
import { StyledToaster } from '@magickml/portal-ui'

import clsx from 'clsx'
import { Maintenance } from '@magickml/portal-ui'
import { useEffect } from 'react'

import { ClerkProvider } from '@clerk/nextjs'
import { clerkAppearance } from '../styles/clerk'

// import dynamic from 'next/dynamic'
// const AnonymousUserProvider = dynamic(
//   () => import("@magickml/portal-providers"),
//   {
//     ssr: false,
//   }
// )

// const CustomPosthogProvider = dynamic(
//   () => import('@magickml/portal-providers'),
//   {
//     ssr: false,
//   }
// )

// const FrigadeProvider = dynamic(() => import('providers/FrigadeProvider'), {
//   ssr: false,
// })

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

const monteserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  variable: '--font-montserrat-alternates',
  weight: ['400', '500', '600', '700'],
})

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({
  Component,
  pageProps,
}: AppPropsWithLayout): React.ReactElement => {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ||
    function (page) {
      return <>{page}</>
    }

  useEffect(() => {
    // Calculate the viewport height and set it as a CSS variable
    function setViewportHeight() {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    // Set the viewport height on initial load
    setViewportHeight()

    // Update the viewport height when the window is resized
    window.addEventListener('resize', setViewportHeight)

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('resize', setViewportHeight)
  }, [])

  return (
    <SessionProvider session={pageProps.session}>
      <ClerkProvider appearance={clerkAppearance} {...pageProps}>
        {/* <AnonymousUserProvider>
        <FrigadeProvider>
          <CustomPosthogProvider> */}
        <main
          className={clsx(
            montserrat.className,
            `${monteserratAlternates.variable} font-sans h-screen`
          )}
        >
          <Head>
            <meta
              title="Maintenance | MagickML"
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <NextThemeProvider attribute="class">
            {process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true' ? (
              <Maintenance mode="cloud" />
            ) : (
              getLayout(<Component {...pageProps} />)
            )}

            <StyledToaster />
          </NextThemeProvider>
        </main>
        {process.env.NEXT_PUBLIC_DEV_TOOLS === 'true' && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
        {/* </CustomPosthogProvider>
        </FrigadeProvider>
      </AnonymousUserProvider> */}
      </ClerkProvider>
    </SessionProvider>
  )
}

export default api.withTRPC(App)
