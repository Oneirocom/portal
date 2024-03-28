import { useState } from 'react'
import { api } from '@magickml/portal-api-client'
import toast from 'react-hot-toast'
import {
  PortalDialog,
  InputWithLabel,
  TextareaWithLabel,
} from '@magickml/client-ui'

type UpdateTemplateDialogProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  templateId: string
  initialName: string
  initialDescription: string
}

type UpdateTemplateState = {
  name: string
  description: string
}

export const UpdateTemplateDialog: React.FC<UpdateTemplateDialogProps> = ({
  isOpen,
  setIsOpen,
  templateId,
  initialName,
  initialDescription,
}) => {
  const [templateState, setTemplateState] = useState<UpdateTemplateState>({
    name: initialName,
    description: initialDescription,
  })

  const { mutateAsync: updateTemplate, isLoading: isUpdateTemplateLoading } =
    api.templates.update.useMutation({
      onSuccess: () => {
        toast.success('Template updated')
        setIsOpen(false)
      },
      onError: e => {
        toast.error(e.message)
        setIsOpen(false)
      },
    })

  const handleUpdateTemplate = async () => {
    await updateTemplate({
      templateId,
      name: templateState.name,
      description: templateState.description,
    })
  }

  return (
    <PortalDialog
      base={{
        root: {
          open: isOpen,
          onOpenChange: setIsOpen,
        },
      }}
      title="Update Template"
      description="Update the name and description of the template."
      footerText={`${isUpdateTemplateLoading ? 'Updating' : 'Update'} Template`}
      footerButton={{
        onClick: handleUpdateTemplate,
        disabled: isUpdateTemplateLoading,
        isLoading: isUpdateTemplateLoading,
        className: 'w-full',
        variant: 'portal-primary',
      }}
    >
      <div className="flex flex-col gap-8">
        <InputWithLabel
          id="template-name"
          label="Template Name"
          value={templateState.name}
          onChange={e =>
            setTemplateState({ ...templateState, name: e.target.value })
          }
          placeholder="Enter a name for the template"
        />
        <TextareaWithLabel
          id="template-description"
          label="Template Description"
          value={templateState.description}
          onChange={e =>
            setTemplateState({ ...templateState, description: e.target.value })
          }
          placeholder="Enter a description for the template"
          rows={4}
        />
      </div>
    </PortalDialog>
  )
}
