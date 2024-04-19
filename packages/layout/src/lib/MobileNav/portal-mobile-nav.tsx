import React from 'react'
import { Button, cn } from '@magickml/client-ui'
import { useRouter } from 'next/router'
import { usePortalNavigation } from '../hooks/use-portal-navigation'

type Props = {}

export const PortalMobileNav: React.FC<Props> = () => {
  const { pathname, push } = useRouter()
  const navigation = usePortalNavigation()

  const isRoute = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.includes(href)
  }

  return (
    <div className="sticky lg:hidden bottom-0 left-0 z-50 w-full h-20 bg-ds-card border-t border-ds-neutral">
      <div className="flex justify-evenly items-center h-full w-full  mx-auto font-medium">
        {navigation.map(nav => (
          <Button
            key={nav.href}
            variant="ghost"
            size="icon"
            className={cn(
              'flex flex-col items-center justify-center w-fit',
              isRoute(nav.href) ? '' : 'opacity-50'
            )}
            onClick={() => push(nav.href)}
          >
            <nav.Icon
              height="24"
              width="24"
              viewBox="0 0 28 28"
              className="w-6 h-6"
            />
            <span className="text-xs font-normal">{nav.name}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
