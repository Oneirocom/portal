import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components'
import { Tailwind } from '@react-email/components'

import * as React from 'react'

const baseUrl = process.env.APP_URL ? `${process.env.APP_URL}` : ''

type EmailProps = {
  url: string
}

const EmailFooter = () => {
  return (
    <>
      <Section>
        <Row style={footerLogos}>
          <Column style={{ width: '66%' }}>
            <Link href="https://magickml.com">
              <Img
                src={`${baseUrl}/images/magick-icon.png`}
                width="36"
                height="30"
                alt="MagickML"
              />
            </Link>
          </Column>
          <Column>
            <Row>
              <Column>
                <Link href="https://bit.ly/magick-discord-cloud">
                  <Img
                    src={`${baseUrl}/images/providers/Discord.png`}
                    width="32"
                    height="32"
                    alt="Discord"
                    style={socialMediaIcon}
                  />
                </Link>
              </Column>
            </Row>
          </Column>
          <Column>
            <Row>
              <Column>
                <Link href="https://twitter.com/MagickML">
                  <Img
                    src={`${baseUrl}/images/providers/X.png`}
                    width="32"
                    height="32"
                    alt="Twitter"
                    style={socialMediaIcon}
                  />
                </Link>
              </Column>
            </Row>
          </Column>
        </Row>
      </Section>

      <Section>
        <Text style={footerText}>
          ©2023 ONEIROCOM SYSTEMS INC. <br />
          <br />
          All rights reserved.
        </Text>
      </Section>
    </>
  )
}

export const MagickLinkEmail = ({ url }: EmailProps) => (
  <Html>
    <Tailwind>
      <Head />
      <Preview>MagickML Login Link</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src={`${baseUrl}/images/magick-logo-blue.png`}
              width="180"
              height="30"
              alt="Slack"
            />
          </Section>
          <Heading style={h1}>Here&apos;s your login link</Heading>
          <Text style={heroText}>
            Your login link is below - click it to log in to your account.
          </Text>
          <Section style={body}>
            <Text style={paragraph}>
              <Link style={link} href={url}>
                Click here to sign in
              </Link>
            </Text>
          </Section>

          <Text style={text}>
            If you didn&apos;t request this email, there&apos;s nothing to worry
            about - you can safely ignore it.
          </Text>

          <EmailFooter />
        </Container>
      </Body>
    </Tailwind>
  </Html>
)

export const ResetLinkEmail = ({ url }: EmailProps) => (
  <Html>
    <Tailwind>
      <Head />
      <Preview>MagickML Reset Password Link</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src={`${baseUrl}/images/magick-logo-blue.png`}
              width="180"
              height="30"
              alt="Slack"
            />
          </Section>
          <Text style={heroText}>Hello,</Text>
          <Text style={heroText}>
            You have requested to reset your password for your MagickML account.
          </Text>
          <Section style={body}>
            <Text style={paragraph}>
              <Link style={link} href={url}>
                Click here to reset your password
              </Link>
            </Text>
          </Section>

          <Text style={text}>This link will expire in 1 hour.</Text>
          <Text style={text}>Thanks,</Text>
          <Text style={text}>The MagickML Team</Text>

          <EmailFooter />
        </Container>
      </Body>
    </Tailwind>
  </Html>
)

export default MagickLinkEmail

const footerText = {
  fontSize: '12px',
  color: '#b7b7b7',
  lineHeight: '15px',
  textAlign: 'left' as const,
  marginBottom: '50px',
}

const footerLogos = {
  marginBottom: '32px',
  paddingLeft: '8px',
  paddingRight: '8px',
  width: '100%',
}

const socialMediaIcon = {
  display: 'inline',
  marginLeft: '32px',
  color: 'black',
}

const main = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
}

const container = {
  maxWidth: '600px',
  margin: '0 auto',
}

const logoContainer = {
  marginTop: '32px',
}

const h1 = {
  color: '#1d1c1d',
  fontSize: '36px',
  fontWeight: '700',
  margin: '30px 0',
  padding: '0',
  lineHeight: '42px',
}

const heroText = {
  fontSize: '20px',
  lineHeight: '28px',
  marginBottom: '30px',
}

const body = {
  margin: '24px 0',
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
}

const text = {
  color: '#000',
  fontSize: '14px',
  lineHeight: '24px',
}

const link = {
  color: '#1BC5EB',
}
