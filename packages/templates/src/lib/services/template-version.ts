import { prismaPortal } from '@magickml/portal-db'

/**
 * Updates the version of a template by creating a new version with the provided spells.
 *
 * @param templateId - The ID of the template to update.
 * @param spells - The array of spells for the new version.
 * @returns The newly created template version.
 */
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
      spells,
    },
  })
}

/**
 * Retrieves a specific version of a template or the latest version if 'latest' is provided.
 *
 * @param templateId - The ID of the template.
 * @param version - The version number to retrieve or 'latest' for the most recent version.
 * @returns The requested template version or null if not found.
 */
export const getTemplateVersion = async (
  templateId: string,
  version: number | 'latest'
) => {
  if (version === 'latest') {
    return prismaPortal.templateVersion.findFirst({
      where: { templateId },
      orderBy: { version: 'desc' },
    })
  }

  return prismaPortal.templateVersion.findUnique({
    where: {
      templateId_version: {
        templateId,
        version,
      },
    },
  })
}
