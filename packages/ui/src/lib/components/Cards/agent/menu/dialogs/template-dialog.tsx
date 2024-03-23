import { useState } from 'react'
import { api } from '@magickml/portal-api-client'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { MagickDialog, Input, Textarea } from '@magickml/client-ui'

type TemplateDialogProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  agentId: string | null
}

type CreateTemplateState = {
  name: string
  description: string
}

export const TemplateDialog: React.FC<TemplateDialogProps> = ({
  isOpen,
  setIsOpen,
  agentId,
}) => {
  const utils = api.useContext()
  const router = useRouter()
  const [templateState, setTemplateState] = useState<CreateTemplateState>({
    name: '',
    description: '',
  })

  const { mutateAsync: createTemplate, isLoading: isCreateTemplateLoading } =
    api.templates.create.useMutation({
      onSuccess: async () => {
        await utils.agents.invalidate()
        toast.success('Template created')
        setIsOpen(false)
        router.push('/create')
      },
      onError: e => {
        toast.error(e.message)
        setIsOpen(false)
      },
    })

  const handleCreateTemplate = async () => {
    if (!agentId) return
    await createTemplate({
      ...templateState,
      agentId,
    })
  }

  return (
    <MagickDialog
      title="Create Template"
      open={isOpen}
      isLoading={isCreateTemplateLoading}
      setOpen={setIsOpen}
      onSubmit={handleCreateTemplate}
      submitText={`${isCreateTemplateLoading ? 'Creating' : 'Create'} Template`}
      submitDisabled={templateState.name === '' || isCreateTemplateLoading}
      description="Create a template from this agent."
      destructive={false}
    >
      <div className="flex flex-col gap-2">
        <Input
          className="focus:border-secondary-highlight placeholder:font-montserrat placeholder:text-black/70 dark:placeholder:text-white/70 w-full p-2 bg-transparent border-2 border-[#808f9a] rounded-[8px] dark:text-white"
          placeholder="Template Name"
          value={templateState.name}
          onChange={e =>
            setTemplateState({ ...templateState, name: e.target.value })
          }
        />
        <Textarea
          className="focus:border-secondary-highlight placeholder:font-montserrat placeholder:text-black/70 dark:placeholder:text-white/70 w-full p-2 bg-transparent border-2 border-[#808f9a] rounded-[8px] dark:text-white"
          placeholder="Template Description"
          value={templateState.description}
          onChange={e =>
            setTemplateState({ ...templateState, description: e.target.value })
          }
          rows={4}
        />
      </div>
    </MagickDialog>
  )
}
