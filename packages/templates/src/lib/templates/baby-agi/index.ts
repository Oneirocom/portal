import { type Prisma } from '@magickml/portal-db'
import babeAGISpell from './baby-agi.spell.json'

export const babyAGITemplate: Prisma.TemplateCreateInput = {
  id: 'baby-agi',
  name: 'Baby AGI',
  description:
    'Baby AGI is an AI originally created by Yohei Nakajima.  It is a fully autononomous task oriented agent. Give it an objective and watch as it executes it.  A great way to get started with AGI.  Be aware that running BabyAGI can be expensive.',
  spells: [JSON.stringify(babeAGISpell)],
}
