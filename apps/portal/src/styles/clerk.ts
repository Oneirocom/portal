import { type ClerkOptions, type Theme } from '@clerk/types'
import { buttonVariants, formInputStyles } from '@magickml/portal-core-ui'

const secondaryButton = buttonVariants({
  variant: 'basic',
  size: 'md',
  className: 'shadow-none font-montAlt',
})
const commonText = 'text-ds-black dark:text-ds-white font-montserrat '

const commmonAltText =
  'text-ds-primary-p dark:text-ds-primary-m font-montserrat font-semibold'

const headerTitle =
  'text-ds-black dark:text-ds-white text-3xl font-montAlt font-bold uppercase'

const authTheme: Theme = {
  elements: {
    headerTitle: 'text-center' + headerTitle,
    headerSubtitle: 'hidden',
    card: 'bg-ds-card rounded',
    formButtonPrimary:
      // 'bg-ds-primary text-ds-black rounded-lg font-montserrat font-bold uppercase',
      buttonVariants({
        variant: 'portal-primary',
        size: 'sm',
        className: 'font-bold hover:bg-ds-primary',
      }),

    socialButtonsBlockButton: buttonVariants({
      variant: 'basic',
      size: 'sm',
      className: 'font-bold',
    }),
    formFieldInput: formInputStyles,
    formFieldLabel: commonText + 'font-semibold',
    formFieldAction: commmonAltText,
    footerActionText: commonText,
    footerActionLink: commmonAltText,
    selectButton: formInputStyles,
    selectOptionsContainer: 'bg-ds-card rounded text-white',
    selectOptionsContainer__role: 'text-red-500 bg-red-500',
    logoBox: 'hidden',
    profileSectionContent__activeDevices: "h-full"
  },
}

export const clerkAppearance: ClerkOptions['appearance'] = {
  signIn: authTheme,
  signUp: authTheme,
  createOrganization: authTheme,
  userProfile: {
    elements: {
      // ...authTheme.elements,
      rootBox: 'w-full h-full',
      card: 'w-full bg-ds-background shadow-none !p-0 !m-0',
      headerTitle,
      headerSubtitle:
        'text-ds-primary-p dark:text-ds-primary-m font-montserrat font-semibold',
      accordionTriggerButton: "text-ds-black dark:text-ds-white shadow-none  font-montserrat font-semibold",
      profileSectionPrimaryButton: "bg-ds-neutral text-ds-white font-montserrat font-semibold",
      navbarButton: "bg-ds-neutral active:bg-ds-primary data-[active=true]:bg-ds-primary mt-2 text-ds-black font-montserrat font-semibold shadow-none",
      navbarButtons__active: "bg-ds-primary",
        badge: "bg-ds-primary text-ds-black font-montserrat font-medium text-xs",
        profileSectionTitleText: commonText,
      profileSectionContent: commonText,
      // profileSectionContent__activeDevices: "h-40",
      // activeDeviceListItem: "focus:outline-none",
      // activeDeviceListItem__current: "outline outline-ds-primary",
      // accordionTriggerButton: "focus:outline-none focus:ring-0 focus:border-0",
    },
  
  },
}
