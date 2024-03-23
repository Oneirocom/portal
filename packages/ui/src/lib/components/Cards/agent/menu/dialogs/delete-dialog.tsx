import { useState } from 'react'
import { api } from '@magickml/portal-api-client'
import toast from 'react-hot-toast'
import { MagickDialog, Input } from '@magickml/client-ui'

type DeleteDialogProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  agentId: string | null
  agentName: string | null
  projectId: string | null
}

export const DeleteDialog: React.FC<DeleteDialogProps> = ({
  isOpen,
  setIsOpen,
  agentId,
  agentName,
  projectId,
}) => {
  const utils = api.useContext()
  const [disableConfirmDelete, setDisableConfirmDelete] = useState(true)

  const { mutateAsync: deleteAgent, isLoading: isDeleteLoading } =
    api.agents.deleteAgent.useMutation({
      onSuccess: async () => {
        await utils.agents.invalidate()
        toast.success('Agent deleted')
        handleClose()
      },
      onError: e => {
        toast.error(e.message)
        handleClose()
      },
    })

  const handleAgentDelete = async () => {
    if (!agentId || !projectId) return
    await deleteAgent({
      projectId,
      agentId,
    })
  }

  const handleClose = () => {
    setDisableConfirmDelete(true)
    setIsOpen(false)
  }

  const handleOnChangeDelete = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisableConfirmDelete(e.target.value !== agentName)
  }

  return (
    <MagickDialog
      title="Delete Agent"
      open={isOpen}
      isLoading={isDeleteLoading}
      setOpen={setIsOpen}
      onSubmit={handleAgentDelete}
      submitText="Delete Agent"
      submitDisabled={disableConfirmDelete}
      description={`Are you sure you want to delete this agent? This action cannot be undone and this agent will be deleted.`}
      destructive
    >
      <div className="flex flex-col gap-2">
        <p className="text-sm font-montserrat">
          Agent name: <span className="font-semibold">{agentName}</span>
        </p>
        <Input
          className="focus:border-secondary-highlight placeholder:font-montserrat placeholder:text-black/70 dark:placeholder:text-white/70 w-full p-2 bg-transparent border-2 border-[#808f9a] rounded-[8px] dark:text-white"
          placeholder="Enter agent name to confirm"
          onChange={handleOnChangeDelete}
        />
      </div>
    </MagickDialog>
  )
}
