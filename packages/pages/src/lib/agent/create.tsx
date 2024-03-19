import { PortalLayout, MainLayout } from '@magickml/portal-layout'
import { api } from '@magickml/portal-api-client'
import { FunctionComponent, useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { SlRefresh } from 'react-icons/sl'
import { AgentCardTemplate } from '@magickml/portal-ui'
import { Label, Button, Input, MagickDialog } from '@magickml/client-ui'
import React from 'react'
import Head from 'next/head'

export const CreateAgentPage = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [templateId, setTemplateId] = useState<string | null>('')

  const router = useRouter()

  const { data: templates, isLoading: templatesLoading } =
    api.agents.getTemplates.useQuery()

  const { mutateAsync: create, isLoading: isMakingAgentRemix } =
    api.agents.createFromTemplate.useMutation({
      onSuccess: agent => {
        setOpen(false)
        setName('')
        router.push(`/projects/${agent.project}`)
        setTemplateId('')
      },
      onError: error => {
        setOpen(false)
        setName('')
        setTemplateId('')
        toast.error(error.message)
      },
    })

  const handleRemixAgent = async () => {
    if (!templateId) return
    await create({ name, templateId })
  }

  const onTemplateClick = (templateId: string | null) => {
    if (!templateId) return
    setOpen(true)
    setTemplateId(templateId)
  }

  return (
    <>
      <Head>
        <title>Create an Agent | MagickML</title>
      </Head>
      <h1 className="text-3xl font-semibold">Create an Agent</h1>
      <h3 className="text-2xl font-montAlt text-ds-secondary-p dark:text-ds-secondary-m">
        Select an Official Magick Starter Agents to start from:
      </h3>
      <div className="relative flex flex-wrap justify-center pb-10 gap-x-4 gap-y-4 lg:justify-start">
        {!templatesLoading &&
          templates &&
          templates.map((t, i: number) => (
            <AgentCardTemplate
              key={t.id}
              id={t.id}
              name={t.name ?? 'Untitled'}
              image={t.image}
              description={t?.description ?? ''}
              handleClick={() => onTemplateClick(t.id)}
            />
          ))}
      </div>
      <MagickDialog
        logo={false}
        open={open}
        hideButton={true}
        isLoading={isMakingAgentRemix}
        setOpen={setOpen}
        trigger={<RemixButton onClick={() => setOpen(true)} />}
        title="Name Your Agent"
        description="Using a Template will create a new Agent with the same spell as the Template."
        onSubmit={handleRemixAgent}
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
