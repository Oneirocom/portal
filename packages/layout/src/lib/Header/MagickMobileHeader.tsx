import { FunctionComponent } from 'react'
import Link from 'next/link'
import Image from "next/legacy/image"
import { api } from '@magickml/portal-api-client'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { useSession } from 'next-auth/react'

type MagickMobileHeaderProps = {
  setSidebarOpen: (open: boolean) => void
  isPublic?: boolean
}

const MagickMobileHeader: FunctionComponent<MagickMobileHeaderProps> = ({
  setSidebarOpen,
  isPublic = false,
}) => {
  const session = useSession()
  const { data: user } = api.users.getCurrentUser.useQuery(undefined, {
    enabled: session.status === 'authenticated',
  })

  return (
    <div className="lg:hidden top-0 sticky flex flex-row justify-between z-50 border-b pb-1.5 border-[#262730] bg-[#fff] dark:bg-[#101112] py-4 px-8">
      <button
        type="button"
        className="text-black dark:text-white btn btn-ghost btn-sm lg:hidden self-center active:scale-[0.97] transiton-all duration-200 ease-in-out"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon
          className="w-[30px] h-[30px] shrink-0 overflow-hidden relative"
          aria-hidden="true"
        />
      </button>

      <Link href="/" className="flex flex-col justify-center h-10 flex-start">
        <Image
          className="relative w-[126px] h-[23px] overflow-hidden flex-shrink-0 cursor-pointer dark:text-white text-black"
          alt=""
          src="/images/logos/magick-logo-white.svg"
          width={126}
          height={23}
        />
      </Link>
      <div className="inline-flex items-center justify-center gap-x-8">
        <Link
          href="https://site.magickml.com/"
          target="_blank"
          className="flex flex-row items-start justify-start cursor-pointer"
        >
          <Image
            className="relative w-10 h-10 overflow-hidden shrink-0"
            alt=""
            src="/images/icons/help.svg"
            width={40}
            height={40}
          />
        </Link>

        {session.status === 'authenticated' && (
          <Image
            className="relative w-[33.3px] h-[33.3px] rounded-full overflow-hidden flex-shrink-0 object-cover ring-1 ring-white color-transition dark:ring-secondary-main"
            alt=""
            src={
              user?.image
                ? `${process.env.NEXT_PUBLIC_BUCKET_PREFIX}${user.image}`
                : '/images/magick-icon.png'
            }
            width={33.3}
            height={33.3}
          />
        )}
      </div>
    </div>
  )
}

export default MagickMobileHeader
