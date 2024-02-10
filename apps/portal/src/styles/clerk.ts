import { ClerkOptions, Theme, Variables } from '@clerk/types'
import { buttonVariants, formInputStyles } from '@magickml/portal-core-ui'
const variablesDark: Variables = {
  colorBackground: '#0b0d0e',
  colorPrimary: '#1bc5eb',
  colorTextOnPrimaryBackground: '#0b0d0e',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  colorText: '#fafdfe',
  colorDanger: '#f32121',
  colorInputBackground: '#0b0d0e',
  borderRadius: '0.5rem',
  fontFamilyButtons: 'Montserrat, sans-serif',
  colorInputText: '#fafdfe',
  colorSuccess: '#21f343',
  colorWarning: '#ffd600',
  colorTextSecondary: '#565c62',
}

const commonText = 'text-ds-black dark:text-ds-white font-montserrat '

const commmonAltText =
  'text-ds-primary-p dark:text-ds-primary-m font-montserrat font-semibold'

const authTheme: Theme = {
  elements: {
    headerTitle:
      'text-center text-ds-black dark:text-ds-white text-3xl font-montAlt font-bold uppercase',
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
    selectOptionsContainer__role: "text-red-500 bg-red-500"
  },
}

export const clerkAppearance: ClerkOptions['appearance'] = {
  //   variables: variablesDark,
  signIn: authTheme,
  signUp: authTheme,
}
