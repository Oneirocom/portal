import { useState } from 'react'
import { api } from '@magickml/portal-api-client'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import {
  PortalDialog,
  InputWithLabel,
  SwitchWithLabel,
} from '@magickml/client-ui'
import { TextareaWithLabel } from '@magickml/client-ui'
import { useUser } from '@clerk/nextjs'

type TemplateDialogProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  agentId: string | null
}

type CreateTemplateState = {
  name: string
  description: string
  public: boolean
  type: 'OFFICIAL' | 'COMMUNITY'
}

export const TemplateDialog: React.FC<TemplateDialogProps> = ({
  isOpen,
  setIsOpen,
  agentId,
}) => {
  const { user } = useUser()
  const role = user?.publicMetadata?.role as string | undefined

  const utils = api.useContext()
  const router = useRouter()
  const [templateState, setTemplateState] = useState<CreateTemplateState>({
    name: '',
    description: '',
    public: false,
    type: 'COMMUNITY',
  })

  const { mutateAsync: createTemplate, isLoading: isCreateTemplateLoading } =
    api.templates.create.useMutation({
      onSuccess: async () => {
        await utils.agents.invalidate()
        toast.success('Template created')
        setIsOpen(false)
        router.push('/templates')
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
    <PortalDialog
      base={{
        root: {
          open: isOpen,
          onOpenChange: setIsOpen,
        },
      }}
      title="Create Template"
      description="Create a template from this agent."
      footerText={`${isCreateTemplateLoading ? 'Creating' : 'Create'} Template`}
      footerButton={{
        onClick: handleCreateTemplate,
        disabled: templateState.name === '' || isCreateTemplateLoading,
        isLoading: isCreateTemplateLoading,
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
          id="template-public"
          label="Make this template public?"
          className=""
          checked={templateState.public}
          onCheckedChange={checked =>
            setTemplateState({ ...templateState, public: checked })
          }
        />

        {role?.toUpperCase() === 'ADMIN' && (
          <SwitchWithLabel
            id="template-type"
            label="Make this template official?"
            className="data-[state=unchecked]:bg-ds-card-alt data-[state=unchecked]:border-ds-neutral data-[state=unchecked]:border"
            checked={templateState.type === 'OFFICIAL'}
            onCheckedChange={checked =>
              setTemplateState({
                ...templateState,
                type: checked ? 'OFFICIAL' : 'COMMUNITY',
              })
            }
          />
        )}
      </div>
    </PortalDialog>
  )
}
