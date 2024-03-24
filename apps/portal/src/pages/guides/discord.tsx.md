import React from 'react'
import { MainLayout, PortalLayout } from '@magickml/portal-layout'
import { Button, Card, CardContent, CardTitle } from '@magickml/client-ui'

export default function DiscordGuide() {
  return <Content />
}

DiscordGuide.getLayout = (page: React.ReactElement) => {
  return (
    <PortalLayout>
      <MainLayout classNames="p-2 lg:p-10 flex flex-col items-center relative">
        {page}
      </MainLayout>
    </PortalLayout>
  )
}

type Props = {}

{
  ;` What's a Discord Token?`
}

const intro: SectionProps = {
  content: [
    {
      key: 'intro',
      title: `What's a Discord Token?`,
      content: (
        <>
          <span>
            To bring your Magick agent into Discord, you'll need a Discord
            developer account. This allows you to create a bot, add it to
            servers, and interact through chat. Upon creating your bot, Discord
            gives you a unique code, known as the{' '}
          </span>
          <span className="text-lg font-bold ">bot token</span>
          <span className="text-base font-normal ">
            . Simply enter this code in the field above, and we'll handle the
            rest.
          </span>
        </>
      ),
    },
  ],
}

const guide: SectionProps = {
  title: `Step-by-Step Guide to Obtain Your Discord Token`,
  content: [
    {
      key: 'step1',
      title: 'Access the Discord Developer Portal',
      content: (
        <>
          <span>Click the button below to navigate there directly!</span>
          <Button variant="portal-primary" size="md" className="w-64">
            Discord Developer Portal
          </Button>
        </>
      ),
    },
    {
      key: 'step2',
      title: 'Create a New Application',
      content: (
        <>
          <ol className="list-decimal">
            <li>Select "New Application".</li>
            <li>Name your agent, agree to the terms, and click “Create”.</li>
          </ol>
          <div className="w-full h-auto aspect-video rounded-[5px] border border-ds-neutral" />
        </>
      ),
    },
    {
      key: 'step3',
      title: 'Customize Agent Details',
      content: (
        <>
          <p>
            {`In the “General Information” tab, add desired information and change
            the profile picture (pfp) by uploading your image. Remember to save
            changes.`}
          </p>
          <div className="w-full h-auto aspect-video rounded-[5px] border border-ds-neutral" />
        </>
      ),
    },
    {
      key: 'step4',
      title: 'Enable Bot for Server Addition',
      content: (
        <>
          <ol className="list-decimal">
            <li>{`Navigate to the "OAuth2" tab.`}</li>
            <li>
              {`Under 'Authorization Method', choose "In-app Authorization".`}
            </li>
            <li>{`Select “bot”.`}</li>
            <li>
              {`Grant bot permissions for “Read Messages/View Channels” and “Send Messages”.`}
            </li>
            <li>{`Copy the generated URL and paste it in a new tab.`}</li>
          </ol>
          <div className="w-full h-auto aspect-video rounded-[5px] border border-ds-neutral" />
        </>
      ),
    },
    {
      key: 'step5',
      title: 'Enable Intents and Generate Token',
      content: (
        <>
          <ol className="list-decimal">
            <li>{`Switch to the "Bot" tab.`}</li>
            <li>
              {`Enable “Message Content Intent” and “Server Members Intent”.`}
            </li>
            <li>{`“Reset Token”, then “Copy” the bot token.`}</li>
            <li>{`Share the copied Discord Token with us below.`}</li>
          </ol>

          <div className="w-full h-auto aspect-video rounded-[5px] border border-ds-neutral" />
        </>
      ),
    },
  ],
}

const troubleshooting: SectionProps = {
  title: `Troubleshooting`,
  content: [],
}

const Content = (props: Props) => {
  return (
    <div className="flex flex-col max-w-4xl gap-y-10 w-full mx-auto ">
      <h1 className=" text-white text-[45px] font-bold font-montAlt">
        Discord Token
      </h1>

      <Section {...intro} />

      <Section {...guide} />

      <Section {...troubleshooting} />
    </div>
  )
}

type SectionProps = {
  title?: string
  content: ContentCardProps[]
}

const Section: React.FC<SectionProps> = ({ title, content }) => {
  return (
    <div className="w-full flex flex-col gap-y-2">
      {title && (
        <h2 className="text-white text-3xl font-normal font-berkley-mono">
          {title}
        </h2>
      )}
      {content.map(item => (
        <ContentCard {...item} key={item.key} />
      ))}
    </div>
  )
}

interface ContentCardProps {
  title: string
  content: React.ReactNode
  key: string
}

const ContentCard: React.FC<ContentCardProps> = ({ title, content }) => {
  return (
    <Card className="w-full rounded-[5px] flex-col justify-start items-start gap-8 inline-flex px-8 py-14">
      <CardContent className="inline-flex flex-col">
        {title && (
          <CardTitle className="text-3xl font-normal !text-left !font-berkley-mono pb-8">
            {title}
          </CardTitle>
        )}
        {content}
      </CardContent>
    </Card>
  )
}
