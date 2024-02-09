import { PrismaClient } from '../db'
import { readFileSync } from 'fs'
import path from 'path'
import blankSpell from './templates/blank.spell.json'

const prisma = new PrismaClient()

const sqlFiles = [
  './sql/create_spells_view.sql',
  './sql/create_agents_view.sql',
  './sql/create_documents_view.sql',
]
async function runSqlFile(filePath: string) {
  const fullPath = path.resolve(__dirname, filePath)
  const sqlCommands = readFileSync(fullPath, { encoding: 'utf8' }).split(';')
  for (const sqlCommand of sqlCommands.filter(cmd => cmd.trim())) {
    await prisma.$executeRawUnsafe(sqlCommand)
  }
}

async function main() {
  for (const filePath of sqlFiles) {
    await runSqlFile(filePath)
  }

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
