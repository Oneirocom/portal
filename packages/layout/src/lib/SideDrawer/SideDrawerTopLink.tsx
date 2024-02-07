import Image from 'next/image'
import { FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import Link from 'next/link'
import { NavEventTypes, trackEvent } from '@magickml/portal-utils-shared'

/**
 * Props for the SideDrawerTopLink component.
 */
type SideDrawerTopLinkProps = {
  /** Display name for the link */
  name: string

  /** Icon URL or path for the link */
  icon: string

  /** Navigation URL for the link */
  href: string
}

/**
 * The SideDrawerTopLink component represents a navigational link within
 * a side drawer. It comes with an associated icon and can be highlighted
 * when it matches the current page route.
 *
 * @param {SideDrawerTopLinkProps} item - The properties for the component.
 * @returns {JSX.Element} The rendered JSX element.
 */
const SideDrawerTopLink: FunctionComponent<SideDrawerTopLinkProps> = item => {
  const router = useRouter()

  const tracking = (eventName: keyof typeof NavEventTypes) => {
    const eventType = NavEventTypes[eventName]
    if (eventType) {
      trackEvent(eventType)
    }
  }

  return (
    <Link
      onClick={() =>
        tracking(
          `NAV_${item.name.toUpperCase()}_CLICK` as keyof typeof NavEventTypes
        )
      }
      id={item.name.toLowerCase()}
      href={item.href}
      className={clsx(
        item.href === router.asPath && 'bg-[#007e9f] dark:bg-[#49545a]',
        'w-[247px] h-[27px] flex flex-row py-6 pr-2.5 pl-5 box-border items-center justify-start gap-6 hover:bg-[#007e9f] dark:hover:bg-[#262c2f] color-transition'
      )}
    >
      <Image
        className="relative w-[24px] h-[24px] overflow-hidden flex-shrink-0 object-cover"
        alt={item.name}
        src={item.icon}
        width={24}
        height={24}
      />
      <div className="relative text-[16px] font-montserrat font-medium">
        {item.name}
      </div>
    </Link>
  )
}

export default SideDrawerTopLink
