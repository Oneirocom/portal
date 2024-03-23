import { workspaceAtom } from '@magickml/portal-state'
import { useAtomValue } from 'jotai'
import { api } from '@magickml/portal-api-client'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Button,
  Input,
  Label,
  Checkbox,
  Textarea,
  MagickDialog,
} from '@magickml/client-ui'

import { convertFileToBase64 } from '@magickml/portal-utils-shared'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/router'

type AgentCardMenuProps = {
  agentId: string | null
  agentName: string | null
  projectId: string | null
  isPublic: boolean | null
  agentDescription: string | null
  openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  publicModalState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  deleteModalState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  renameModalState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  imageModalState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  templateModalState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

type CreateTemplateState = {
  name: string
  description: string
}

export const AgentCardMenu: React.FunctionComponent<AgentCardMenuProps> = ({
  agentId,
  agentName,
  projectId,
  isPublic,
  agentDescription,
  openState,
  publicModalState,
  deleteModalState,
  renameModalState,
  imageModalState,
  templateModalState,
}) => {
  const workspace = useAtomValue(workspaceAtom)
  const utils = api.useContext()
  const [description, setDescription] = useState('')
  const [remixable, setRemixable] = useState(true)
  const [disableConfirmDelete, setDisableConfirmDelete] = useState(true)
  const [renameValue, setRenameValue] = useState(agentName ?? '')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const { user, isSignedIn } = useUser()
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
        templateModalState[1](false)
        router.push('/create')
      },
      onError: e => {
        toast.error(e.message)
        templateModalState[1](false)
      },
    })

  const handleCreateTemplate = async () => {
    if (user && isSignedIn && user.publicMetadata?.role === 'ADMIN') {
      await createTemplate({
        ...templateState,
        agentId: agentId ?? '',
      })
    } else {
      toast.error('You do not have permission to create a template.')
    }
  }

  const { mutateAsync: updateAgent, isLoading: isUpdateLoading } =
    api.agents.updateAgent.useMutation({
      onSuccess: async () => {
        await utils.agents.invalidate()
        toast.success('Agent updated')
        renameModalState[1](false)
      },
      onError: e => {
        toast.error(e.message)
        renameModalState[1](false)
      },
    })

  const handleRename = async () => {
    if (!agentId || !workspace) return
    if (renameValue === agentName) {
      toast.error('Please enter a new name for the agent.')
      return
    }
    //TODO: update draft agent name as well with project id
    await updateAgent({
      agentId,
      name: renameValue,
      updateDraft: true,
    })
  }

  const { mutateAsync: deleteAgent, isLoading: isDeleteLoading } =
    api.agents.deleteAgent.useMutation({
      onSuccess: async () => {
        await utils.agents.invalidate()
        toast.success('Agent deleted')
        handleCancel()
      },
      onError: e => {
        toast.error(e.message)
        handleCancel()
      },
    })

  const { mutateAsync: makeAgentPublic, isLoading: isMakingAgentPublic } =
    api.agents.makePublic.useMutation({
      onSuccess: async data => {
        publicModalState[1](false)
        toast.success('Agent made public. A link has been copied to clipboard.')
        navigator.clipboard.writeText(
          `${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}/agents/${data.id}`
        )
        setDescription('')
        await utils.agents.invalidate()
      },
      onError: () => {
        toast.error('Error making agent public.')
        publicModalState[1](false)
      },
    })

  const { mutateAsync: makeAgentPrivate, isLoading: isMakingAgentPrivate } =
    api.agents.makePrivate.useMutation({
      onSuccess: async () => {
        publicModalState[1](false)
        await utils.agents.invalidate()
      },
      onError: err => {
        console.error('Error making agent private', err)
        publicModalState[1](false)
      },
    })

  const handlePublicToggle = async () => {
    if (!agentId || !workspace) return
    if (isPublic) {
      await makeAgentPrivate({ agentId })
    } else {
      // make sure description is not empty
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

  const handleAgentDelete = async () => {
    await deleteAgent({
      projectId: projectId ?? '',
      agentId: agentId ?? '',
    })
    setDisableConfirmDelete(true)
    deleteModalState[1](false)
  }

  const handleCancel = () => {
    deleteModalState[1](false)
    setDisableConfirmDelete(true)
  }

  //   const handlePublicCancel = () => {
  //     publicModalState[1](false)
  //     setDescription('')
  //   }

  const menuItems = [
    {
      name: 'Open in Editor',
      type: 'link',
      href: `/projects/${projectId}`,
      enabled: true,
    },
    {
      name: 'Chat with Agent',
      type: 'link',
      href: `/agents/${agentId}`,
      enabled: false,
    },
    {
      name: `Make ${isPublic ? 'Private' : 'Public'}`,
      type: 'button',
      action: () => publicModalState[1](true),
      enabled: false,
    },
    {
      name: 'Copy Link',
      type: 'button',
      action: () => {
        navigator.clipboard.writeText(
          `${process.env.NEXT_PUBLIC_DEPLOYMENT_URL}/explore/${agentId}`
        )
        toast.success('Link copied to clipboard')
      },
      enabled: false,
    },
    {
      name: 'Update Image',
      action: () => imageModalState[1](true),
      type: 'button',
      enabled: true,
    },
    {
      name: 'Rename',
      action: () => renameModalState[1](true),
      type: 'button',
      enabled: true,
    },
    {
      name: 'Create Template',
      action: () => templateModalState[1](true),
      type: 'button',
      enabled: user && isSignedIn && user.publicMetadata?.role === 'ADMIN',
    },

    {
      name: 'Delete',
      action: () => deleteModalState[1](true),
      type: 'button',
      enabled: true,
    },
  ]

  const handleOnchangeDelete = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === agentName) setDisableConfirmDelete(false)
    else setDisableConfirmDelete(true)
  }

  const handleImageUpdate = async () => {
    if (!imageFile) return
    const base64 = await convertFileToBase64(imageFile)

    await updateAgent({
      image: base64,
      agentId: agentId ?? '',
      updateDraft: true,
    })
      .then(data => {
        setImageFile(null)
        toast.success('Image updated.')
        utils.agents.invalidate()
      })
      .catch(error => {
        toast.error('Something went wrong.', error.message)
      })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageFile(e.target.files ? e.target.files[0] : null)
  }

  useEffect(() => {
    if (agentDescription) {
      setDescription(agentDescription)
    }
  }, [agentDescription])

  return (
    <>
      {/* Deploy Modal */}
      <MagickDialog
        title={`Make ${isPublic ? 'Private' : 'Public'}`}
        open={publicModalState[0]}
        setOpen={publicModalState[1]}
        onSubmit={handlePublicToggle}
        isLoading={isMakingAgentPublic || isMakingAgentPrivate}
        submitText={`Make ${isPublic ? 'Private' : 'Public'}`}
        description={`Make your agent ${
          isPublic
            ? 'private so that it wont appear on public pages.'
            : 'public'
        } so that others can interact with it.`}
      >
        <div className="flex flex-col text-black gap-y-4 dark:text-white">
          {!isPublic && (
            <PublicModalContent
              description={description}
              setDescrption={setDescription}
              remixable={remixable}
              setRemixable={setRemixable}
            />
          )}
        </div>
      </MagickDialog>

      {/* Image Update Modal */}
      <MagickDialog
        title="Update Image"
        open={imageModalState[0]}
        isLoading={isUpdateLoading}
        setOpen={imageModalState[1]}
        onSubmit={handleImageUpdate}
        submitText="Update Image"
        submitDisabled={!imageFile}
        description={`Update your agent's image.`}
        destructive={false}
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="agentImage">Upload an image</Label>
          <Input id="agentImage" type="file" onChange={handleFileChange} />
        </div>
      </MagickDialog>

      {/* Rename Modal */}
      <MagickDialog
        title="Rename Agent"
        open={renameModalState[0]}
        isLoading={isUpdateLoading}
        setOpen={renameModalState[1]}
        onSubmit={handleRename}
        submitText="Rename Agent"
        submitDisabled={renameValue === agentName || renameValue === ''}
        description={`Rename your agent to a new name.`}
        destructive={false}
      >
        <div className="flex flex-col gap-2">
          <p className="text-sm font-montserrat">
            Current name: <span className="font-semibold">{agentName}</span>
          </p>
          <Input
            className="focus:border-secondary-highlight placeholder:font-montserrat placeholder:text-black/70 dark:placeholder:text-white/70 w-full p-2 bg-transparent border-2 border-[#808f9a] rounded-[8px] dark:text-white"
            placeholder="Enter agent name to confirm"
            value={renameValue}
            onChange={e => setRenameValue(e.target.value)}
          />
        </div>
      </MagickDialog>

      {/* Delete Modal */}
      <MagickDialog
        title="Delete Agent"
        open={deleteModalState[0]}
        isLoading={isDeleteLoading}
        setOpen={deleteModalState[1]}
        onSubmit={handleAgentDelete}
        submitText="Delete Agent"
        submitDisabled={disableConfirmDelete}
        description={`Are you sure you want to delete this agent? ${' '}
        This action cannot be undone and this agent will be deleted.`}
        destructive={true}
      >
        <div className="flex flex-col gap-2">
          <p className="text-sm font-montserrat">
            Agent name: <span className="font-semibold">{agentName}</span>
          </p>
          <Input
            className="focus:border-secondary-highlight placeholder:font-montserrat placeholder:text-black/70 dark:placeholder:text-white/70 w-full p-2 bg-transparent border-2 border-[#808f9a] rounded-[8px] dark:text-white"
            placeholder="Enter agent name to confirm"
            onChange={handleOnchangeDelete}
          />
        </div>
      </MagickDialog>

      {/* Create Template Modal */}
      <MagickDialog
        title="Create Template"
        open={templateModalState[0]}
        isLoading={isCreateTemplateLoading}
        setOpen={templateModalState[1]}
        onSubmit={handleCreateTemplate}
        submitText={`${
          isCreateTemplateLoading ? 'Creating' : 'Create'
        } Template`}
        submitDisabled={templateState.name === '' || isCreateTemplateLoading}
        description={`Create a template from this agent.`}
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
              setTemplateState({
                ...templateState,
                description: e.target.value,
              })
            }
            rows={4}
          />
        </div>
      </MagickDialog>

      <DropdownMenu open={openState[0]} onOpenChange={openState[1]}>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            className="absolute z-40 top-0 right-0 rounded-tr-xl"
            variant="ghost"
          >
            <EllipsisVerticalIcon className="w-5 h-5 text-ds-white" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          {menuItems.map(
            item =>
              item.enabled &&
              (item.type === 'link' ? (
                <DropdownMenuItem asChild key={item.name}>
                  <Link target="_blank" href={item.href ?? '#'}>
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem
                  key={item.name}
                  onSelect={item.action ?? (() => console.log('no action'))}
                >
                  {item.name}
                </DropdownMenuItem>
              ))
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

type PublicModalContentProps = {
  description: string
  setDescrption: (description: string) => void
  remixable: boolean
  setRemixable: (remixable: boolean) => void
}

const PublicModalContent: React.FC<PublicModalContentProps> = ({
  description,
  setDescrption,
  remixable,
  setRemixable,
}) => {
  return (
    <div className="grid w-full gap-2.5">
      <div className="w-full grid gap-1.5">
        <Label htmlFor="description" className="form-control font-montserrat">
          Agent Description
        </Label>
        <Textarea
          id="description"
          value={description}
          onChange={e => setDescrption(e.target.value)}
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
}
