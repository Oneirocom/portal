import { useRef, useState } from 'react'
import { BaseAgentCard } from './base-agent-card'
import { AgentCardFooter } from './agent-card-footer'
import { AgentCardInfo } from './types'
import React from 'react'
import { Input, Label, MagickDialog } from '@magickml/client-ui'
import { api } from '@magickml/portal-api-client'
import toast from 'react-hot-toast'

type AgentCardTemplateProps = AgentCardInfo & {}

export const AgentCardTemplate: React.FC<AgentCardTemplateProps> = agent => {
  const footerState = useState(false)
  const footerRef = useRef<HTMLButtonElement>(null)
  const createState = useState(false)

  const isFooterActive = (e: MouseEvent) => {
    if (footerRef.current) {
      return footerRef.current.contains(e.target as Node)
    }
    return false
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isFooterActive(e.nativeEvent) || footerState[0]) {
      e.stopPropagation()
    } else if (!createState[0]) {
      createState[1](true)
    }
  }

  const handleFooterSubmit = () => {
    footerState[1](false)
    createState[1](true)
  }

  return (
    <BaseAgentCard
      agent={agent}
      onClick={handleClick}
      footer={
        <>
          <AgentCardFooter
            agent={agent}
            state={footerState}
            buttonRef={footerRef}
            submitText="Build"
            onSubmit={handleFooterSubmit}
          />
          <CreateDialog templateId={agent.id} state={createState} />
        </>
      }
    />
  )
}

type CreateDialogProps = {
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  templateId: string
}

const CreateDialog: React.FC<CreateDialogProps> = ({ state, templateId }) => {
  const [open, setOpen] = state
  const [name, setName] = useState('')

  const { mutateAsync: create, isLoading } =
    api.agents.createFromTemplate.useMutation({
      onSuccess: agent => {
        setOpen(false)
        setName('')
        window.open(`/projects/${agent.project}`, '_blank')
      },
      onError: error => {
        setOpen(false)
        setName('')
        toast.error(error.message)
      },
    })

  const handleCreate = async () => {
    if (!name) {
      toast.error('Please enter a name for your agent.')
      return
    }
    await create({ templateId, name })
  }

  return (
    <MagickDialog
      logo={false}
      open={open}
      hideButton={true}
      isLoading={isLoading}
      setOpen={setOpen}
      title="Name Your Agent"
      description="Using a Template will create a new Agent with the same spell as the Template."
      onSubmit={handleCreate}
      submitText="Create"
      submitDisabled={!name}
    >
      <Label htmlFor="name" className="text-left">
        Name your agent
      </Label>
      <Input
        id="agentName"
        autoComplete="off"
        value={name}
        onChange={e => setName(e.target.value)}
        className="focus:border-secondary-highlight bg-ds-card-alt placeholder:font-montserrat placeholder:text-black/70 dark:placeholder:text-white/70 w-full p-2 border-2 border-[#808f9a] rounded-[8px] dark:text-white"
        placeholder="Tom Bombadil"
      />
    </MagickDialog>
  )
}
