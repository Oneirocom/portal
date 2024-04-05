import { TemplateGetStaticProps } from '../template-page-isr'
import { Button } from '@magickml/client-ui'

type TemplatePageHeaderProps = {
  template: TemplateGetStaticProps['template']
}

export const TemplatePageHeader = (props: TemplatePageHeaderProps) => {
  const { template } = props
  return (
    <div className="inline-flex justify-between w-full items-center gap-y-4">
      <h1 className="text-[32px] font-normal">
        {template?.name || 'Unnamed Template'}
      </h1>

      <div className="inline-flex">
        <Button
          variant="portal-neutral"
          className="mr-4"
          onClick={() => {
            console.log('Share')
          }}
        >
          Share
        </Button>

        <Button
          variant="portal-primary"
          onClick={() => {
            console.log('Build in Magick')
          }}
        >
          Build in Magick
        </Button>
      </div>
    </div>
  )
}
