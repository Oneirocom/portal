import clsx from 'clsx'

import ExpandingTextInput from './ExpandingInput'

type AgentChatInputProps = {
  value: string
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleKeyDown: (event: any) => void
  handleClick: () => void
  isResponding: boolean
  agentName: string | null
  isPublic?: boolean
}

const AgentChatInput = ({
  value,
  handleChange,
  handleKeyDown,
  handleClick,
  isResponding,
  agentName,
  isPublic = false,
}: AgentChatInputProps) => {
  return (
    <div
      className={clsx(
        isPublic ? 'pb-0' : 'pb-12 md:pb-24',
        'bg-[#dbe2e8] dark:bg-[#171b1c] w-full inline-flex lg:bottom-0 placeholder:text-[#a0b3c1] font-sans dark:placeholder:text-white/50 placeholder:black/50 rounded-lg md:rounded-b-none relative pb-0 lg:pb-0 lg:mb-4'
      )}
    >
      <ExpandingTextInput
        placeholder={`Message ${agentName}...`}
        handleChange={handleChange}
        handleKeydown={handleKeyDown}
        value={value}
      />
      {!isResponding ? (
        <button
          className={clsx(
            isPublic ? 'pb-0' : 'pb-12 lg:pb-0',
            'absolute bottom-3 right-3 z-50 pt-1 text-black lg:right-6 disabled:text-black/50 disabled:dark:text-white/50 dark:text-white'
          )}
          disabled={isResponding || !value}
          onClick={e => {
            handleClick()
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 29 33"
            fill="none"
          >
            <path
              d="M1.8125 14.0075L1.82458 4.63281L27.1875 16.6859L1.82458 28.7391L1.8125 19.3644L19.9375 16.6859L1.8125 14.0075Z"
              fill="currentColor"
              className="color-transition"
            />
          </svg>
        </button>
      ) : (
        <div className="flex items-center mr-4 space-x-1">
          <div className="w-1 h-1 duration-700 bg-current rounded-full md:w-2 md:h-2 animate-pulse" />
          <div className="w-1 h-1 duration-700 delay-100 bg-current rounded-full md:w-2 md:h-2 animate-pulse" />
          <div className="w-1 h-1 duration-700 delay-200 bg-current rounded-full md:w-2 md:h-2 animate-pulse" />
        </div>
      )}
    </div>
  )
}

export default AgentChatInput
