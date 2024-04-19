import { useState } from 'react'
import { api, RouterInputs } from '@magickml/portal-api-client'
import toast from 'react-hot-toast'
import {
  PortalDialog,
  InputWithLabel,
  TextareaWithLabel,
} from '@magickml/client-ui'
import { handleImageUpload } from '../../utils/image'

type AgentUpdateDialogProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  agentId: string | null
  initialName: string | null
  initialDescription: string | null
}

export const AgentUpdateDialog: React.FC<AgentUpdateDialogProps> = ({
  isOpen,
  setIsOpen,
  agentId,
  initialName,
  initialDescription,
}) => {
  const utils = api.useContext()
  const [name, setName] = useState(initialName ?? '')
  const [description, setDescription] = useState(initialDescription ?? '')
  const [imageFile, setImageFile] = useState<File | null>(null)

  const { mutateAsync: getPresignedUrl } =
    api.agents.getPresignedUrl.useMutation({
      onError: error => {
        toast.error('Something went wrong')
      },
    })

  const { mutateAsync: updateAgent, isLoading: isUpdateLoading } =
    api.agents.updateAgent.useMutation({
      onSuccess: async () => {
        setImageFile(null)
        toast.success('Agent updated.')
        await utils.agents.invalidate()
        setIsOpen(false)
      },
      onError: error => {
        toast.error('Something went wrong')
      },
    })

  const handleUpdate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!agentId) return

    let image: string | undefined
    if (imageFile) {
      const key = await handleImageUpload({
        agentId,
        imageFile,
        getPresignedUrl,
        type: 'agentAvatar' as RouterInputs['agents']['getPresignedUrl']['type'], // TODO: use the zod schema for enum
      })

      if (!key) {
        toast.error(
          'Error uploading image. Please try again with a different image.'
        )
        return
      }
      image = key
    }

    await updateAgent({
      name,
      description,
      image,
      agentId,
      updateDraft: true,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageFile(e.target.files?.[0] ?? null)
  }

  return (
    <PortalDialog
      base={{
        root: {
          open: isOpen,
          onOpenChange: setIsOpen,
        },
      }}
      title="Update Agent"
      description="Update your agent's name, description, and image."
      footerText="Update Agent"
      footerButton={{
        onClick: handleUpdate,
        disabled: isUpdateLoading,
        isLoading: isUpdateLoading,
        className: 'w-full',
        variant: 'portal-primary',
      }}
    >
      <div className="flex flex-col gap-8">
        <InputWithLabel
          id="agentName"
          label="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter a name for your agent"
          className="w-full"
        />
        <TextareaWithLabel
          id="agentDescription"
          label="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Enter a description for your agent"
          className="w-full"
          rows={4}
        />
        <InputWithLabel
          id="agentImage"
          type="file"
          label="Upload an image (optional)"
          onChange={handleFileChange}
          placeholder="Upload an image"
          className="w-full"
        />
      </div>
    </PortalDialog>
  )
}
