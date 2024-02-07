import { atom, useSetAtom } from 'jotai'
import { useEffect, ReactNode } from 'react'
import Cookies from 'js-cookie'
import { ClientJS } from 'clientjs'
import { api } from '@magickml/portal-api-client'
import { useSession } from 'next-auth/react'

export const anonymousUserIdAtom = atom<string | null>(null)

export const AnonymousUserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const setAnonymousUserId = useSetAtom(anonymousUserIdAtom)
  const { mutateAsync: create } = api.anonUsers.create.useMutation()
  const { status } = useSession()

  useEffect(() => {
    if (status === 'authenticated') {
      return
    } else if (status === 'loading') {
      return
    }

    const handleCreateOrUpdateUser = async () => {
      const client = new ClientJS()
      const fingerprint = client.getFingerprint().toString()

      try {
        const data = await create({ fingerprint })
        setAnonymousUserId(data.anonymousId)
        Cookies.set('anonymousId', data.anonymousId, {
          expires: 30, // 30 days
          path: '/',
          secure: true,
        })
      } catch (error) {
        console.error('Error:', error)
      }
    }

    const anonymousId = Cookies.get('anonymousId')
    if (!anonymousId) {
      handleCreateOrUpdateUser()
    } else {
      setAnonymousUserId(anonymousId)
    }
  }, [status, setAnonymousUserId, create])

  return <>{children}</>
}
