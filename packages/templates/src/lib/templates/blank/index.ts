import { type Prisma } from '@magickml/portal-db'
import blankSpell from './blank.spell.json'

export const blankTemplate: Prisma.TemplateCreateInput = {
  id: 'blank',
  name: 'Blank Template',
  description:
    'A totally empty agent.  This is a great place to start if you want to build an agent from scratch.',
  spells: [JSON.stringify(blankSpell)],
}
