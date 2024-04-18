import { useRouter } from 'next/router'
import { TemplateGetStaticProps } from '../template-page-isr'
import { Button } from '@magickml/client-ui'
import { CreateAgentDialog } from '@magickml/portal-ui'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useUser } from '@clerk/nextjs'

type TemplatePageHeaderProps = {
  template: TemplateGetStaticProps['template']
}

export const TemplatePageHeader = (props: TemplatePageHeaderProps) => {
  const { template } = props

  const { isSignedIn } = useUser()

  const router = useRouter()

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      process.env.NEXT_PUBLIC_APP_URL + router.asPath
    )
    toast.success('Link copied to clipboard')
  }

  const createDialog = useState(false)

  const openCreateDialog = () => {
    if (!isSignedIn) {
      router.push('/sign-in')
      return
    }
    createDialog[1](true)
  }

  return (
    <>
      <CreateAgentDialog templateId={template.id} state={createDialog} />
      <div className="inline-flex justify-between w-full items-center gap-y-4">
        <h1 className="text-[32px] font-normal">
          {template?.name || 'Unnamed Template'}
        </h1>

        <div className="inline-flex">
          <Button
            variant="portal-neutral"
            className="mr-4"
            onClick={copyToClipboard}
          >
            Share
          </Button>

          <Button variant="portal-primary" onClick={openCreateDialog}>
            Build in Magick
          </Button>
        </div>
      </div>
    </>
  )
}
