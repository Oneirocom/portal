import React from 'react'
import { Button, cn } from '@magickml/client-ui'
import { useRouter } from 'next/router'
import { usePortalNavigation } from '../hooks/use-portal-navigation'
import { useUser } from '@clerk/nextjs'

type Props = {}

export const PortalMobileNav: React.FC<Props> = () => {
  const { route, pathname, push } = useRouter()
  const { isSignedIn } = useUser()
  const navigation = usePortalNavigation()

  const isRoute = (href: string) => {
    console.log('isRoute', href, pathname)
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.includes(href)
  }

  const onAgentClick = () => {
    push('/')
  }

  const onTemplatesClick = () => {
    push('/create')
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

        {/* <Button
          variant="ghost"
          size="icon"
          className={cn('flex flex-col', route === '/' ? '' : 'opacity-80')}
          onClick={onAgentClick}
        >
          <SmartToyOutlined className="w-6 h-6" />

          <span className="text-xs font-normal">Agents</span>
        </Button>
        <div className="h-full w-[1px] bg-ds-neutral" />
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            'flex flex-col items-center justify-center',
            route.startsWith('/templates') || route.startsWith('/create')
              ? ''
              : 'opacity-50'
          )}
          onClick={onTemplatesClick}
        >
          <TarotCardsIcon
            height="24"
            width="24"
            viewBox="0 0 28 28"
            className="w-6 h-6"
          />

          <span className="text-xs font-normal">Templates</span>
        </Button> */}
      </div>
    </div>
  )
}
