import Image from 'next/image'
import { FunctionComponent } from 'react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { OtherEventTypes, trackEvent } from '@magickml/portal-utils-shared'

/**
 * SideDrawerLightMode is a button component that allows users to toggle
 * between light and dark themes in the application. It displays a theme-specific
 * icon to indicate the current theme and provides a visual cue for users to
 * change themes.
 *
 * @returns {JSX.Element} Rendered theme toggle button.
 */
const SideDrawerLightMode: FunctionComponent = () => {
  const { theme, setTheme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false)

  // Ensure that component has mounted for client-side effects.
  useEffect(() => setHasMounted(true), [])

  // Listen for system-wide theme preferences and adjust theme accordingly.
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')
    if (prefersDarkMode?.matches && theme !== 'light') setTheme('dark')
    if (!prefersDarkMode?.matches && theme !== 'dark') setTheme('light')
  }, [theme, setTheme])

  // Avoid rendering until the component has mounted to prevent hydration errors.
  if (!hasMounted) return null

  /**
   * Handles the action of switching between light and dark themes.
   */
  const handleThemeSwitch = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)

    const eventType =
      newTheme === 'dark'
        ? OtherEventTypes.DARK_MODE_TRIGGERED
        : OtherEventTypes.LIGHT_MODE_TRIGGERED

    trackEvent(eventType)

    toast.success('Theme changed!')
  }

  return (
    <button
      id="theme-switcher"
      onClick={handleThemeSwitch}
      className="w-[247px] h-[27px] flex flex-row py-1.5 pr-2.5 pl-5 box-border items-center justify-start gap-1.5 text-sm color-transition text-white dark:text-[#7d7d7d]"
    >
      <Image
        className="w-[15px] h-[15px] overflow-hidden flex-shrink-0 object-cover"
        alt={theme === 'dark' ? 'Light Mode Icon' : 'Dark Mode Icon'}
        src={
          theme === 'dark'
            ? '/images/icons/light.svg'
            : '/images/icons/dark.svg'
        }
        width={15}
        height={15}
      />
      <div className="font-montserrat">
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </div>
    </button>
  )
}

export default SideDrawerLightMode
