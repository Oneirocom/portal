import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export const PageProgress = () => {
  const router = useRouter()
  const [progress, setProgress] = useState<number>(0)
  const [isRouting, setIsRouting] = useState<boolean>(false)

  const simulateProgress = () => {
    const maxProgressWhileLoading = 95
    if (isRouting && progress < maxProgressWhileLoading) {
      const increment =
        progress > 85 ? 0.5 : progress > 70 ? 1 : progress > 50 ? 2 : 5
      setProgress(progress + increment)
    } else if (!isRouting && progress < 100) {
      setProgress(progress + 5)
    }
  }

  useEffect(() => {
    const intervalId = setInterval(simulateProgress, isRouting ? 100 : 20)
    return () => clearInterval(intervalId)
  }, [isRouting, progress])

  useEffect(() => {
    const handleStart = () => {
      setProgress(0)
      setIsRouting(true)
    }
    const handleComplete = () => setIsRouting(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  return (
    <div
      className={clsx(
        'absolute bottom-0 left-0 z-50 w-full transition-[width] duration-500 ease-in-out',
        { hidden: progress === 0 && !isRouting }
      )}
    >
      <div
        className={clsx('h-[1px] transition-colors ease-in-out duration-75', {
          'bg-secondary-highlight/60': progress <= 33,
          'bg-secondary-highlight/80': progress > 33 && progress <= 66,
          'bg-secondary-highlight': progress > 66 && progress <= 99,
          'bg-ds-neutral': progress > 99,
        })}
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
