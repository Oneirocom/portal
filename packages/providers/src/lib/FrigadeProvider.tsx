'use client'

import {
  FrigadeProvider as FrigadeProviderOG,
  useUser as useFrigadeUser,
} from '@frigade/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { v4 as uuidv4 } from 'uuid'

type Props = {
  children: React.ReactNode
}

export const FrigadeProvider = ({ children }: Props) => {
  const { user, isSignedIn, isLoaded } = useUser()
  const router = useRouter()
  // TODO: Move this logic down its throwing an error
  const { userId, setUserId, setUserIdWithProperties } = useFrigadeUser()

  useEffect(() => {
    if (!isLoaded) {
      return
    }
    if (isSignedIn) {
      setUserIdWithProperties(user.id, {
        email: user.primaryEmailAddress?.emailAddress || '',
        username: user.username,
      })
    } else if (!userId) {
      setUserId(uuidv4())
    }
  }, [isSignedIn, isLoaded, user, userId, setUserId])

  return (
    <FrigadeProviderOG
      publicApiKey={process.env.NEXT_PUBLIC_FRIGADE_KEY || ''}
      userId={isSignedIn ? user.id : undefined}
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
