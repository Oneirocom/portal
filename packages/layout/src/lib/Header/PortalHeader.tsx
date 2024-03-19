import { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import clsx from 'clsx'
import { Route, getNavigationForRole } from '../navigation'
import { ANONYMOUS, Roles } from '@magickml/portal-config'
import { InfoMenu, UserMenu } from './menus'
import { Button } from '@magickml/client-ui'
import { PageProgress } from './PageProgress'
import { useRouter } from 'next/router'

export const PortalHeader = () => {
  const router = useRouter()
  const { user, isSignedIn } = useUser()
  const [navigation, setNavigation] = useState<Route[]>(
    getNavigationForRole(ANONYMOUS)
  )

  useEffect(() => {
    if (isSignedIn) {
      const metadata = user.publicMetadata
      switch (metadata?.role) {
        case Roles.ADMIN:
          setNavigation(getNavigationForRole(Roles.ADMIN))
          break
        case Roles.TESTER:
          setNavigation(getNavigationForRole(Roles.TESTER))
          break
        default:
          setNavigation(getNavigationForRole(Roles.USER))
          break
      }
    }
  }, [isSignedIn, user])

  return (
    <div className="bg-ds-header shrink-0 h-12 lg:h-20 relative w-full inline-flex justify-start items-center text-left text-ds-black dark:text-ds-white lg:px-10">
      {/* LOGO */}
      <Link
        href="/"
        className="inline-flex items-center justify-center gap-x-1 lg:gap-x-2"
      >
        <div className="flex-col items-start self-stretch justify-center py-2 pl-2 lg:py-5 lg:pl-5">
          <svg
            width="126"
            height="23"
            viewBox="0 0 188 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative w-[126px] h-[23px] lg:w-[187px] lg:h-[33px] overflow-hidden flex-shrink-0 object-cover"
          >
            <g id="Wordmark - group">
              <path
                id="Vector"
                d="M187.057 0.0273438C187.057 0.0273438 187.057 2.06671 187.057 3.12204V3.3217C187.057 8.47003 184.947 12.8055 180.743 16.3565C180.672 16.3993 180.616 16.4564 180.546 16.4991C181.347 17.1124 182.135 17.8112 182.88 18.5956C185.665 21.8329 187.057 25.5551 187.057 29.7479C187.057 30.8317 187.057 32.8996 187.057 32.8996H182.388C181.404 32.8996 180.602 32.101 180.602 31.1027C180.602 30.5465 180.602 29.9761 180.602 29.5197C180.602 26.1968 179.041 23.4301 175.919 21.1768C174.19 20.2356 172.488 19.7507 170.843 19.7507H166.666V32.8996H160.212V1.83853C160.212 0.840238 161.013 0.0273438 161.998 0.0273438H164.88C165.865 0.0273438 166.666 0.840238 166.666 1.83853V13.1763H170.885C174.373 13.1763 177.213 11.4792 179.393 8.07071C180.208 6.47345 180.602 4.87618 180.602 3.26466C180.602 3.09352 180.602 2.52307 180.602 1.90983C180.602 0.925805 181.39 0.112912 182.36 0.0986502L187.057 0.0273438Z"
                fill="currentColor"
              />
              <path
                id="Vector_2"
                d="M133.17 4.36279C129.626 7.84255 127.854 11.8928 127.854 16.5277C127.854 20.15 128.965 23.5015 131.173 26.5819C134.66 30.846 138.949 32.9852 144.026 32.9852H144.223C147.893 32.9852 151.254 31.7587 154.305 29.3058C156.077 27.6943 157.118 26.5534 157.441 25.8831L153.616 22.988C152.885 22.4461 151.873 22.5317 151.254 23.202C149.257 25.3554 146.866 26.4393 144.096 26.4393C142.507 26.4393 140.932 26.0257 139.357 25.1985C135.996 22.988 134.323 20.1073 134.323 16.5705C134.323 14.8876 134.787 13.162 135.743 11.3936C137.965 8.2276 140.693 6.6446 143.97 6.6446C146.866 6.6446 149.257 7.69993 151.169 9.81061C151.802 10.5094 152.871 10.6092 153.602 9.996C155.107 8.75527 157.287 6.92982 157.287 6.92982C153.743 2.38047 149.369 0.0986633 144.18 0.0986633C140.032 0.112925 136.376 1.52479 133.17 4.36279Z"
                fill="currentColor"
              />
              <path
                id="Vector_3"
                d="M125.084 1.9241V32.9852H118.629V1.9241C118.629 0.925809 119.431 0.112915 120.415 0.112915H123.298C124.282 0.112915 125.084 0.925809 125.084 1.9241Z"
                fill="currentColor"
              />
              <path
                id="Vector_4"
                d="M113.032 18.3531V32.9852H106.578V31.4307C104.454 32.4576 102.204 32.9852 99.8136 32.9852H99.6168C94.5402 32.9852 90.2512 30.846 86.7637 26.5819C84.5419 23.4872 83.445 20.1358 83.445 16.5277C83.445 11.907 85.2169 7.84256 88.7606 4.3628C91.9528 1.53907 95.623 0.127197 99.7574 0.127197C104.946 0.127197 109.306 2.39474 112.864 6.9441C112.864 6.9441 110.684 8.7838 109.179 10.0103C108.448 10.6092 107.379 10.5237 106.746 9.82488C104.834 7.71421 102.429 6.65887 99.5464 6.65887C96.284 6.65887 93.5418 8.24187 91.3199 11.4079C90.3778 13.1763 89.8996 14.8876 89.8996 16.5847C89.8996 20.1215 91.5871 23.0023 94.948 25.2128C96.509 26.04 98.098 26.4535 99.6871 26.4535C102.345 26.4535 104.637 25.4695 106.578 23.4872V16.5562H111.246C112.245 16.5419 113.032 17.3548 113.032 18.3531Z"
                fill="currentColor"
              />
              <g id="logo mark - group">
                <g id="Group">
                  <path
                    id="Vector_5"
                    d="M66.2466 25.0844C68.4135 25.0844 70.17 23.303 70.17 21.1055C70.17 18.908 68.4135 17.1266 66.2466 17.1266C64.0798 17.1266 62.3232 18.908 62.3232 21.1055C62.3232 23.303 64.0798 25.0844 66.2466 25.0844Z"
                    fill="currentColor"
                  />
                  <path
                    id="Vector_6"
                    d="M69.5091 32.9852H63.0545V28.6497C63.0545 28.065 63.3779 27.5516 63.8842 27.2236C64.2638 26.9812 64.7279 26.8386 65.2482 26.8386H67.3154C67.9201 26.8386 68.4685 27.0382 68.8622 27.3662C69.256 27.6942 69.5091 28.1506 69.5091 28.6497V32.9852Z"
                    fill="currentColor"
                  />
                  <path
                    id="Vector_7"
                    d="M82.784 32.9852H79.5356L72.631 20.8631L66.2466 9.6537L60.4811 19.7792L52.9717 32.9709H49.7655C48.303 32.9709 47.3749 31.3594 48.1202 30.0759L64.6295 1.08266C65.3607 -0.200854 67.2029 -0.200854 67.9341 1.08266L84.4293 30.0759C85.1746 31.3737 84.2465 32.9852 82.784 32.9852Z"
                    fill="currentColor"
                  />
                </g>
              </g>
              <path
                id="M Vector"
                d="M42.1296 4.3628C41.1312 3.33599 40.0765 2.49457 38.9656 1.83855C38.9375 1.82429 38.9093 1.79577 38.8531 1.78151C36.9547 0.683388 34.8875 0.127197 32.6656 0.127197C32.4266 0.127197 32.1734 0.127198 31.9344 0.141459C31.6531 0.15572 31.3578 0.184243 31.0766 0.212765C30.8938 0.227027 30.7109 0.255549 30.5281 0.284072C30.3031 0.326856 30.0781 0.355378 29.8531 0.398162C29.6281 0.440946 29.4031 0.497991 29.1922 0.555036C28.9672 0.612081 28.7563 0.669127 28.5313 0.754694C26.3797 1.4535 24.4672 2.73701 22.8079 4.60524C22.611 4.40559 22.4282 4.19167 22.2173 4.00627C22.0485 3.83513 21.8657 3.664 21.6969 3.50712C21.5141 3.35025 21.3454 3.19338 21.1626 3.05076C20.9798 2.90815 20.811 2.76554 20.6282 2.62292C20.4735 2.50883 20.3329 2.409 20.1782 2.30918C19.8267 2.05247 19.461 1.83855 19.0954 1.63889C18.8704 1.5248 18.6454 1.39645 18.4345 1.29662C18.4063 1.28236 18.3782 1.25384 18.336 1.25384C18.1392 1.16827 17.9423 1.0827 17.7454 0.997137C17.3235 0.826001 16.9017 0.697649 16.4517 0.569298C16.2267 0.512253 16.0157 0.455207 15.7907 0.412423C15.1157 0.26981 14.4126 0.184243 13.6954 0.141459C13.4986 0.127198 13.3158 0.127197 13.1048 0.127197H12.9642C10.7002 0.127197 8.60485 0.697649 6.67831 1.83855C5.56738 2.49457 4.5127 3.33599 3.51427 4.3628C1.26428 6.9441 0.13929 9.96749 0.13929 13.433V31.174C0.13929 32.1723 0.940847 32.9852 1.92521 32.9852H6.59393V13.1192C6.59393 13.0765 6.59393 13.0051 6.60799 12.9624C6.59393 12.9053 6.60799 12.8483 6.62206 12.777C6.62206 12.6344 6.63612 12.4775 6.66424 12.3206C6.67831 12.178 6.70643 12.0354 6.73456 11.8785C6.77674 11.6788 6.81893 11.4934 6.87518 11.3081C6.91737 11.1512 6.95955 11.0086 7.02987 10.8374C7.05799 10.7233 7.08612 10.595 7.14237 10.4809C7.22674 10.3383 7.32518 10.1814 7.42361 10.0388C7.42361 10.0245 7.43768 10.0103 7.43768 10.0103C7.78924 9.38278 8.26736 8.79806 8.85798 8.29892C9.51891 7.68568 10.2361 7.22932 11.0236 6.98688C11.0517 6.95836 11.0798 6.9441 11.122 6.9441C11.1642 6.92983 11.1923 6.92984 11.2205 6.91557C11.2486 6.90131 11.2626 6.90131 11.2626 6.90131C11.7267 6.7587 12.2048 6.68739 12.7111 6.67313C12.7955 6.65887 12.8939 6.65887 12.9783 6.65887H13.1189C14.0189 6.65887 14.8626 6.81574 15.622 7.14375C15.6923 7.17228 15.7626 7.18654 15.8329 7.21506C15.8892 7.25784 15.9454 7.28637 16.0157 7.32915C16.6767 7.67142 17.2814 8.14205 17.8017 8.74102C17.872 8.81233 17.9423 8.89789 17.9985 8.9692C18.4345 9.46835 18.786 9.98175 19.0392 10.5379C19.0392 10.5379 19.0392 10.5522 19.0532 10.5522C19.0813 10.6093 19.1095 10.6663 19.1517 10.7519C19.1798 10.7946 19.1938 10.8517 19.1938 10.8945C19.1938 10.9087 19.1938 10.923 19.2079 10.9373C19.2642 11.1084 19.3204 11.2938 19.3626 11.4507C19.4048 11.6218 19.447 11.8072 19.4751 11.9641C19.5876 12.5773 19.6579 13.2761 19.6579 14.0605V32.9567H26.0282V14.0747C26.0282 13.3046 26.0844 12.6058 26.211 11.9783C26.225 11.8357 26.2532 11.6931 26.2954 11.5362C26.3375 11.3223 26.4079 11.1227 26.4922 10.9373C26.4922 10.8802 26.5204 10.8232 26.5344 10.7519C26.5766 10.6806 26.6047 10.6235 26.6469 10.5522C26.6469 10.5379 26.6469 10.5379 26.6469 10.5379C26.8438 10.1101 27.0828 9.71079 27.3922 9.33999C27.4625 9.24017 27.5469 9.14034 27.6172 9.05477C28.236 8.28466 28.9391 7.68568 29.7406 7.28637C29.7828 7.24358 29.825 7.22932 29.8672 7.2008C29.9235 7.17228 29.9797 7.15802 30.036 7.15802C30.8094 6.81574 31.6531 6.64461 32.5812 6.64461H32.6656C32.7641 6.64461 32.8625 6.65887 32.9891 6.65887C33.4953 6.67313 33.9734 6.7587 34.4234 6.88705C34.4375 6.88705 34.4515 6.88705 34.4656 6.90131C34.5078 6.90131 34.5359 6.91557 34.5781 6.92983C34.6203 6.9441 34.6484 6.97262 34.6906 6.97262C35.464 7.24358 36.1812 7.67142 36.8422 8.28466C37.475 8.81233 37.9812 9.43982 38.3328 10.1244C38.4031 10.2385 38.4593 10.3383 38.5296 10.4524C38.5718 10.5665 38.6 10.6663 38.6281 10.7661C38.6421 10.7804 38.6421 10.7946 38.6562 10.8089C38.839 11.2653 38.9515 11.7644 39.0218 12.2921C39.0218 12.3206 39.0218 12.3349 39.0359 12.3491C39.064 12.4775 39.0781 12.6201 39.0781 12.7484C39.0781 12.8055 39.0921 12.8625 39.0921 12.9338C39.1062 12.9766 39.1062 13.0479 39.1062 13.0907V32.9424H43.7749C44.7593 32.9424 45.5608 32.1295 45.5608 31.1313V13.433C45.5046 9.96749 44.3655 6.9441 42.1296 4.3628Z"
                fill="currentColor"
              />
            </g>
          </svg>
        </div>
        <span className="mt-3 text-sm font-semibold lg:mt-5 lg:text-xl font-montAlt text-ds-primary">
          BETA
        </span>
      </Link>
      {/* LINKS */}
      <div className="items-center justify-start hidden pl-20 lg:inline-flex gap-x-10">
        {/* TEMPORARY REMOVE NAV */}
        {false && navigation &&
          navigation.length > 0 &&
          navigation.map(
            (item: Route) =>
              item.enabled && (
                <Link
                  href={item.href}
                  key={item.href}
                  className={clsx(
                    'inline-flex items-center group justify-start pb-0.5 border-b-[3px] color-transition font-montserrat uppercase',
                    item.href === router.asPath
                      ? 'dark:text-[#72dbf3] text-secondary-highlight dark:border-b-[#72dbf3] border-b-secondary-highlight'
                      : 'text-black dark:text-white border-b-transparent'
                  )}
                  id={`header-link-${item.name}`}
                >
                  <item.Iicon
                    className={clsx(
                      'relative w-[32px] h-[32px] overflow-hidden flex-shrink-0 object-cover mx-2 color-transition',
                      item.href === router.asPath
                        ? 'dark:text-[#72dbf3] text-secondary-highlight'
                        : 'text-black dark:text-white hover:dark:text-[#72dbf3] hover:text-secondary-highlight '
                    )}
                    width={32}
                    height={32}
                  />
                  <span
                    className={clsx(
                      'text-base font-medium transition-all duration-75 ease-in-out mx-2 opacity-100 w-auto'
                    )}
                  >
                    {item.name}
                  </span>
                </Link>
              )
          )}
      </div>

      <div className="grow" />

      {/* STUFF */}
      <div className="relative flex items-center justify-end pr-4 gap-x-2 lg:gap-x-3">
        <Button
          variant="portal-primary"
          size="sm"
          onClick={() => {
            router.push(isSignedIn ? '/create' : '/sign-in')
          }}
          className="hidden lg:flex"
        >
          {isSignedIn ? 'Create Agent' : 'Sign in'}
        </Button>

        <InfoMenu />
        <UserMenu />
      </div>

      {/* PROGRESS BAR */}
      <PageProgress />
    </div>
  )
}
