import { type Prisma } from '@magickml/portal-db'
import blankSpell from './blank.spell.json'

export const blankTemplate: Prisma.TemplateCreateInput = {
  name: 'Blank Template',
  description: 'A blank template to start with',
  spells: [JSON.stringify(blankSpell)],
}
