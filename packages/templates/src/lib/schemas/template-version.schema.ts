import { z } from 'zod'

export const updateTemplateVersionSchema = z.object({
  templateId: z.string(),
  spells: z.array(
    z.object({
      id: z.string().optional(),
      projectId: z.string().optional(),
      name: z.string().optional(),
      graph: z.record(z.unknown()).optional(),
      type: z.string().optional(),
    })
  ),
})

export const getTemplateVersionSchema = z.object({
  templateId: z.string(),
  version: z.number(),
})