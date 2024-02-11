import { PrismaClient } from '@prisma/client-portal'
import blankSpell from './templates/blank.spell.json'

const prisma = new PrismaClient()

async function main() {
  // Create template
  const template = await prisma.template.create({
    data: {
      name: 'BLANK AGENT',
      description:
        'Start a new agent from scratch. Choose this is you want to start a new project and adjust it in the editor from scratch.',
      graph: blankSpell,
    },
  })

  console.log({ template })
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
