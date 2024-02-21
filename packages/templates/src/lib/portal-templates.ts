import { type Prisma, prisma } from '@magickml/portal-db'

import { blankTemplate, babyAGITemplate } from './templates'

export const baseTemplates: Prisma.TemplateCreateInput[] = [
  blankTemplate,
  babyAGITemplate,
]

export const createBaseTemplates = async () => {
  return await prisma.template.createMany({ data: baseTemplates })
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
  const agent = await prisma.agents.findUnique({
    where: { id: input.agentId },
    select: { projectId: true },
  })

  if (!agent) {
    throw new Error('Agent not found')
  }

  const spells = await prisma.spells.findMany({
    where: { projectId: agent.projectId },
  })

  const template: Prisma.TemplateCreateInput = {
    name: input.name,
    description: input.description,
    spells: spells.map(spell => JSON.stringify(spell)),
  }

  return prisma.template.createMany({ data: [template] })
}
