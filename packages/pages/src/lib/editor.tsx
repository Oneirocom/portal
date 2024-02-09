import { useEffect, useRef, useState } from 'react'
import posthog from 'posthog-js'
import { Maintenance } from '@magickml/portal-ui'
import { PortalLayout } from '@magickml/portal-layout'
import { useRouter } from 'next/router'

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
  email,
}: Props): React.ReactElement | null => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [cookie, setCookie] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    setCookie(!posthog.has_opted_out_capturing())
  }, [])

  useEffect(() => {
    const iframe = iframeRef.current

    const handleLoad = () => {
      if (!iframe || !iframe.contentWindow || cookie === null) return

      console.log('Sending init message to iframe from ', ideUrl)
      iframe.contentWindow.postMessage(
        {
          type: 'INIT',
          payload: {
            config: {
              token,
              apiUrl,
              projectId,
              posthogEnabled: cookie,
              email,
            },
          },
        },
        ideUrl
      )
    }

    window.addEventListener(
      'message',
      (e: { origin: string; data: { type: string; href: string } }) => {
        if (e.origin !== ideUrl) {
          return
        }

        switch (e.data.type) {
          case 'redirect':
            router.push(e.data.href)
        }
      },
      false
    )

    if (iframe) {
      iframe.addEventListener('load', handleLoad)
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleLoad)
      }
    }
  }, [iframeRef, projectId, token, cookie])

  return (
    <>
      {process.env.NEXT_PUBLIC_AIDE_MAINTENANCE_MODE === 'true' ? (
        <Maintenance mode="editor" />
      ) : cookie !== null ? (
        <iframe
          title="Editor"
          src={process.env.NEXT_PUBLIC_EDITOR_URL}
          ref={iframeRef}
          style={{
            border: 'none',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            padding: 0,
            margin: 0,
          }}
        />
      ) : null}
    </>
  )
}

Editor.getLayout = function getLayout(page: any) {
  return <PortalLayout>{page}</PortalLayout>
}
