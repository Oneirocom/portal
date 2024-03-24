import { prismaCore } from '@magickml/server-db'
import { type Prisma, prismaPortal } from '@magickml/portal-db'
import * as templates from './templates'
import { makeClient } from 'ideClient'
import { ideServerUrl } from './constants'
import { v4 as uuidv4 } from 'uuid'

const app = makeClient(ideServerUrl)

export const baseTemplates: Prisma.TemplateCreateInput[] =
  Object.values(templates)

export const createBaseTemplates = async () => {
  for (const template of baseTemplates) {
    const { id, ...rest } = template
    await prismaPortal.template.upsert({
      where: { id },
      update: rest,
      create: { ...template, type: 'OFFICIAL' },
    })
  }
}

export const createTemplate = async (template: Prisma.TemplateCreateInput) => {
  return prismaPortal.template.create({ data: template })
}

export interface CreateFromAgentInput {
  name: string
  description?: string
  agentId: string
  userId?: string
  type?: 'OFFICIAL' | 'COMMUNITY'
  public?: boolean
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
    userId: input.userId,
    type: input.type || 'OFFICIAL',
    public: input.public || false,
    templateVersions: {
      create: [
        {
          version: 1,
          spells: spells.map(spell => JSON.stringify(spell)),
        },
      ],
    },
  }

  return prismaPortal.template.create({ data: template })
}

interface CreateFromTemplateInput {
  projectName: string
  agentName: string
  templateId: string
  owner: string
}

export const createFromTemplate = async (input: CreateFromTemplateInput) => {
  const { projectName, agentName, templateId, owner } = input

  const template = await prismaPortal.template.findUnique({
    where: { id: templateId },
  })

  if (!template) {
    throw new Error('Template not found')
  }

  const project = await prismaPortal.project.create({
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

  const latestTemplateVersion = await prismaPortal.templateVersion.findFirst({
    where: { templateId },
    orderBy: { version: 'desc' },
  })

  if (!latestTemplateVersion) {
    throw new Error('No template version found')
  }

  const templateSpells = latestTemplateVersion.spells as {
    name: string
    graph: any
  }[]

  for (const tspell of templateSpells) {
    const input = {
      id: uuidv4(),
      projectId: project.id,
      name: tspell?.name,
      graph: tspell?.graph || {},
      type: 'behave',
    }

    await app.service('spells').create(input)
  }

  await incrementTemplateUsage(templateId)

  return {
    project: project.id,
  }
}

export const removeTemplate = async (templateId: string) => {
  const template = await prismaPortal.template.findUnique({
    where: { id: templateId },
  })

  if (!template) {
    throw new Error('Template not found')
  }

  await prismaPortal.template.update({
    where: { id: templateId },
    data: { deletedAt: new Date() },
  })
}

export const rateTemplate = async (
  templateId: string,
  userId: string,
  rating: number
) => {
  const existingRating = await prismaPortal.templateRating.findUnique({
    where: {
      templateId_userId: {
        templateId,
        userId,
      },
    },
  })

  if (existingRating) {
    return prismaPortal.templateRating.update({
      where: {
        id: existingRating.id,
      },
      data: {
        rating,
        updatedAt: new Date(),
      },
    })
  } else {
    return prismaPortal.templateRating.create({
      data: {
        templateId,
        userId,
        rating,
      },
    })
  }
}

export const getTemplateRating = async (templateId: string) => {
  const ratings = await prismaPortal.templateRating.findMany({
    where: {
      templateId,
    },
  })

  const totalRating = ratings.reduce((sum, rating) => sum + rating.rating, 0)
  const averageRating = totalRating / ratings.length

  return {
    averageRating,
    totalRatings: ratings.length,
  }
}

export const incrementTemplateUsage = async (templateId: string) => {
  return prismaPortal.template.update({
    where: {
      id: templateId,
    },
    data: {
      usageCount: {
        increment: 1,
      },
    },
  })
}

export const updateTemplateVersion = async (
  templateId: string,
  spells: string[]
) => {
  const latestVersion = await prismaPortal.templateVersion.findFirst({
    where: { templateId },
    orderBy: { version: 'desc' },
  })

  const newVersion = (latestVersion?.version || 0) + 1

  return prismaPortal.templateVersion.create({
    data: {
      templateId,
      version: newVersion,
      spells: spells.map(spell => JSON.stringify(spell)),
    },
  })
}

export const getTemplateVersion = async (
  templateId: string,
  version: number
) => {
  return prismaPortal.templateVersion.findUnique({
    where: {
      templateId_version: {
        templateId,
        version,
      },
    },
  })
}

export interface CreateTemplateCollectionInput {
  name: string
  description?: string
  templates: {
    templateId: string
    version: number
  }[]
}

export const createTemplateCollection = async (
  input: CreateTemplateCollectionInput
) => {
  const { name, description, templates } = input

  const templateData = await Promise.all(
    templates.map(async ({ templateId, version }) => {
      const templateVersion = await getTemplateVersion(templateId, version)
      if (!templateVersion) {
        throw new Error(`Template version not found: ${templateId} v${version}`)
      }
      return {
        templateId,
        version,
        spells: templateVersion.spells,
      }
    })
  )

  return prismaPortal.templateCollection.create({
    data: {
      name,
      description,
      templates: JSON.stringify(templateData),
    },
  })
}

export const getTemplateCollection = async (collectionId: string) => {
  const collection = await prismaPortal.templateCollection.findUnique({
    where: { id: collectionId },
  })

  if (!collection) {
    throw new Error('Template collection not found')
  }

  const templateData = collection.templates as {
    templateId: string
    version: number
    spells: string[]
  }[]

  const templatesWithDetails = await Promise.all(
    templateData.map(async ({ templateId, version, spells }) => {
      const template = await prismaPortal.template.findUnique({
        where: { id: templateId },
      })
      return {
        ...template,
        version,
        spells,
      }
    })
  )

  return {
    ...collection,
    templates: templatesWithDetails,
  }
}
