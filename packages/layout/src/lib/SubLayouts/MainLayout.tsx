import React, { useEffect, useState } from 'react'
import Image from "next/legacy/image"
import { PortalHeader } from '../Header/PortalHeader'
import MagickMobileNav from '../MobileNav/MagickMobileNav'
import clsx from 'clsx'
import MagickFooter from '../Footer/MagickFooter'

export enum BackgroundType {
  Image = 'image',
  Video = 'video',
}

export enum BackgroundKey {
  SIGN_IN = 'sign-in',
  SIGN_UP = 'sign-up',
  VERIFY_EMAIL = 'verify-email',
  FORGOT_PASSWORD = 'forgot-password',
  RESET_PASSWORD = 'reset-password',
  MAGICK_LINK = 'magick-link',
}

export type MainLayoutBG = {
  type: BackgroundType
  path: string
  fallbackImagePath?: string
}

export const BG: Record<string, MainLayoutBG> = {
  [BackgroundKey.SIGN_IN]: {
    type: BackgroundType.Video,
    path: '/videos/sign-in.webm',
    fallbackImagePath: '/images/banners/default.png',
  },
  [BackgroundKey.SIGN_UP]: {
    type: BackgroundType.Video,
    path: '/videos/sign-up.webm',
    fallbackImagePath: '/images/banners/default.png',
  },
  [BackgroundKey.VERIFY_EMAIL]: {
    type: BackgroundType.Video,
    path: '/videos/verify-email.webm',
    fallbackImagePath: '/images/banners/default.png',
  },
  [BackgroundKey.FORGOT_PASSWORD]: {
    type: BackgroundType.Video,
    path: '/videos/forgot-password.webm',
    fallbackImagePath: '/images/banners/default.png',
  },
  [BackgroundKey.RESET_PASSWORD]: {
    type: BackgroundType.Video,
    path: '/videos/reset-password.webm',
    fallbackImagePath: '/images/banners/default.png',
  },
  [BackgroundKey.MAGICK_LINK]: {
    type: BackgroundType.Video,
    path: '/videos/magick-link.webm',
    fallbackImagePath: '/images/banners/default.png',
  },
}

type Props = {
  children: React.ReactNode
  classNames?: string
  bg?: MainLayoutBG
}

export const MainLayout: React.FC<Props> = ({
  children,
  classNames = 'pt-4 mx-2 md:mx-8 lg:mx-12',
  bg,
}) => {
  const [isVideoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    if (bg?.type === 'video') {
      const videoElement = document.getElementById(
        'background-video'
      ) as HTMLVideoElement
      if (videoElement) {
        videoElement.onloadeddata = () => {
          setVideoLoaded(true)
        }
      }
    }
  }, [bg])

  return (
    <>
      <div className="relative flex flex-col w-full h-screen">
        {bg && (
          <div className="absolute top-0 left-0 w-full h-full">
            {bg.type === 'image' && (
              <Image
                src={bg.path}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                priority
              />
            )}
            {bg.type === 'video' && (
              <>
                {!isVideoLoaded && bg.fallbackImagePath && (
                  <Image
                    src={bg.fallbackImagePath}
                    alt="Fallback Background Image"
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                )}
                <video
                  id="background-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ display: isVideoLoaded ? 'block' : 'none' }}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                >
                  <source src={bg.path} type="video/mp4" />
                </video>
              </>
            )}
            {/* overlay to dark the bg a bit */}
            <div className="absolute top-0 left-0 w-full h-full object-cover bg-black/10" />
          </div>
        )}
        <PortalHeader />
        <div
          className={clsx(
            'flex flex-col z-10 h-full overflow-y-auto overflow-x-hidden pb-20',
            classNames
          )}
        >
          {children}
        </div>

        <MagickMobileNav />
      </div>
      <MagickFooter />
    </>
  )
}
