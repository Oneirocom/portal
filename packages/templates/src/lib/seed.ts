import { PrismaClient } from '../../../db/src/lib/prisma/client-portal'
import { type Prisma } from '@magickml/portal-db'
import * as templates from './templates'

export const baseTemplates: Prisma.TemplateCreateInput[] =
  Object.values(templates)

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding templates...')
  for (const t of baseTemplates) {
    const { id, name, description, image, type, spells, ...rest } = t

    // Check if the template already exists
    const existingTemplate = await prisma.template.findUnique({
      where: { id },
    })

    if (existingTemplate) {
      console.log(`Template ${id}: ${name} already exists, skipping...`)
      continue
    }

    // Create a new template record
    const template = await prisma.template.create({
      data: {
        name,
        description,
        image,
        type,
        public: t.public || true,
      },
    })

    // Create a new template version record
    await prisma.templateVersion.create({
      data: {
        templateId: template.id,
        version: 1,
        spells,
      },
    })

    console.log(`Template ${id}: ${name} created`)
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
