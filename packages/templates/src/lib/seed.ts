import { PrismaClient } from '../../../db/src/lib/prisma/client-portal'
import { type Prisma } from '@magickml/portal-db'
import {
  blankTemplate,
  babyAGITemplate,
  slackDiscordTemplate,
} from './templates'

export const baseTemplates: Prisma.TemplateCreateInput[] = [
  blankTemplate,
  babyAGITemplate,
  slackDiscordTemplate,
]

const prisma = new PrismaClient()

async function main() {
  console.log(await prisma.template.createMany({ data: baseTemplates }))
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
