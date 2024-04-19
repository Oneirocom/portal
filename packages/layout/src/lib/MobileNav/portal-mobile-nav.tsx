import React from 'react'
import { Button, cn } from '@magickml/client-ui'
import { SmartToyOutlined } from '@mui/icons-material'
import { useRouter } from 'next/router'

type Props = {}

export const PortalMobileNav: React.FC<Props> = () => {
  const { route, push } = useRouter()

  const onAgentClick = () => {
    push('/')
  }

  const onTemplatesClick = () => {
    push('/create')
  }

  return (
    <div className="sticky lg:hidden bottom-0 left-0 z-50 w-full h-20 bg-ds-card border-t border-ds-neutral">
      <div className="flex justify-evenly items-center h-full w-full   mx-auto font-medium">
        <Button
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
          <svg
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            width="24"
          >
            <g id="Tarot-Cards1">
              <g id="Vector">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.307 6.42381C20.4678 5.67614 22.0149 6.01102 22.7625 7.17178L27.8832 15.1216C28.6308 16.2823 28.2959 17.8294 27.1352 18.5771L16.1304 25.6655L14.7766 23.5637L25.7814 16.4754L20.6608 8.52555L19.8602 9.04124L18.5064 6.93951L19.307 6.42381Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.6062 15.2367C23.1109 15.314 23.7051 14.9313 23.7051 14.9313C23.7051 14.9313 23.1007 15.3206 22.9667 15.7964C22.8328 16.2723 23.1954 16.8424 23.1954 16.8424C23.1954 16.8424 22.7955 16.2869 22.3186 16.2139C21.8417 16.1409 21.2087 16.5393 21.2087 16.5393C21.2087 16.5393 21.8197 16.1457 21.9581 15.6542C22.0964 15.1627 21.7709 14.6307 21.7709 14.6307C21.7709 14.6307 22.1015 15.1595 22.6062 15.2367Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.122 4.94547C11.7349 3.70825 13.2347 3.20215 14.4719 3.81506L22.5318 7.80788C23.769 8.42079 24.2751 9.92062 23.6622 11.1578L16.5093 25.5966L14.2691 24.4868L21.422 10.0481L13.3622 6.05524L12.7874 7.21546L10.5472 6.10569L11.122 4.94547Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.4347 10.7076C17.9324 10.5224 18.2499 9.88153 18.2499 9.88153C18.2499 9.88153 17.927 10.5334 18.0763 11.0255C18.2257 11.5175 18.8751 11.8436 18.8751 11.8436C18.8751 11.8436 18.2004 11.5494 17.7301 11.7244C17.2597 11.8994 16.9162 12.5738 16.9162 12.5738C16.9162 12.5738 17.2427 11.9148 17.0884 11.4065C16.9342 10.8983 16.3397 10.5875 16.3397 10.5875C16.3397 10.5875 16.9369 10.8928 17.4347 10.7076Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.2031 7.76172L4.6076 7.74164L4.57227 24.6349L14.1678 24.6549L14.2031 7.76172ZM4.61283 5.24165C3.23212 5.23876 2.1105 6.35571 2.10761 7.73642L2.07227 24.6296C2.06938 26.0103 3.18633 27.132 4.56704 27.1349L14.1625 27.1549C15.5432 27.1578 16.6649 26.0409 16.6677 24.6602L16.7031 7.76695C16.706 6.38624 15.589 5.26461 14.2083 5.26172L4.61283 5.24165Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.07579 15.1568C9.08234 14.1545 9.08622 12.298 9.08622 12.298C9.08622 12.298 9.08227 14.1864 10.0528 15.161C11.0233 16.1356 13.0296 16.1497 13.0296 16.1497C13.0296 16.1497 10.9997 16.2387 10.0486 17.1858C9.09746 18.1329 9.06991 20.0973 9.06991 20.0973C9.06991 20.0973 9.0739 18.1882 8.07155 17.1817C7.0692 16.1751 5.21764 16.1334 5.21764 16.1334C5.21764 16.1334 7.06924 16.1592 8.07579 15.1568Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.0859 10.1206C11.4691 9.73892 11.4706 9.0321 11.4706 9.0321C11.4706 9.0321 11.4691 9.75106 11.8386 10.1221C12.2081 10.4932 12.972 10.4986 12.972 10.4986C12.972 10.4986 12.1991 10.5324 11.837 10.8931C11.4749 11.2537 11.4644 12.0016 11.4644 12.0016C11.4644 12.0016 11.4659 11.2747 11.0843 10.8915C10.7026 10.5083 9.99767 10.4924 9.99767 10.4924C9.99767 10.4924 10.7026 10.5022 11.0859 10.1206Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.79057 21.5092C7.1738 21.1276 7.17527 20.4208 7.17527 20.4208C7.17527 20.4208 7.17377 21.1397 7.54329 21.5108C7.9128 21.8819 8.67667 21.8872 8.67667 21.8872C8.67667 21.8872 7.90379 21.9211 7.54167 22.2817C7.17955 22.6423 7.16906 23.3902 7.16906 23.3902C7.16906 23.3902 7.17058 22.6634 6.78895 22.2801C6.40733 21.8969 5.70237 21.881 5.70237 21.881C5.70237 21.881 6.40734 21.8909 6.79057 21.5092Z"
                  fill="currentColor"
                />
              </g>
            </g>
          </svg>

          <span className="text-xs font-normal">Templates</span>
        </Button>
      </div>
    </div>
  )
}
