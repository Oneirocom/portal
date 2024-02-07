import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'
import { EventTypes, trackEvent } from '@magickml/portal-utils-shared'

/**
 * Props for the `SideDrawerBottomLink` component.
 */
type SideDrawerBottomLinkProps = {
  /** The displayed name of the link. */
  name: string
  /** Id. Mainly for driver */
  id: string
  /** Icon URL for the link. */
  icon: string
  /** Optional href for the link. If provided, the link is treated as a hyperlink; otherwise, as a button. */
  href?: string
  /** Optional type to determine if the link should be treated as a hyperlink or a button. */
  type?: string
  /** Optional click handler for the link/button. */
  onClick?: () => void
  newTab?: boolean
  phogId?: string
}

/**
 * A component that renders a bottom link for the side drawer.
 * This link can either be a navigational hyperlink or a clickable button.
 */
const SideDrawerBottomLink: FunctionComponent<
  SideDrawerBottomLinkProps
> = props => {
  return (
    <SideDrawerBottomLinkWrapper {...props}>
      <Image
        className="w-[22px] h-[22px] overflow-hidden flex-shrink-0 object-contain text-[14px]"
        alt=""
        src={props.icon}
        width={22}
        height={22}
      />
      <div className="font-montserrat">{props.name}</div>
    </SideDrawerBottomLinkWrapper>
  )
}

/**
 * Props for the `SideDrawerBottomLinkWrapper` component.
 */
type SideDrawerBottomLinkWrapperProps = {
  /** Children elements to be rendered within the wrapper. */
  children: React.ReactNode
  /** Id. Mainly for driver */
  id: string
  /** The displayed name of the link. */
  name: string
  /** Optional href for the link. */
  href?: string
  /** Optional type to determine if the link should be treated as a hyperlink or a button. */
  type?: string
  /** Optional click handler for the link/button. */
  onClick?: () => void
  newTab?: boolean
  phogId?: string
}

/**
 * A wrapper component that renders its children as either a navigational hyperlink or a clickable button.
 * The rendering choice is based on the provided `type` prop.
 */
const SideDrawerBottomLinkWrapper: FunctionComponent<
  SideDrawerBottomLinkWrapperProps
> = ({
  children,
  href = '#',
  type,
  onClick,
  id,
  newTab,
  phogId = 'default',
}) => {
  const router = useRouter()

  const handleClick = (
    e: any,
    phogId: EventTypes,
    href: string,
    newTab?: boolean
  ) => {
    e.preventDefault()
    trackEvent(phogId)

    if (type === 'button') {
      onClick?.()
    } else {
      if (newTab) {
        window.open(href, '_blank')
      } else {
        router.push(href)
      }
    }
  }

  return type === 'button' ? (
    <button
      id={id}
      className="w-[247px] h-[27px] flex flex-row py-1.5 pr-2.5 pl-5 box-border items-center justify-start gap-3"
      onClick={e => handleClick(e, phogId as EventTypes, href, newTab)}
    >
      {children}
    </button>
  ) : (
    // NOTE: It may seem silly to use <Link/> and router.push but this is best way to have posthog tracking and the link for SEO
    <Link
      id={id}
      className="w-[247px] h-[27px] flex flex-row py-1.5 pr-2.5 pl-5 box-border items-center justify-start gap-3"
      href={href}
      target={newTab ? '_blank' : ''}
      onClick={e => handleClick(e, phogId as EventTypes, href, newTab)}
    >
      {children}
    </Link>
  )
}

export default SideDrawerBottomLink
