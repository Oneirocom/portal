import { z } from 'zod'
import { createTRPCRouter, protectedProcedure } from '../trpc'
import { prepareToken } from '../utils/shared'
import defaultSpell from '../templates/defaultSpell.json'
import { v4 as uuidv4 } from 'uuid'
import md5 from 'md5'
import starterSpell from '../templates/starter.spell.json'
import discordSpell from '../templates/discord.spell.json'

type Spell = {
  id: string
  name: string
}

export const spellsRouter = createTRPCRouter({
  // Create a spell from a graph
  createSpell: protectedProcedure
    .input(
      z.object({
        projectId: z.string(),
        name: z.string(),
        templateId: z.number().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const newToken = await prepareToken(ctx, input)
      const createdSpell = await createSpell(newToken, input)
      return createdSpell as Spell
    }),

  deleteSpell: protectedProcedure
    .input(z.object({ spellId: z.string(), projectId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const newToken = await prepareToken(ctx, input)

      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/spells/${input.spellId}?projectId=${input.projectId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${newToken}`,
          },
        }
      )
    }),
})

const createSpell = async (
  token: string | null,
  input: { projectId: string; name: string; templateId?: number }
) => {
  const graph =
    input.templateId === 1
      ? starterSpell.graph
      : input.templateId === 2
      ? discordSpell.graph
      : defaultSpell.graph
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/spells?projectId=${input.projectId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: `${input.name}-Spell`,
        projectId: input.projectId,
        graph: graph,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        hash: md5(JSON.stringify(defaultSpell.graph.nodes)),
        id: uuidv4(),
      }),
    }
  )

  const data = await response.json()

  return data
}
