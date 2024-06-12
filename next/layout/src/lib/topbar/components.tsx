'use client'
import { Button } from 'client/core'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'

export const SubscribeButton = ({
  hasSubscription,
}: {
  hasSubscription: boolean
}) => {
  return !hasSubscription ? (
    <Button
      className="bg-[#04c9f0] text-[#0b0d0e] px-1 py-1 w-[136px] h-[30px] rounded font-semibold hover:bg-[#5dd5f0] transition duration-300"
      onClick={() => {
        window.open('/subscribe', '_blank')
      }}
    >
      Subscribe
    </Button>
  ) : null
}

export const FeedbackButton = () => {
  return (
    <Button
      className="bg-[--ds-neutral] text-[--ds-white] px-1 py-1 w-[136px] h-[30px] rounded font-semibold hover:bg-[#919eaa] transition duration-300"
      onClick={() => {
        window.open(
          'https://docs.google.com/forms/d/e/1FAIpQLSeNICszMVzBZKPh0b7Dvizn3J0mnPgLYKLXDakmZaqo9Q39Ew/viewform?usp=sf_link',
          '_blank'
        )
      }}
    >
      Feedback
    </Button>
  )
}

export const HomeButton = () => {
  return (
    <Button
      onClick={() => {
        window.open('/', '_self')
      }}
      className="text-white font-bold py-2 rounded bg-transparent"
    >
      <HomeOutlinedIcon className="hover:text-[#06c9f0] transition duration-300" />
    </Button>
  )
}

export const ToggleAgentSideBar = ({
  toggleAgentSideBar,
}: {
  toggleAgentSideBar: () => void
}) => {
  return (
    <Button
      className="bg-[--ds-neutral] text-[--ds-white] px-1 py-1 w-[136px] h-[30px] rounded font-semibold hover:bg-[#919eaa] transition duration-300"
      onClick={toggleAgentSideBar}
    >
      Toggle Agent Side Bar
    </Button>
  )
}
