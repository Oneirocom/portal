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
    <footer className="hidden mt-auto lg:inline-flex absolute bottom-0 w-full z-50 text-ds-secondary-p dark:text-ds-secondary-m justify-center gap-x-6 font-berkley-mono text-xs py-2 bg-ds-background">
      <FooterLink href="/privacy">Privacy Policy </FooterLink>
      <FooterLink href="/terms">Terms & Conditions </FooterLink>
      <FooterLink href="https://bit.ly/magickdiscordx">
        <span className="inline-flex gap-x-1">
          <DiscordIcon />
          Connect on Discord
        </span>
      </FooterLink>
      <FooterLink href="https://twitter.com/MagickML">
        <span className="inline-flex gap-x-1">
          <TwtterIcon />
          Connect on Twitter
        </span>
      </FooterLink>
    </footer>
  )
}

export default MagickFooter

const DiscordIcon = () => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 -28.5 256 256"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      className="h-4 w-4"
    >
      <g>
        <path
          d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
          fill="currentColor"
          fill-rule="nonzero"
        ></path>
      </g>
    </svg>
  )
}

const TwtterIcon = () => {
  return (
    <svg
      fill="currentColor"
      height="800px"
      width="800px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-271 296.6 256.4 208.4"
      className="h-4 w-4"
    >
      <path
        d="M-14.6,321.2c-9.4,4.2-19.6,7-30.2,8.3c10.9-6.5,19.2-16.8,23.1-29.1c-10.2,6-21.4,10.4-33.4,12.8
	c-9.6-10.2-23.3-16.6-38.4-16.6c-29,0-52.6,23.6-52.6,52.6c0,4.1,0.4,8.1,1.4,12c-43.7-2.2-82.5-23.1-108.4-55
	c-4.5,7.8-7.1,16.8-7.1,26.5c0,18.2,9.3,34.3,23.4,43.8c-8.6-0.3-16.7-2.7-23.8-6.6v0.6c0,25.5,18.1,46.8,42.2,51.6
	c-4.4,1.2-9.1,1.9-13.9,1.9c-3.4,0-6.7-0.3-9.9-0.9c6.7,20.9,26.1,36.1,49.1,36.5c-18,14.1-40.7,22.5-65.3,22.5
	c-4.2,0-8.4-0.2-12.6-0.7c23.3,14.9,50.9,23.6,80.6,23.6c96.8,0,149.7-80.2,149.7-149.7c0-2.3,0-4.6-0.1-6.8
	C-30.5,341-21.6,331.8-14.6,321.2"
      />
    </svg>
  )
}
