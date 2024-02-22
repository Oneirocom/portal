import { type Prisma } from '@magickml/portal-db'
import slackDiscordSpell from './slack.spell.json'
import discordSpell from './discord.spell.json'

export const slackDiscordTemplate: Prisma.TemplateCreateInput = {
  name: 'Slack and Discord',
  description: 'A template setup for basic Slack and Discord messaging.',
  spells: [JSON.stringify(slackDiscordSpell), JSON.stringify(discordSpell)],
}
