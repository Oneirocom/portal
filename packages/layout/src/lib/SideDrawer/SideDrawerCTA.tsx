import { FunctionComponent } from 'react'
import Link from 'next/link'
import { ANONYMOUS } from '@magickml/portal-config'

/**
 * Props for the `SideDrawerCTA` component.
 */
type MagickSideDrawerProps = {
  /** Indicates whether the user is ANONYMOUS, USER, or TESTER. */
  role: string
  /** Flag for whether the layout is public or not. */
  isPublic?: boolean
}

/**
 * `SideDrawerCTA` is a component that provides a Call-to-Action (CTA) button
 * inside the side drawer.
 *
 * @returns {JSX.Element} A rendered CTA button
 */
const SideDrawerCTA: FunctionComponent<MagickSideDrawerProps> = ({
  role,
  isPublic = false,
}) => {
  return (
    <Link
      id="cta-button"
      href={
        role === ANONYMOUS
          ? 'https://form.typeform.com/to/w7PrI4DQ?typeform-source=site.magickml.com'
          : '/agents/create'
      }
      className="self-stretch flex flex-col items-start justify-start gap-2 text-left font-normal px-5 active:scale-95 hover:scale-[1.02] transform transition-all duration-200 ease-in-out"
    >
      <div className="self-stretch rounded-lg border-2 border-transparent bg-white dark:bg-transparent border-secondary-highlight dark:border-[#3c3f41] color-transition flex flex-row items-center py-2.5 px-3.5 justify-center gap-[10px]">
        <div className="montserrat dark:text-white text-black color-transition">
          {role === ANONYMOUS ? 'Notify me' : 'Create Agent'}
        </div>
      </div>
    </Link>
  )
}

export default SideDrawerCTA
