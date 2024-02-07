import { Fragment, FunctionComponent, useEffect, useState } from 'react'
import SidebarTopLink from './SideDrawerTopLink'
import SideDrawerDivider from './SideDrawerDivider'
import SideDrawerLightMode from './SideDrawerLightMode'
import SideDrawerBottomLink from './SideDrawerBottomLink'
import SideDrawerCTA from './SideDrawerCTA'
import SideDrawerUser from './SideDrawerUser'
import SideDrawerMP from './SideDrawerMP'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import {
  getNavigationForRole,
  filteredSecondaryNavigation,
  Route,
} from './navigation'
import { useSession } from 'next-auth/react'
import { api } from '@magickml/portal-api-client'
import { Role, ANONYMOUS } from '@magickml/portal-config'
import Link from 'next/link'
import { useAtom } from 'jotai'
import { sidebarAtom } from '@magickml/portal-state'
import { useRouter } from 'next/router'
import { MagickIcon } from '@magickml/portal-ui'

/**
 * Props for the `MagickSideDrawer` component.
 */
type MagickSideDrawerProps = {
  /** Indicates if the sidebar is open or closed. */
  sidebarOpen: boolean
  /** Function to set the open/closed state of the sidebar. */
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
  /** Flag for whether the layout is public or not. */
  isPublic?: boolean
}

/**
 * `MagickSideDrawer` renders a responsive side drawer.
 * On large screens, it's always visible; on smaller screens, it becomes a slide-in sidebar.
 */
const MagickSideDrawer: FunctionComponent<MagickSideDrawerProps> = ({
  isPublic = false,
}) => {
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarAtom)
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setSidebarOpen(false)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router])

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          {/* Background Overlay */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-secondary-dark/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex flex-1 w-full max-w-[256px]">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 flex justify-center w-16 pt-5 left-full">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="w-6 h-6 text-white ring-1 ring-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="relative overflow-y-auto overflow-x-hidden rounded-r-[21px] dark:bg-[#18181d] bg-secondary-highlight color-transition box-border w-[247px] h-full lg:flex flex-col px-0 py-0 pb-5 items-start justify-between text-center text-white text-lg">
                  <SideDrawerContent isPublic={isPublic} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="relative overflow-y-auto hidden lg:fixed lg:inset-y-0 lg:z-50 overflow-x-hidden  dark:bg-[#18181d] bg-secondary-highlight color-transition box-border w-[247px] h-full lg:flex flex-col px-0 py-0 pb-5 items-start justify-between text-center text-white text-lg">
        <SideDrawerContent isPublic={isPublic} />
      </div>
    </>
  )
}

/**
 * `SideDrawerContent` renders the main content of the side drawer,
 * including the top section with the main navigation and the bottom section with user info and other actions.
 */
const SideDrawerContent = ({ isPublic }: { isPublic: boolean }) => {
  const session = useSession()
  const { data: user } = api.users.getCurrentUser.useQuery(undefined, {
    enabled: !!session.data?.user?.id,
  })

  const [role, setRole] = useState<Role>(ANONYMOUS)

  const [filteredNavigation, setFilteredNavigation] = useState<Route[]>([])

  // Determine which navigation to use based on the user's role await
  useEffect(() => {
    getNavigationForRole(role)
      .then(navigation => {
        setFilteredNavigation(navigation)
      })
      .catch(err => {
        console.log(err)
      })
  }, [role])

  useEffect(() => {
    if (session.data?.user?.role) {
      setRole(session.data.user.role as Role)
    } else {
      setRole(ANONYMOUS)
    }
  }, [session.data?.user?.role])

  return (
    <>
      {/* Top Section */}
      <div className="flex flex-col items-start justify-start gap-1 pt-5">
        {/* Logo */}
        <Link
          href="/"
          className="flex-col items-start self-stretch justify-center py-5 pl-5"
        >
          <MagickIcon
            width={187}
            height={33}
            className="text-white relative w-[187px] h-[33px] overflow-hidden flex-shrink-0 object-cover"
          />
        </Link>

        <SideDrawerDivider />

        <div className="flex flex-col items-start justify-center w-full gap-5 py-5 text-sm text-white font-montserrat">
          {/* CTA Button */}
          <SideDrawerCTA role={role} />
        </div>

        {/* Main Nav */}
        {filteredNavigation &&
          filteredNavigation.length > 0 &&
          filteredNavigation.map(
            (item: Route) =>
              item.enabled && <SidebarTopLink key={item.name} {...item} />
          )}

        <SideDrawerDivider />

        {/* Light Mode Toggle */}
        <SideDrawerLightMode />
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-start justify-start gap-1 text-sm text-white">
        {/* Secondary Nav */}
        <div className="flex flex-col items-start justify-start gap-1">
          {filteredSecondaryNavigation.map(item => (
            <SideDrawerBottomLink key={item.name} {...item} />
          ))}
        </div>

        <SideDrawerDivider />
        {/* User Info */}
        {!isPublic && user && <SideDrawerUser />}
        {/* MP */}
        <SideDrawerMP />
      </div>
    </>
  )
}

export default MagickSideDrawer
