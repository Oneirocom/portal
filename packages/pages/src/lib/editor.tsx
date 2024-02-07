import { useEffect, useState } from 'react'
import posthog from 'posthog-js'
import { Maintenance } from '@magickml/portal-ui'
import { PortalLayout } from '@magickml/portal-layout'

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

  return (
    <>
      {process.env.NEXT_PUBLIC_AIDE_MAINTENANCE_MODE === 'true' ? (
        <Maintenance mode="editor" />
      ) : cookie !== null ? (
        <p>magick!</p>
      ) : null}
    </>
  )
}

Editor.getLayout = function getLayout(page: any) {
  return <PortalLayout>{page}</PortalLayout>
}
