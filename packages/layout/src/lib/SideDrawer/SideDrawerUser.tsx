import Image from 'next/image'
import { FunctionComponent } from 'react'
import { api } from '@magickml/portal-api-client'

/**
 * Props for the SideDrawerUser component.
 */
type Props = {}

/**
 * The SideDrawerUser component represents a section in the side drawer that displays
 * information about the currently logged-in user, such as their name and avatar.
 *
 * @returns {JSX.Element} The rendered JSX element.
 */
const SideDrawerUser: FunctionComponent<Props> = () => {
  const { data: user, isLoading: isUserLoading } =
    api.users.getCurrentUser.useQuery()

  return (
    <div className="w-[247px] overflow-hidden flex flex-row py-1 pl-[20px] pr-[15px] box-border items-center justify-between text-xl ">
      <div className="flex-1 rounded-lg flex flex-row py-2.5 px-0 justify-start gap-2.5 max-w-full items-center">
        {isUserLoading ? (
          <div className="mx-auto loading loading-spinner loading-lg" />
        ) : (
          <>
            <Image
              className="relative w-[24px] h-[24px] rounded-full overflow-hidden flex-shrink-0 object-cover ring-1 ring-white color-transition dark:ring-secondary-main"
              alt=""
              src={
                user?.image
                  ? `${process.env.NEXT_PUBLIC_BUCKET_PREFIX}${user?.image}`
                  : '/images/magick-icon.png'
              }
              width={24}
              height={24}
            />
            <p className="ml-3 overflow-hidden text-ellipsis text-md font-montserrat">
              {user && (user.name ? `${user.name}` : user.email)}
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default SideDrawerUser
