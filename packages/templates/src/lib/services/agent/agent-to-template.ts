import { prismaCore } from '@magickml/server-db'
import { prismaPortal, type Prisma, TemplateType } from '@magickml/portal-db'

/**
 * Represents the input data for creating a template from an agent.
 */
export interface CreateFromAgentInput {
  name: string
  description?: string
  agentId: string
  userId?: string
  type?: TemplateType
  public?: boolean
}

/**
 * Creates a new template from an agent with the provided input data.
 *
 * @param input - The input data for creating the template.
 * @returns The created template.
 * @throws Error if the specified agent is not found.
 */
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
    type: input.type || TemplateType.COMMUNITY,
    public: input.public || false,
    templateVersions: {
      create: [
        {
          version: 1,
          spells,
        },
      ],
    },
  }

  return prismaPortal.template.create({ data: template })
}
