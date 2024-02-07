import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion'
import { useRouter } from 'next/router'

/**
 * Interface for AuthLayout component properties.
 */
export interface AuthLayoutProps {
  /** Primary content inside the auth layout. */
  children: React.ReactNode
  /** Secondary content inside the auth layout, optional. */
  secondary?: React.ReactNode
  /** Optional title for the priamry AuthCard. */
  title?: string
}

/**
 * AuthLayout Component
 *
 * This component provides a layout for authentication-related pages.
 * It includes animations for transitions and provides slots for primary
 * and optional secondary content.
 *
 * @param {React.ReactNode} children - The primary content for the auth layout.
 * @param {React.ReactNode} [secondary] - The secondary content for the auth layout.
 * @param {string} [title] - The optional title for the primary AuthCard.
 */
export const AuthLayout = ({ children, secondary, title }: AuthLayoutProps) => {
  const router = useRouter()

  return (
    <div className="relative flex items-center justify-center w-full my-auto">
      <div className="flex flex-col items-center justify-center w-full max-w-lg gap-10 z-10">
        <AnimatePresence
        //  mode="wait"
        >
          <LazyMotion key={router.asPath} features={domAnimation}>
            <m.div
              className="flex flex-col items-start w-full gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AuthCard title={title}>{children}</AuthCard>
              {secondary && <AuthCard>{secondary}</AuthCard>}
            </m.div>
          </LazyMotion>
        </AnimatePresence>
      </div>
    </div>
  )
}

interface AuthCardProps {
  /** Content to be displayed inside the AuthCard. */
  children: React.ReactNode
  /** Optional title for the AuthCard. */
  title?: string
}

/**
 * AuthCard Component
 *
 * This component serves as a card layout for authentication-related content.
 * It accepts optional title and children for customization.
 *
 * @param {React.ReactNode} children - The content to be displayed inside the card.
 * @param {string} [title] - The optional title for the card.
 */
export const AuthCard = ({ children, title }: AuthCardProps) => {
  return (
    <div className="w-full drop-shadow-lg bg-ds-card flex flex-col items-center gap-8 px-8 md:px-20 py-14 rounded">
      {title && (
        <h2 className="text-3xl font-montAlt font-bold uppercase">{title}</h2>
      )}
      {children}
    </div>
  )
}
