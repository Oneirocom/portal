import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { DropDownInfoMenu, DropDownUserMenu } from '@magickml/portal-ui'
import { MagickIcon } from '@magickml/icons'
type MobileHeaderProps = {
  isPublic?: boolean
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ isPublic = false }) => {
  const router = useRouter()
  const [currentRoute, setCurrentRoute] = useState(router.pathname)

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setCurrentRoute(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router])

  const logo = (
    <Link href="/">
      <MagickIcon
        width={126}
        height={23}
        className="relative flex-shrink-0 object-cover overflow-hidden text-black dark:text-white"
      />
    </Link>
  )

  const routeTitle = (
    <div>
      <h1 className="text-2xl font-bold font-montAlt">
        {currentRoute.split('/')[1].toUpperCase()}
      </h1>
    </div>
  )

  if (currentRoute.startsWith('/explore/')) {
    return null
  }

  return (
    <div className="lg:hidden top-0 sticky flex flex-row items-center justify-between z-50 border-b pb-3 border-[#101112] bg-[#fff] dark:bg-[#101112] py-4 px-2 md:px-10">
      {currentRoute.slice(1).toUpperCase() ? routeTitle : logo}
      <div className="flex items-center self-end text-white">
        <DropDownInfoMenu />
        <DropDownUserMenu />
      </div>
    </div>
  )
}

export default MobileHeader
