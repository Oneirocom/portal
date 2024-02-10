import { useEffect, useRef, useState } from 'react'
import posthog from 'posthog-js'
import { Maintenance } from '@magickml/portal-ui'
import { useRouter } from 'next/router'
import { type AppConfig } from '@magickml/providers'
import { MagickIDE } from 'client/editor'

type Props = {
  token: string
  projectId: string
  email: string
}

const ideUrl = process.env.NEXT_PUBLIC_EDITOR_URL || 'http://localhost:3000'
if (!ideUrl) {
  throw new Error('NEXT_PUBLIC_EDITOR_URL is not defined')
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL
if (!apiUrl) {
  throw new Error('NEXT_PUBLIC_API_URL is not defined')
}

export const Editor = ({
  token,
  projectId,
  // email,
}: Props): React.ReactElement | null => {
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
