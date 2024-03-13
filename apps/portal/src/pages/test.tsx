import { MainLayout, PortalLayout } from '@magickml/portal-layout'
import {
  ChatWindow,
  type ChatMessage,
  MARKDOWN_TEST_MESSAGE,
} from 'chat-window'
import { useState } from 'react'

export default function Page() {
  return <ChatTest />
}

Page.getLayout = function getLayout(page: any) {
  return (
    <PortalLayout>
      <MainLayout classNames="">{page}</MainLayout>
    </PortalLayout>
  )
}

const ChatTest = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isResponding, setIsResponding] = useState(false)

  const handleSend = (message: string) => {
    // Add user message to the messages array
    setMessages(prevMessages => [
      ...prevMessages,
      { sender: 'User', message, entity: 'user' },
    ])

    // Simulate agent response
    setIsResponding(true)
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        {
          sender: 'Agent',
          message: MARKDOWN_TEST_MESSAGE,
          entity: 'agent',
        },
      ])
      setIsResponding(false)
    }, 1000)
  }

  return (
    <>
      <ChatWindow
        messages={messages}
        onSend={handleSend}
        isResponding={isResponding}
        agentName={'Agent'}
        agentAvatar="/images/default/image-1.webp"
      />
      <pre>{JSON.stringify(messages, null, 2)}</pre>
    </>
  )
}
