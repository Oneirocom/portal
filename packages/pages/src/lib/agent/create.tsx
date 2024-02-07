import { PortalLayout, MainLayout } from '@magickml/portal-layout'
import { api } from '@magickml/portal-api-client'
import { FunctionComponent, useState } from 'react'
import { useAtomValue } from 'jotai'
import { workspaceAtom } from '@magickml/portal-state'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { SlRefresh } from 'react-icons/sl'
import {
  Label,
  Button,
  Input,
  MagickDialog,
  AgentCardTemplate,
  //   AgentIcon,
} from '@magickml/portal-ui'
// import {
//   OtherEventTypes,
//   PublicEventTypes,
// } from '@magickml/portal-utils-shared'
import React from 'react'
import Head from 'next/head'

export const CreateAgentPage = ({
  initialTemplateAgents,
  initialRemixableAgents,
}) => {
  const [open, setOpen] = useState<boolean>(false)
  const workspaceId = useAtomValue(workspaceAtom)?.id
  const [name, setName] = useState<string>('')
  const [agentId, setAgentId] = useState<string>('')

  const router = useRouter()

  const { data: templateAgents, isLoading: templateAgentsLoading } =
    api.publicAgents.getTemplateAgents.useQuery(undefined, {
      initialData: initialTemplateAgents,
      refetchInterval: 1000 * 60 * 1,
    })

  const { mutateAsync: remixAgent, isLoading: isMakingAgentRemix } =
    api.publicAgents.remix.useMutation({
      onSuccess: agent => {
        setOpen(false)
        setName('')
        router.push(`/agents/${agent.id}`)
        setAgentId('')
      },
      onError: error => {
        setOpen(false)
        setName('')
        setAgentId('')
        toast.error(error.message)
      },
    })

  const handleRemixAgent = async () => {
    if (!name) {
      toast.error("New Agent's name should be set!")
      return
    }
    await remixAgent({ publicAgentId: agentId, workspaceId, name })
  }

  const onAgentClick = (agentId: string | null) => {
    if (!agentId) return
    setOpen(true)
    setAgentId(agentId)
  }

  return (
    <>
      <Head>
        <title>Create an Agent | MagickML</title>
      </Head>
      <h1 className="text-3xl font-semibold">Create an Agent</h1>
      <p className="text-lg font-medium text-ds-secondary-p dark:text-ds-secondary-m">
        {`Choose from a selection of our Official Magick Starter Agents or other Community Agents that you would like to customize and make your own!`}
      </p>
      <h3 className="text-2xl font-montAlt text-ds-secondary-p dark:text-ds-secondary-m">
        Select an Official Magick Starter Agents to start from:
      </h3>
      <div className="relative flex flex-wrap justify-center pb-10 gap-x-4 gap-y-4 lg:justify-start">
        {!templateAgentsLoading &&
          templateAgents &&
          templateAgents.map((agent, i: number) => (
            <AgentCardTemplate
              key={agent.id}
              id={agent.id}
              name={agent.name ?? 'Untitled'}
              image={agent.image}
              description={agent?.description ?? ''}
              handleClick={() => onAgentClick(agent.publicAgentId)}
            />
          ))}
      </div>
      <MagickDialog
        open={open}
        hideButton={true}
        isLoading={isMakingAgentRemix}
        setOpen={setOpen}
        trigger={<RemixButton onClick={() => setOpen(true)} />}
        title="Remix Agent"
        description="Remixing an agent will create a new agent with the same spell as the original agent. The new agent will be owned by you and will be placed in your workspace."
        onSubmit={handleRemixAgent}
        submitText="Remix"
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
          className="focus:border-secondary-highlight placeholder:font-montserrat placeholder:text-black/70 dark:placeholder:text-white/70 w-full p-2 bg-transparent border-2 border-[#808f9a] rounded-[8px] dark:text-white"
          placeholder="Tom Bombadil"
        />
      </MagickDialog>
    </>
  )
}

CreateAgentPage.getLayout = (page: React.ReactElement) => {
  return (
    <PortalLayout>
      <MainLayout classNames="p-2 lg:p-10 gap-y-4">{page}</MainLayout>
    </PortalLayout>
  )
}

type RemixButtonProps = {
  onClick: () => void
}

const RemixButton: FunctionComponent<RemixButtonProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick} variant="agent" size="sm">
      <SlRefresh className="text-lg lg:mr-1" />
      <span className="hidden lg:flex">Remix</span>
    </Button>
  )
}
