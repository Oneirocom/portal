const { createGlobPatternsForDependencies } = require('@nx/react/tailwind')
const { join } = require('path')
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')
const svgToDataUri = require('mini-svg-data-uri')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // MAGICK COLORS

        // used for project/agent cards
        'card-main': '#262730',
        // sidebar background
        'sidebar-main': '#18181D',
        'secondary-light': '#BBFFFF',
        // "secondary-highlight": "#40d3d4",
        'secondary-main': '#26D5D6',
        'secondary-dark': '#1C374A',
        'btn-gradient':
          'linear-gradient(284.97deg, #99FFF9 8.09%, #1BC5EB 141.88%)',
        'secondary-gradient':
          'linear-gradient(90deg, #BBFFFF 0%, #26D5D6 100%)',

        'secondary-highlight': 'rgb(13 168 207)',

        'primary-darker': '#390F3F',
        'primary-dark': '#690A6D',
        // 'primary-main': '#1BC5EB', // old purple
        'primary-main': '#9D12A4',
        'primary-light': '#E586EA',
        'primary-lighter': '#FFEEFC',
        'primary-gradient': 'linear-gradient(90deg, #FFFFFF 0%, #FFEEFC 100%)',

        'gray-white': '#FFFFFF',
        gray: '#454545',
        'gray-neutral': '#E6E6E6',
        'gray-base': '#3A3841',
        'gray-dark': '#25242F',
        'gray-darker': '#1C1C1C',
        'gray-darkest': '#060412',
        'light-Blue-Grey': '#4D4D4D',

        'main-lightest': '#8882AF',
        'main-lighter': '#615C81',
        'main-light': '#554C80',
        'main-primary': '#463E77',
        'main-dark': '#342E58',
        'main-darker': '#292445',
        'main-gradient': 'linear-gradient(90deg, #463E77 0%, #201D37 100%)',
        'main-darkest': '#101112',
        'main-shark': '#262730',
        'light-blue': '#BADDE4',
        'light-grey': '#4D4D4D',

        // THEME COLORS
        'th-s-light': 'var(--th-s-light)',
        'th-s-main': 'var(--th-s-main)',
        'th-s-dark': 'var(--th-s-dark)',
        'th-s-gradient': 'var(--th-s-gradient)',

        'th-p-darker': 'var(--th-p-darker)',
        'th-p-dark': 'var(--th-p-dark)',
        'th-p-main': 'var(--th-p-main)',
        'th-p-light': 'var(--th-p-light)',
        'th-p-lighter': 'var(--th-p-lighter)',
        'th-p-gradient': 'var(--th-p-gradient)',

        'th-g-white': 'var(--th-g-white)',
        'th-g-neutral': 'var(--th-g-neutral)',
        'th-g-base': 'var(--th-g-base)',
        'th-g-dark': 'var(--th-g-dark)',
        'th-g-darker': 'var(--th-g-darker)',
        'th-g-darkest': 'var(--th-g-darkest)',

        'th-m-lightest': 'var(--th-m-lightest)',
        'th-m-lighter': 'var(--th-m-lighter)',
        'th-m-light': 'var(--th-m-light)',
        'th-m-primary': 'var(--th-m-primary)',
        'th-m-dark': 'var(--th-m-dark)',
        'th-m-darker': 'var(--th-m-darker)',
        'th-m-darkest': 'var(--th-m-darkest)',
        'th-m-gradient': 'var(--th-m-gradient)',

        // design system colors
        // TODO: linked to the shad colors
        // TODO: move this to main repo
        'ds-primary': 'var(--ds-primary)',
        'ds-primary-m': 'var(--ds-primary-m)',
        'ds-primary-p': 'var(--ds-primary-p)',
        'ds-secondary': 'var(--ds-secondary)',
        'ds-secondary-m': 'var(--ds-secondary-m)',
        'ds-secondary-p': 'var(--ds-secondary-p)',
        'ds-theme-1': 'var(--ds-theme-1)',
        'ds-theme-2': 'var(--ds-theme-2)',
        'ds-theme-3': 'var(--ds-theme-3)',
        'ds-alert': 'var(--ds-alert)',
        'ds-error': 'var(--ds-error)',
        'ds-warning': 'var(--ds-warning)',
        'ds-white': 'var(--ds-white)',
        'ds-black': 'var(--ds-black)',

        // these are used in figma but not in the design system
        'ds-card': 'var(--ds-card)',
        'ds-card-alt': 'var(--ds-card-alt)',
        'ds-header': 'var(--ds-header)',
        'ds-neutral': 'var(--ds-neutral)',
        'ds-background': 'var(--ds-background)',

        // shadcn colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      screens: {
        '3xl': '1600px',
        '4xl': '1920px',
        '5xl': '2560px',
        '6xl': '3840px',
        '7xl': '4096px',
      },
      fontFamily: {
        'libre-baskerville': ['Libre Baskerville'],
        montAlt: ['var(--font-sans)'],
        'berkley-mono': ['Berkley Mono'],
        montserrat: ['--font-alt'],
        sans: ['var(--font-sans)'],
      },
      listStyleType: {
        alpha: 'lower-alpha',
        roman: 'lower-roman',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        shimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        shimmer: 'shimmer 2s linear infinite',
      },
      width: {
        'sidebar-calc': 'calc(100% - 247px)',
      },
      maxWidth: {
        '2xs': '256px',
        '3xs': '192px',
        '4xs': '128px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('daisyui'),
    require('tailwindcss-animate'),
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': value => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          'bg-grid-small': value => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          'bg-dot': value => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )
    },
  ],

  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'dark', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ':root': newVars,
  })
}
