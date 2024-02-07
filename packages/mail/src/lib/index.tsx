import nodemailer from 'nodemailer'
import MagickLinkEmail, { ResetLinkEmail } from './emails/MagickLink'
import { render } from '@react-email/components'

export const emailConfig = {
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
  service: process.env.EMAIL_SERVICE,
}

const transporter =
  process.env.PLAYWRIGHT_TESTING === 'true'
    ? nodemailer.createTransport({ port: 4025 })
    : nodemailer.createTransport(emailConfig)

export const sendMail = async ({
  from,
  html,
  subject,
  to,
}: {
  from: string
  html: any
  subject: string
  to: string
}) => {
  const data = {
    from: from ?? process.env.EMAIL_FROM,
    to,
    subject,
    html,
  }
  process.env.NODE_ENV === 'production' ||
  process.env.EMAIL_SERVER_PASSWORD ||
  process.env.PLAYWRIGHT_TESTING === 'true'
    ? await transporter.sendMail(data)
    : console.log(data)
}

export const sendMagicLinkEmail = async ({
  email,
  url,
}: {
  email: string
  url: string
}) => {
  const html = render(<MagickLinkEmail url={url} />)
  await sendMail({
    from: process.env.EMAIL_FROM ?? 'tech@magickml.com',
    to: email,
    subject: 'Your MagickML login link is here',
    html,
  })
}
export const sendResetPasswordEmail = async ({
  email,
  url,
}: {
  email: string
  url: string
}) => {
  const html = render(<ResetLinkEmail url={url} />)
  await sendMail({
    from: process.env.EMAIL_FROM ?? 'tech@magickml.com',
    to: email,
    subject: 'Your Password reset link is here',
    html,
  })
}
