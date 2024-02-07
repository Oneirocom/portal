import { FunctionComponent } from 'react'

/**
 * SideDrawerDivider is a component that provides a visual separator
 * in the side drawer. It's essentially a horizontal line.
 *
 * @returns {JSX.Element} A rendered divider line.
 */
const SideDrawerDivider: FunctionComponent = () => {
  return (
    <div className="h-0.5 mx-4 divider bg-white dark:bg-[#999999] color-transition" />
  )
}

export default SideDrawerDivider
