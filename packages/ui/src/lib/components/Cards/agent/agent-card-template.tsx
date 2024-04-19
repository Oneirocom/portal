import { useRef, useState } from 'react'
import { BaseAgentCard } from './base-agent-card'
import { AgentCardFooter } from './agent-card-footer'
import { AgentCardInfo } from './types'
import React from 'react'
import { CreateAgentDialog } from './menu/dialogs/create-agent-dialog'
import { TemplateCardMenu } from './menu/agent-card-template-menu'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/router'

type AgentCardTemplateProps = AgentCardInfo & {
  metadata?: any
  ogAgentId?: string | null
  version?: string | null
}

export const AgentCardTemplate: React.FC<AgentCardTemplateProps> = template => {
  const { user, isSignedIn } = useUser()
  const { push } = useRouter()
  const isAdmin = (role: unknown) => role === 'ADMIN'
  const isCreator = (creator: string | null | undefined) => creator === user?.id

  const footerRef = useRef<HTMLButtonElement>(null)
  const menuState = useState(false)
  const footerState = useState(false)
  const createState = useState(false)
  const updateState = useState(false)
  const updateVersionState = useState(false)
  const deleteState = useState(false)

  const isFooterActive = (e: MouseEvent) => {
    if (footerRef.current) {
      return footerRef.current.contains(e.target as Node)
    }
    return false
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      isFooterActive(e.nativeEvent) ||
      menuState[0] ||
      footerState[0] ||
      createState[0] ||
      updateState[0] ||
      updateVersionState[0] ||
      deleteState[0]
    ) {
      e.stopPropagation()
    } else if (!createState[0]) {
      createState[1](true)
    }
  }

  const handleFooterSubmit = () => {
    footerState[1](false)
    createState[1](true)
  }

  const handleSecondaryClick: React.MouseEventHandler<
    HTMLButtonElement
  > = e => {
    e.preventDefault()
    if (!window) return
    window.open(`/templates/${template.id}`, '_blank')
  }

  return (
    <BaseAgentCard
      agent={template}
      onClick={handleClick}
      menu={
        isSignedIn &&
        (isAdmin(user?.publicMetadata.role) || isCreator(template.creator)) && (
          <TemplateCardMenu
            templateId={template.id}
            templateName={template.name}
            templateVersion={'1'}
            templateDescription={template.description}
            isCreator={isCreator(template.creator)}
            isAdmin={isAdmin(user?.publicMetadata.role)}
            isPublic={template?.isPublic || false}
            openState={menuState}
            updateDialogState={updateState}
            updateVersionDialogState={updateVersionState}
            deleteDialogState={deleteState}
          />
        )
      }
      footer={
        <>
          <AgentCardFooter
            agent={template}
            state={footerState}
            buttonRef={footerRef}
            submitText="Build"
            secondaryText="Preview"
            onSecondaryClick={handleSecondaryClick}
            onSubmit={handleFooterSubmit}
            metadata={template.metadata}
          />
          <CreateAgentDialog templateId={template.id} state={createState} />
        </>
      }
    />
  )
}
