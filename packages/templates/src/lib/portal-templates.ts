import { prismaCore } from '@magickml/server-db'
import { type Prisma, prisma } from '@magickml/portal-db'
import {
  blankTemplate,
  babyAGITemplate,
  slackDiscordTemplate,
} from './templates'
import { makeClient } from 'ideClient'
import { ideServerUrl } from './constants'
import { v4 as uuidv4 } from 'uuid'

const app = makeClient(ideServerUrl)

export const baseTemplates: Prisma.TemplateCreateInput[] = [
  blankTemplate,
  babyAGITemplate,
  slackDiscordTemplate,
]

export const createBaseTemplates = async () => {
  for (const template of baseTemplates) {
    const { id, ...rest } = template
    await prisma.template.upsert({
      where: { id },
      update: rest,
      create: template,
    })
  }
}

export const createTemplate = async (template: Prisma.TemplateCreateInput) => {
  return prisma.template.create({ data: template })
}

export interface CreateFromAgentInput {
  name: string
  description?: string
  agentId: string
}

export const createFromAgent = async (input: CreateFromAgentInput) => {
  const agent = await prismaCore.agents.findUnique({
    where: { id: input.agentId },
    select: { projectId: true },
  })

  if (!agent) {
    throw new Error('Agent not found')
  }

  const spells = await prismaCore.spells.findMany({
    where: { projectId: agent.projectId },
  })

  const template: Prisma.TemplateCreateInput = {
    name: input.name,
    description: input.description,
    spells: spells.map(spell => JSON.stringify(spell)),
  }

  return prisma.template.createMany({ data: [template] })
}

interface CreateFromTemplateInput {
  projectName: string
  agentName: string
  templateId: string
  owner: string
}
export const createFromTemplate = async (input: CreateFromTemplateInput) => {
  const { projectName, agentName, templateId, owner } = input
  const template = await prisma.template.findUnique({
    where: { id: templateId },
  })

  if (!template) {
    throw new Error('Template not found')
  }

  const project = await prisma.project.create({
    data: {
      name: projectName,
      description: `project for ${agentName}`,
      owner,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  })

  await app.service('projects').create({
    name: projectName,
    projectId: project.id,
  })

  const templateSpells = template.spells.map(spell => JSON.parse(spell))

  for (const tspell of templateSpells) {
    console.log('tspell', tspell.graph)
    const input = {
      id: uuidv4(),
      projectId: project.id,
      name: tspell?.name,
      graph: tspell?.graph || {},
      type: 'behave',
    }

    await app.service('spells').create(input)
  }

  return {
    project: project.id,
  }
}
