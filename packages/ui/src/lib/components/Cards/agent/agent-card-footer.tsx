import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  Button,
} from '@magickml/client-ui'
import Image from 'next/image'
import { getImage, ImageType } from 'shared/utils'
import type { AgentCardInfo } from './types'

export type AgentCardFooterProps = {
  agent: AgentCardInfo
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  buttonRef: React.RefObject<HTMLButtonElement>
  submitText: string
  onSubmit: () => void | Promise<void>
}

export const AgentCardFooter: React.FC<AgentCardFooterProps> = ({
  agent,
  state,
  buttonRef,
  submitText,
  onSubmit,
}) => {
  const [open, setOpen] = state
  return (
    <Dialog onOpenChange={setOpen} modal={true} open={open}>
      <DialogTrigger asChild>
        <Button
          ref={buttonRef}
          size="sm"
          className="w-full rounded-[10px] font-medium z-40"
          variant="portal-neutral"
          onClick={() => state[1](!state[0])}
        >
          More Info
        </Button>
      </DialogTrigger>
      <DialogContent
        onPointerDownOutside={e => e.preventDefault()}
        className="max-w-xs lg:max-w-2xl w-full text-ds-black dark:text-ds-white p-8"
      >
        <h2 className="text-2xl font-bold !font-montAlt capitalize">
          {agent.name}
        </h2>
        <div className="flex flex-col lg:flex-row gap-2 items-start justify-start">
          <div className="aspect-square font-montserrat relative w-full h-full rounded-t-xl overflow-hidden m-0 p-0 basis-1/3">
            <Image
              src={getImage({
                id: agent.id ?? '0',
                type: ImageType.IMAGE,
                image: agent.image,
              })}
              alt={agent.name ?? 'Placeholder'}
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 basis-2/3 px-6 py-2.5 ">
            <p className="text-base font-semibold text-left">Description</p>

            <div className="self-stretch text-base font-normal">
              {agent?.description && agent.description.length > 0
                ? agent.description
                : 'No description'}
            </div>
          </div>
        </div>

        <DialogFooter className="pt-8">
          {/* <Button onClick={onSubmit} variant="portal-primary" type="submit">
            {submitText}
          </Button> */}
          <button
            onClick={onSubmit}
            className="relative inline-flex overflow-hidden p-[1px] focus:outline-none focus:ring-none rounded-[10px]"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1bc5eb_0%,#117a91_50%,#1bc5eb_100%)] rounded-[10px]" />
            <span className="px-4 font-montserrat font-semibold inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[10px] bg-ds-card py-2 text-sm text-ds-black dark:text-ds-white backdrop-blur-3xl">
              {submitText}
            </span>
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
