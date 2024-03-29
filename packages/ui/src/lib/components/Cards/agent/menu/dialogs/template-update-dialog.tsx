import { useState } from 'react'
import { api } from '@magickml/portal-api-client'
import toast from 'react-hot-toast'
import {
  PortalDialog,
  InputWithLabel,
  TextareaWithLabel,
  SwitchWithLabel,
} from '@magickml/client-ui'

type UpdateTemplateDialogProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  templateId: string
  initialName: string
  initialDescription: string
  initialPublic: boolean
}

type UpdateTemplateState = {
  name: string
  description: string
  public: boolean
}

export const UpdateTemplateDialog: React.FC<UpdateTemplateDialogProps> = ({
  isOpen,
  setIsOpen,
  templateId,
  initialName,
  initialDescription,
  initialPublic,
}) => {
  const utils = api.useContext()

  const [templateState, setTemplateState] = useState<UpdateTemplateState>({
    name: initialName,
    description: initialDescription,
    public: initialPublic,
  })

  const { mutateAsync: updateTemplate, isLoading: isUpdateTemplateLoading } =
    api.templates.update.useMutation({
      onSuccess: async payload => {
        toast.success('Template updated')
        setIsOpen(false)
        await utils.templates.invalidate()
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
      public: templateState.public,
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
        <SwitchWithLabel
          id="template-type"
          label="Make this template public?"
          className="-[state=unchecked]:bg-ds-card-alt data-[state=unchecked]:border-ds-neutral data-[state=unchecked]:border"
          checked={templateState.public}
          onCheckedChange={checked =>
            setTemplateState({
              ...templateState,
              public: checked,
            })
          }
        />
      </div>
    </PortalDialog>
  )
}
