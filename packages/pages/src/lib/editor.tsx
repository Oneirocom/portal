import { useEffect, useState } from 'react'
import posthog from 'posthog-js'
import { Maintenance } from '@magickml/portal-ui'
import { type AppConfig } from '@magickml/providers'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'

const MagickIDE = dynamic(
  () => import('client/editor').then(mod => mod.MagickIDE),
  { ssr: false }
)

export const Editor = (props: AppConfig): React.ReactElement | null => {
  const [cookie, setCookie] = useState<boolean | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    setCookie(!posthog.has_opted_out_capturing())
  }, [])

  if (!props || !props.apiUrl || !props.token) return null

  useEffect(() => {
    if (theme !== 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [theme])

  return (
    <>
      {process.env.NEXT_PUBLIC_AIDE_MAINTENANCE_MODE === 'true' ? (
        <Maintenance mode="editor" />
      ) : cookie !== null ? (
        <MagickIDE config={props} />
      ) : null}
    </>
  )
}
