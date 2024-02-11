import { FrigadeProvider as FrigadeProviderOG, useUser } from '@frigade/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAtomValue } from 'jotai'
import { anonymousUserIdAtom } from './AnonymousProvider'
import { useSession } from '@clerk/nextjs'

type Props = {
  children: React.ReactNode
}

export const FrigadeProvider = ({ children }: Props) => {
  const { session, isSignedIn } = useSession()
  const router = useRouter()
  const anonymousId = useAtomValue(anonymousUserIdAtom)
  const frigadeUser = useUser()

  // Set or reset the user ID based on the authentication status
  useEffect(() => {
    if (isSignedIn) {
      frigadeUser.setUserId(session.user.id)
    } else if (anonymousId) {
      frigadeUser.setUserId(anonymousId)
    } else {
      frigadeUser.setUserId('anonymous')
    }
  }, [isSignedIn, session, anonymousId, frigadeUser])

  return (
    <FrigadeProviderOG
      publicApiKey={process.env.NEXT_PUBLIC_FRIGADE_KEY || ''}
      userId={session?.user?.id ?? (anonymousId || 'anonymous')}
      config={{
        navigate: (url, target): void => {
          if (target === '_blank') {
            window.open(url, '_blank')
          } else {
            router.push(url)
          }
        },
        defaultAppearance: {
          theme: {
            colorText: 'white !important',
            colorTextSecondary: 'white',
            colorTextOnPrimaryBackground: '#fff',
            colorPrimary: '#1BC5EB',
            colorBackground: '#262730',
          },
          styleOverrides: {
            button: {
              border: 'none',
              outline: 'none',
            },
          },
        },
      }}
    >
      {children}
    </FrigadeProviderOG>
  )
}
