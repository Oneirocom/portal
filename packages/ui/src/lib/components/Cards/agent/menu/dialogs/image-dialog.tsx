import { useState } from 'react'
import { api } from '@magickml/portal-api-client'
import toast from 'react-hot-toast'
import { convertFileToBase64 } from '@magickml/portal-utils-shared'
import { MagickDialog, Input, Label } from '@magickml/client-ui'

type ImageDialogProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  agentId: string | null
}

export const ImageDialog: React.FC<ImageDialogProps> = ({
  isOpen,
  setIsOpen,
  agentId,
}) => {
  const utils = api.useContext()
  const [imageFile, setImageFile] = useState<File | null>(null)

  const { mutateAsync: updateAgent, isLoading: isUpdateLoading } =
    api.agents.updateAgent.useMutation({
      onSuccess: async () => {
        setImageFile(null)
        toast.success('Image updated.')
        await utils.agents.invalidate()
      },
      onError: error => {
        toast.error('Something went wrong')
      },
    })

  const handleImageUpdate = async () => {
    if (!imageFile || !agentId) return
    const base64 = await convertFileToBase64(imageFile)
    await updateAgent({
      image: base64,
      agentId,
      updateDraft: true,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageFile(e.target.files?.[0] ?? null)
  }

  return (
    <MagickDialog
      title="Update Image"
      open={isOpen}
      isLoading={isUpdateLoading}
      setOpen={setIsOpen}
      onSubmit={handleImageUpdate}
      submitText="Update Image"
      submitDisabled={!imageFile}
      description="Update your agent's image."
      destructive={false}
    >
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="agentImage">Upload an image</Label>
        <Input id="agentImage" type="file" onChange={handleFileChange} />
      </div>
    </MagickDialog>
  )
}
