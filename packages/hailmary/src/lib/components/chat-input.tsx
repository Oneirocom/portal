'use client'

import React from 'react'
import { ChatInputProps } from '../types'
import {
  Label,
  Textarea,
  Button,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@magickml/client-ui'
import {
  Paperclip,
  CornerDownLeft,
  // Mic
} from 'lucide-react'
import dynamic from 'next/dynamic'

const ChatTranscription = dynamic(() => import('./chat-transcription'), {
  ssr: false,
})

export const ChatInput: React.FC<ChatInputProps> = ({
  textareaProps,
  onMessageSend,
  attachButtonProps,
  onAttachClick,
  transcriptionProps,
}) => {
  return (
    <>
      <form
        className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
        onSubmit={e => {
          e.preventDefault()
          onMessageSend(textareaProps.value as string)
        }}
      >
        <Label htmlFor="message" className="sr-only">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Type your message here..."
          className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
          {...textareaProps}
        />
        <div className="flex items-center p-3 pt-0">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                type="button"
                onClick={onAttachClick}
                {...attachButtonProps}
                disabled
              >
                <Paperclip className="size-4" />
                <span className="sr-only">Attach file</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Attach File</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <ChatTranscription {...transcriptionProps} />
            </TooltipTrigger>
            <TooltipContent side="top">Use Microphone</TooltipContent>
          </Tooltip>
          <Button
            type="submit"
            variant="portal-primary"
            size="sm"
            className="ml-auto gap-1.5"
          >
            Send Message
            <CornerDownLeft className="size-3.5" />
          </Button>
        </div>
      </form>
    </>
  )
}
