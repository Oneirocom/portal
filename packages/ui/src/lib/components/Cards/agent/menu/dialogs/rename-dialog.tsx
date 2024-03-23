import { useState } from 'react'
import { api } from '@magickml/portal-api-client'
import toast from 'react-hot-toast'
import { MagickDialog, Input } from '@magickml/client-ui'

type RenameDialogProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  agentId: string | null
  agentName: string | null
}

export const RenameDialog: React.FC<RenameDialogProps> = ({
  isOpen,
  setIsOpen,
  agentId,
  agentName,
}) => {
  const utils = api.useContext()
  const [renameValue, setRenameValue] = useState(agentName ?? '')

  const { mutateAsync: updateAgent, isLoading: isUpdateLoading } =
    api.agents.updateAgent.useMutation({
      onSuccess: async () => {
        await utils.agents.invalidate()
        toast.success('Agent updated')
        setIsOpen(false)
      },
      onError: e => {
        toast.error(e.message)
        setIsOpen(false)
      },
    })

  const handleRename = async () => {
    if (!agentId) return
    if (renameValue === agentName) {
      toast.error('Please enter a new name for the agent.')
      return
    }
    await updateAgent({
      agentId,
      name: renameValue,
      updateDraft: true,
    })
  }

  return (
    <MagickDialog
      title="Rename Agent"
      open={isOpen}
      isLoading={isUpdateLoading}
      setOpen={setIsOpen}
      onSubmit={handleRename}
      submitText="Rename Agent"
      submitDisabled={renameValue === agentName || renameValue === ''}
      description="Rename your agent to a new name."
      destructive={false}
    >
      <div className="flex flex-col gap-2">
        <p className="text-sm font-montserrat">
          Current name: <span className="font-semibold">{agentName}</span>
        </p>
        <Input
          className="focus:border-secondary-highlight placeholder:font-montserrat placeholder:text-black/70 dark:placeholder:text-white/70 w-full p-2 bg-transparent border-2 border-[#808f9a] rounded-[8px] dark:text-white"
          placeholder="Enter new agent name"
          value={renameValue}
          onChange={e => setRenameValue(e.target.value)}
        />
      </div>
    </MagickDialog>
  )
}
