import { PrismaClient } from '../../../db/src/lib/prisma/client-portal'
import { type Prisma } from '@magickml/portal-db'
import * as templates from './templates'

export const baseTemplates: Prisma.TemplateCreateInput[] =
  Object.values(templates)

const prisma = new PrismaClient()

async function main() {
  for (const template of baseTemplates) {
    const { id, ...rest } = template
    await prisma.template.upsert({
      where: { id },
      update: rest,
      create: template,
    })
  }
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
