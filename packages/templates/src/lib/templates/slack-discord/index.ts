import { type Prisma } from '@magickml/portal-db'
import slackDiscordSpell from './slack.spell.json'
import discordSpell from './discord.spell.json'

export const slackDiscordTemplate: Prisma.TemplateCreateInput = {
  id: 'slack-discord',
  name: 'Slack and Discord',
  description:
    'A template setup for basic Slack and Discord messaging.  Great place to start to learn how to connect you agent to platforms.',
  spells: [JSON.stringify(slackDiscordSpell), JSON.stringify(discordSpell)],
  type: 'OFFICIAL',
  public: true,
}
