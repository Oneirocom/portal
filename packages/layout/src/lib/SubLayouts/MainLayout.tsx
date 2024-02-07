import MagickHeader from '../Header/MagickHeader'
import MagickMobileNav from '../MobileNav/MagickMobileNav'
import clsx from 'clsx'

type Props = {
  isPublic?: boolean
  children: React.ReactNode
  title?: string
  centerChild?: boolean
  classNames?: string
}

export const MainLayout: React.FC<Props> = ({
  children,
  centerChild = false,
  classNames = '',
}) => {
  return (
    <div className="relative flex flex-col w-full h-screen pb-10 overflow-y-auto ">
      <MagickHeader />
      <div
        // className={`flex flex-col pt-4 mx-2 md:mx-8 lg:mx-12 ${
        //   centerChild ? "md:m-auto" : ""
        // }`}
        className={clsx(
          'flex flex-col pt-4 mx-2 md:mx-8 lg:mx-12',
          centerChild && 'md:m-auto',
          classNames
        )}
      >
        {children}
      </div>
      <MagickMobileNav />
    </div>
  )
}
