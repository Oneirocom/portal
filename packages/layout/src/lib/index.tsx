import { type FC } from 'react'
import { NewCreateProject } from '@magickml/portal-ui'
/**
 * Props for the `PortalLayout` component.
 */
interface AccountLayoutProps {
  /** Content to be rendered within the layout. */
  children: React.ReactNode
}

/**
 * `PortalLayout` serves as a wrapper component that sets up the general layout for a page.
 */
export const PortalLayout: FC<AccountLayoutProps> = ({ children }) => {
  return (
    <>
      <NewCreateProject />
      <div className="relative bg-ds-background color-transition h-dvh flex">
        {children}
      </div>
    </>
  )
}

export * from './SubLayouts'
