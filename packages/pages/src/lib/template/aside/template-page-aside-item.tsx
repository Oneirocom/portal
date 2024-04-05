import React, { PropsWithChildren } from 'react'
import { TemplateGetStaticProps } from '../template-page-isr'

type TemplatePageAsideItemProps = {
  title: string
}

export const TemplatePageAsideItem = (
  props: PropsWithChildren<TemplatePageAsideItemProps>
) => {
  return (
    <div className="flex flex-col">
      <p className='font-normal text-2xl'>{props.title}</p>
      <div className="flex flex-col pt-1 text-base">{props.children}</div>
    </div>
  )
}
