'use client'

import { useEffect, useState } from 'react'
import { TooltipProvider } from '@magickml/client-ui'
import { ChatInterface } from './components/chat-interface'
import { ChatSettings } from './components/chat-settings'
import { AgentProps, ChatInputProps, ChatMessagesProps } from './types'
import { useUser } from '@clerk/nextjs'
import { v4 } from 'uuid'

interface ChatProps {
  agents: AgentProps[]
}
export const Chat = ({ agents }: ChatProps) => {
  const { user } = useUser()
  const prompt = useState<string>('')
  const [messages, setMessages] = useState<ChatMessagesProps['messages']>([])
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [agentId, setAgentId] = useState<string>(
    '0644d18a-401c-4777-85fa-c600801ac685'
  )
  const [agentInfo, setAgentInfo] = useState<any>(null)
  // const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleConnect = () => {
    if (agentId) {
      const socketUrl = `ws://${process.env.NEXT_PUBLIC_AGENT_SERVER_URL}/ws/${agentId}`
      const newSocket = new WebSocket(socketUrl)

      newSocket.onopen = () => {
        console.log('WebSocket connection established')
      }

      newSocket.onmessage = (event: MessageEvent) => {
        console.log('WebSocket message received:', event.data)
        const data = JSON.parse(event.data)

        switch (data.type) {
          case 'message':
            const isStream = typeof data?.responseId === 'number'
            if (!isStream) {
              setMessages(prevMessages => [...prevMessages, data])
            } else {
              setMessages(prevMessages => {
                const messageIndex = prevMessages.findIndex(
                  message => message.responseId === data.responseId
                )
                if (messageIndex !== -1) {
                  const updatedMessage = {
                    ...prevMessages[messageIndex],
                    text: prevMessages[messageIndex].text + data.text,
                  }
                  const updatedMessages = [...prevMessages]
                  updatedMessages[messageIndex] = updatedMessage
                  return updatedMessages
                } else {
                  return [...prevMessages, data]
                }
              })
            }
            break

          case 'audio':
            console.log('Received audio chunk')
            setMessages(prevMessages => {
              const messageIndex = prevMessages.findIndex(
                message => message.responseId === data.responseId
              )
              if (messageIndex !== -1) {
                const updatedMessage = {
                  ...prevMessages[messageIndex],
                  audioChunks: [
                    ...(prevMessages[messageIndex].audioChunks || []),
                    data.data,
                  ],
                }
                if (data.isComplete) {
                  try {
                    const audioData = updatedMessage.audioChunks.join('')
                    const audioArray = new Uint8Array(
                      atob(audioData)
                        .split('')
                        .map(char => char.charCodeAt(0))
                    )
                    const audioBlob = new Blob([audioArray], {
                      type: 'audio/mpeg',
                    })
                    const audioUrl = URL.createObjectURL(audioBlob)
                    updatedMessage.audioUrl = audioUrl
                  } catch (error) {
                    console.error('Error processing audio chunks:', error)
                  }
                }
                const updatedMessages = [...prevMessages]
                updatedMessages[messageIndex] = updatedMessage
                return updatedMessages
              } else {
                return prevMessages
              }
            })
            break
          case 'agentInfo':
            setAgentInfo(data.data)
            break
          case 'status':
            console.log('Status:', data)
            break
          default:
            console.error('Unknown message type:', data.type)
        }
      }

      newSocket.onclose = () => {
        console.log('WebSocket connection closed')
        setSocket(null)
      }

      newSocket.onerror = error => {
        console.error('WebSocket error:', error)
        setSocket(null)
      }

      setSocket(newSocket)
      return () => {
        newSocket.close()
      }
    }
  }

  const handleDisconnect = () => {
    if (socket) {
      socket.close()
    }
    setSocket(null)
  }

  useEffect(() => {
    return () => {
      if (socket) {
        socket.close()
      }
    }
  }, [socket])

  const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      const newMessage = {
        text: prompt[0],
        id: v4(),
        sender: user?.username || user?.id || 'Anonymous',
        type: 'message',
      }
      console.log('Sending message:', newMessage)
      socket.send(JSON.stringify(newMessage))
      setMessages(prevMessages => [...prevMessages, newMessage])
    }
  }

  const chatInputProps: ChatInputProps = {
    textareaProps: {
      placeholder: 'Type your message here...',
      value: prompt[0],
      onChange: event => {
        prompt[1](event.target.value)
      },
    },
    onMessageSend: sendMessage,
    attachButtonProps: {
      onClick: () => {
        console.log('Attach button clicked')
      },
    },
    onAttachClick: () => {
      console.log('Attach button clicked')
    },
    transcriptionProps: {
      onTranscript: event => {
        prompt[1](prompt[0] + event.target.value)
      },
    },
  }

  return (
    <TooltipProvider>
      <main className="grid flex-1 gap-4 overflow-y-auto w-full p-1 md:p-2 lg:p-4 md:grid-cols-2 lg:grid-cols-3">
        <ChatSettings
          agents={agents}
          connected={socket?.OPEN === WebSocket.OPEN}
          connect={handleConnect}
          disconnect={handleDisconnect}
          agentId={[agentId, setAgentId]}
          info={agentInfo}
          messages={messages}
        />
        <ChatInterface
          connected={socket?.OPEN === WebSocket.OPEN}
          chatMessagesProps={{
            messages: messages,
          }}
          chatInputProps={chatInputProps}
        />
      </main>
      {messages.map((message, index) => (
        <audio
          key={index}
          src={message.audioUrl}
          autoPlay
          controls
          style={{ display: 'none' }}
        />
      ))}
    </TooltipProvider>
  )
}
