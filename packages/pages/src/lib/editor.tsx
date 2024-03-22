import { useEffect, useState } from 'react'
import posthog from 'posthog-js'
import { type AppConfig } from '@magickml/providers'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'
import { Maintenance } from '@magickml/portal-ui'

const MagickIDE = dynamic(
  () => import('client/editor').then(mod => mod.MagickIDE),
  {
    ssr: false,
  }
)

export const Editor = (props: AppConfig): React.ReactElement | null => {
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState<string>('Initializing editor...')
  const [cookie, setCookie] = useState<boolean | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    setCookie(!posthog.has_opted_out_capturing())
  }, [])

  useEffect(() => {
    if (theme !== 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [theme])

  if (!props || !props.apiUrl || !props.token) return null

  return (
    <>
      {loading && (
        <div className=" h-dvh flex items-center justify-center flex-col gap-y-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="loading loading-spinner loading-lg text-white" />
          <span className="text-sm font-montserrat font-medium tracking-tight">
            {status}
          </span>
        </div>
      )}
      {process.env.NEXT_PUBLIC_AIDE_MAINTENANCE_MODE === 'true' ? (
        <Maintenance mode="editor" />
      ) : cookie !== null ? (
        <>
          <MagickIDE config={props} loading={[loading, setLoading]} />
        </>
      ) : null}
    </>
  )
}
