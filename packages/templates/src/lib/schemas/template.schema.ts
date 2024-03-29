import { z } from 'zod'
import { TemplateType } from '@magickml/portal-db'

export const findTemplatesSchema = z.object({
  type: z.nativeEnum(TemplateType).optional().default(TemplateType.OFFICIAL),
  self: z.boolean().optional(),
})

export const createTemplateSchema = z.object({
  agentId: z.string(),
  name: z.string(),
  description: z.string().optional(),
  public: z.boolean().optional(),
  type: z.nativeEnum(TemplateType).optional(),
})

export const updateTemplateSchema = z.object({
  templateId: z.string(),
  name: z.string().optional(),
  description: z.string().optional(),
  public: z.boolean().optional(),
})

export const deleteTemplateSchema = z.object({
  templateId: z.string(),
})
