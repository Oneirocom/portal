import { useEffect, useState } from 'react'
import posthog from 'posthog-js'
import { Maintenance } from '@magickml/portal-ui'
import { PortalLayout } from '@magickml/portal-layout'
import { AppConfig } from '@magickml/providers'
import dynamic from 'next/dynamic'
const MagickIDE = dynamic(
  () => import('client/editor').then(mod => mod.MagickIDE),
  { ssr: false }
)

const apiUrl = process.env.NEXT_PUBLIC_API_URL
if (!apiUrl) {
  throw new Error('NEXT_PUBLIC_API_URL is not defined')
}

type Props = {
  token: string
  projectId: string
  email: string
}

export const Editor = ({ token, projectId, email }: Props) => {
  const [cookie, setCookie] = useState<boolean | null>(null)

  useEffect(() => {
    setCookie(!posthog.has_opted_out_capturing())
  }, [])

  const config: AppConfig = {
    apiUrl,
    projectId,
    token,
    userId: '',
    email: undefined,
  }

  return (
    <>
      {process.env.NEXT_PUBLIC_AIDE_MAINTENANCE_MODE === 'true' ? (
        <Maintenance mode="editor" />
      ) : cookie !== null ? (
        <MagickIDE config={config} />
      ) : null}
    </>
  )
}
