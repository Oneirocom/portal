import { FunctionComponent } from 'react'
import FooterLink from './FooterLink'

/**
 * MagickFooter Component
 *
 * This component renders the footer links with optional icons.
 *
 * @returns JSX.Element
 */
const MagickFooter: FunctionComponent = () => {
  return (
    <footer className="pb-2 mx-4 relative w-full inline-flex items-center justify-start gap-[17px] text-left text-[8px] text-[#e6e6e6] font-berkley-mono md:invisible">
      <FooterLink href="/privacy">Privacy Policy </FooterLink>
      <FooterLink href="/terms">Terms & Conditions </FooterLink>
    </footer>
  )
}

export default MagickFooter
