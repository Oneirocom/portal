import { PropsWithChildren } from 'react'

type TemplatePageContainerProps = {}

export const TemplatePageContainer = (
  props: PropsWithChildren<TemplatePageContainerProps>
) => {
  return (
    <div className="w-full h-full flex flex-row overflow-hidden max-w-screen-4xl">
      {props.children}
    </div>
  )
}
