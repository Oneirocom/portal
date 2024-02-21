import { type Prisma } from '@magickml/portal-db'
import babeAGISpell from './baby-agi.spell.json'

export const babyAGITemplate: Prisma.TemplateCreateInput = {
  name: 'Baby AGI',
  description: 'A template for a baby AGI',
  spells: [JSON.stringify(babeAGISpell)],
}
