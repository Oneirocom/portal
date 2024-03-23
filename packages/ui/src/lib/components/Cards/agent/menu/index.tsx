import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Button,
} from '@magickml/client-ui'

import { RenameDialog } from './dialogs/rename-dialog'
import { DeleteDialog } from './dialogs/delete-dialog'
import { PublicDialog } from './dialogs/public-dialog'
import { ImageDialog } from './dialogs/image-dialog'
import { TemplateDialog } from './dialogs/template-dialog'
import Link from 'next/link'

type AgentCardMenuProps = {
  agentId: string | null
  agentName: string | null
  projectId: string | null
  isPublic: boolean | null
  agentDescription: string | null
  openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  deleteModalState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  publicModalState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  renameModalState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  imageModalState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  templateModalState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

export const AgentCardMenu: React.FC<AgentCardMenuProps> = ({
  agentId,
  agentName,
  projectId,
  isPublic,
  agentDescription,
  openState,
  deleteModalState,
  publicModalState,
  renameModalState,
  imageModalState,
  templateModalState,
}) => {
  const [isOpen, setIsOpen] = openState
  const [isPublicDialogOpen, setIsPublicDialogOpen] = publicModalState
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = deleteModalState
  const [isRenameDialogOpen, setIsRenameDialogOpen] = renameModalState
  const [isImageDialogOpen, setIsImageDialogOpen] = imageModalState
  const [isTemplateDialogOpen, setIsTemplateDialogOpen] = templateModalState

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
      action: () => setIsPublicDialogOpen(true),
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
      action: () => setIsImageDialogOpen(true),
      type: 'button',
      enabled: true,
    },
    {
      name: 'Rename',
      action: () => setIsRenameDialogOpen(true),
      type: 'button',
      enabled: true,
    },
    {
      name: 'Create Template',
      action: () => setIsTemplateDialogOpen(true),
      type: 'button',
      enabled: true,
    },
    {
      name: 'Delete',
      action: () => setIsDeleteDialogOpen(true),
      type: 'button',
      enabled: true,
    },
  ]

  return (
    <>
      <PublicDialog
        isOpen={isPublicDialogOpen}
        setIsOpen={setIsPublicDialogOpen}
        agentId={agentId}
        isPublic={isPublic}
        agentDescription={agentDescription}
      />
      <ImageDialog
        isOpen={isImageDialogOpen}
        setIsOpen={setIsImageDialogOpen}
        agentId={agentId}
      />
      <RenameDialog
        isOpen={isRenameDialogOpen}
        setIsOpen={setIsRenameDialogOpen}
        agentId={agentId}
        agentName={agentName}
      />
      <TemplateDialog
        isOpen={isTemplateDialogOpen}
        setIsOpen={setIsTemplateDialogOpen}
        agentId={agentId}
      />
      <DeleteDialog
        isOpen={isDeleteDialogOpen}
        setIsOpen={setIsDeleteDialogOpen}
        agentId={agentId}
        agentName={agentName}
        projectId={projectId}
      />

      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
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
                <DropdownMenuItem key={item.name} asChild>
                  <Link href={item.href ?? '#'} target="_blank">
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem
                  key={item.name}
                  onSelect={item.action ?? (() => {})}
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
