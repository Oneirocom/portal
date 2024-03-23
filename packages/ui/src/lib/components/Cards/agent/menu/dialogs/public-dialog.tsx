import { useState } from 'react'
import { api } from '@magickml/portal-api-client'
import toast from 'react-hot-toast'
import { MagickDialog, Label, Checkbox, Textarea } from '@magickml/client-ui'

type PublicDialogProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  agentId: string | null
  isPublic: boolean | null
  agentDescription: string | null
}

export const PublicDialog: React.FC<PublicDialogProps> = ({
  isOpen,
  setIsOpen,
  agentId,
  isPublic,
  agentDescription,
}) => {
  const utils = api.useContext()
  const [description, setDescription] = useState(agentDescription ?? '')
  const [remixable, setRemixable] = useState(true)

  const { mutateAsync: makeAgentPublic, isLoading: isMakingAgentPublic } =
    api.agents.makePublic.useMutation({
      onSuccess: async data => {
        setIsOpen(false)
        toast.success('Agent made public. A link has been copied to clipboard.')
        navigator.clipboard.writeText(
          `${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}/agents/${data.id}`
        )
        setDescription('')
        await utils.agents.invalidate()
      },
      onError: () => {
        toast.error('Error making agent public.')
        setIsOpen(false)
      },
    })

  const { mutateAsync: makeAgentPrivate, isLoading: isMakingAgentPrivate } =
    api.agents.makePrivate.useMutation({
      onSuccess: async () => {
        setIsOpen(false)
        await utils.agents.invalidate()
      },
      onError: err => {
        console.error('Error making agent private', err)
        setIsOpen(false)
      },
    })

  const handlePublicToggle = async () => {
    if (!agentId) return
    if (isPublic) {
      await makeAgentPrivate({ agentId })
    } else {
      if (!description) {
        toast.error("Please enter your agent's description.")
        return
      }
      await makeAgentPublic({
        agentId,
        description,
        remixable,
      })
    }
  }

  return (
    <MagickDialog
      title={`Make ${isPublic ? 'Private' : 'Public'}`}
      open={isOpen}
      setOpen={setIsOpen}
      onSubmit={handlePublicToggle}
      isLoading={isMakingAgentPublic || isMakingAgentPrivate}
      submitText={`Make ${isPublic ? 'Private' : 'Public'}`}
      description={`Make your agent ${
        isPublic
          ? "private so that it won't appear on public pages."
          : 'public so that others can interact with it.'
      }`}
    >
      <div className="flex flex-col text-black gap-y-4 dark:text-white">
        {!isPublic && (
          <PublicDialogContent
            description={description}
            setDescription={setDescription}
            remixable={remixable}
            setRemixable={setRemixable}
          />
        )}
      </div>
    </MagickDialog>
  )
}

type PublicDialogContentProps = {
  description: string
  setDescription: (description: string) => void
  remixable: boolean
  setRemixable: (remixable: boolean) => void
}

const PublicDialogContent: React.FC<PublicDialogContentProps> = ({
  description,
  setDescription,
  remixable,
  setRemixable,
}) => (
  <div className="grid w-full gap-2.5">
    <div className="w-full grid gap-1.5">
      <Label htmlFor="description" className="form-control font-montserrat">
        Agent Description
      </Label>
      <Textarea
        id="description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        rows={4}
        required
        className="focus:border-secondary-highlight placeholder:font-montserrat placeholder:text-black/70 dark:placeholder:text-white/70 w-full p-2 bg-transparent border-2 border-[#808f9a] rounded-[8px] dark:text-white"
        placeholder="Type a description here."
      />
    </div>
    <div className="flex space-x-2 items-top">
      <Checkbox
        id="remixable"
        checked={remixable}
        onCheckedChange={() => setRemixable(!remixable)}
        className="bg-transparent border-2 border-black rounded-none dark:border-white"
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="remixable"
          className="text-sm leading-none font-montserrat peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Enable Remixing
        </label>
        <p className="text-xs text-black dark:text-white font-montserrat">
          Allow others to remix your agent. They will receive a copy of your
          Agent without your secrets and copy of your root spell.
        </p>
      </div>
    </div>
  </div>
)
