import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { SlHome } from 'react-icons/sl'
import { MdOutlineGroups } from 'react-icons/md'

const iconStyles =
  'text-xl text-[#618098] dark:text-white group-hover:text-secondary-highlight active:text-secondary-highlight color-transition'

type Links = {
  name: string
  href: string
  Icon: React.ReactNode
}

const links: Links[] = [
  {
    name: 'Home',
    href: '/',
    Icon: <SlHome className={iconStyles} />,
  },
  {
    name: 'Explore',
    href: '/explore',
    Icon: <MdOutlineGroups className={iconStyles} />,
  },
  {
    name: 'Agents',
    href: '/agents',
    Icon: (
      <svg
        width="30"
        height="15"
        viewBox="0 0 29 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="dark:fill-[#618098]"
      >
        <path
          d="M24.2803 8.875V6.375C24.2803 5 23.1553 3.875 21.7803 3.875H18.0303C18.0303 1.8 16.3553 0.125 14.2803 0.125C12.2053 0.125 10.5303 1.8 10.5303 3.875H6.78027C5.40527 3.875 4.28027 5 4.28027 6.375V8.875C2.20527 8.875 0.530273 10.55 0.530273 12.625C0.530273 14.7 2.20527 16.375 4.28027 16.375V21.375C4.28027 22.75 5.40527 23.875 6.78027 23.875H21.7803C23.1553 23.875 24.2803 22.75 24.2803 21.375V16.375C26.3553 16.375 28.0303 14.7 28.0303 12.625C28.0303 10.55 26.3553 8.875 24.2803 8.875ZM21.7803 21.375H6.78027V6.375H21.7803V21.375ZM10.5303 13.875C9.49277 13.875 8.65527 13.0375 8.65527 12C8.65527 10.9625 9.49277 10.125 10.5303 10.125C11.5678 10.125 12.4053 10.9625 12.4053 12C12.4053 13.0375 11.5678 13.875 10.5303 13.875ZM19.9053 12C19.9053 13.0375 19.0678 13.875 18.0303 13.875C16.9928 13.875 16.1553 13.0375 16.1553 12C16.1553 10.9625 16.9928 10.125 18.0303 10.125C19.0678 10.125 19.9053 10.9625 19.9053 12ZM9.28027 16.375H19.2803V18.875H9.28027V16.375Z"
          className="fill-[#618098] dark:fill-white"
        />
      </svg>
    ),
  },
]

function MagickMobileNav() {
  // track active tab using url pathname and set active tab state
  const [activeTab, setActiveTab] = useState('')
  const { asPath } = useRouter()
  useEffect(() => {
    // check for / , /explore, /agents,
    if (asPath === '/') {
      setActiveTab('/')
    } else if (asPath === '/explore') {
      setActiveTab('/explore')
    } else if (asPath === '/agents') {
      setActiveTab('/agents')
    }
  }, [asPath])

  return (
    <div className="lg:hidden fixed bottom-0 z-50 w-full h-16 bg-white dark:bg-[#101112]">
      <div className="flex flex-row justify-around items-center h-full w-full ">
        {links.map(link => (
          <Link
            key={link.name}
            href={link.href}
            className={`inline-flex flex-col items-center justify-center font-medium px-5 py-2  ${
              activeTab === link.href ? 'bg-[#EBF2F3] dark:bg-[#202222]' : ''
            }`}
          >
            {link.Icon}
            <span className="text-xs text-[#618098] dark:text-white">
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MagickMobileNav
