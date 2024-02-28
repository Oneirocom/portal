import { type Prisma } from '@magickml/portal-db'
import knowledgeBotSpell from './knowledge-bot.spell.json'

export const knowledgeBotTemplate: Prisma.TemplateCreateInput = {
  id: 'knowledge-bot',
  name: 'Knowledge Bot',
  description:
    'This template is a very basic agent which demonstrates how to query knowledge from the agents knowledge base. Be sure to use the knowledge tab to add knowledge into the agent.',
  spells: [JSON.stringify(knowledgeBotSpell)],
}
