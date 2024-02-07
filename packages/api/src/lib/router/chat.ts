import { z } from 'zod'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'
import { checkIfUserIsMember } from '../utils/shared'
import { trackServerEvent } from '@magickml/portal-utils-server'
import { PrivateEventTypes, PublicEventTypes } from '@magickml/portal-utils-shared'

export const chatRouter = createTRPCRouter({
  privateChat: protectedProcedure
    .input(
      z.object({
        agentId: z.string(),
        sessionId: z.string(),
        workspaceId: z.string(),
        prompt: z.string().optional(),
        sender: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        const access = await checkIfUserIsMember(
          input.workspaceId,
          ctx.session.user.id,
          false
        )

        if (!access) {
          throw new Error('User is not a member of the specified workspace')
        }

        trackServerEvent(
          PrivateEventTypes.AGENT_PRIVATE_MESSAGE,
          ctx.session?.user.email ?? '',
          input.agentId
        )

        const response = await agentPOST(
          input.agentId,
          input.prompt || '',
          input.sender || '',
          input.sessionId
        )

        const responseJSON = await response.json()
        checkForRestError(responseJSON)

        const responseString = parseAgentOutput(responseJSON)

        trackServerEvent(
          PrivateEventTypes.AGENT_PRIVATE_RESPONSE,
          ctx.session?.user.email ?? '',
          input.agentId
        )
        return responseString || ''
      } catch (error) {
        console.error('private chat error', error)
      }
    }),

  publicChat: publicProcedure
    .input(
      z.object({
        agentId: z.string(),
        prompt: z.string().optional(),
        sender: z.string().optional(),
        sessionId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      trackServerEvent(
        PublicEventTypes.AGENT_PUBLIC_MESSAGE,
        ctx.session?.user.email ?? '',
        input.agentId
      )

      try {
        // todo we need to create a better UUID for anomymous users
        const response = await agentPOST(
          input.agentId,
          input.prompt || '',
          input.sender || 'anonymous',
          input.sessionId
        )

        const responseJSON = await response.json()

        checkForRestError(responseJSON)

        const responseString = parseAgentOutput(responseJSON)

        trackServerEvent(
          PublicEventTypes.AGENT_PUBLIC_RESPONSE,
          ctx.session?.user.email ?? '',
          input.agentId
        )

        return responseString || ''
      } catch (err) {
        console.error('Error talking to agent', err)
      }
    }),
})

async function agentPOST(
  id: string,
  prompt: string,
  sender: string,
  sessionId: string
): Promise<Response> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.CLOUD_AGENT_KEY || '',
    },
    body: JSON.stringify({
      agentId: id,
      content: prompt,
      isCloud: true,
      client: 'cloud',
      sessionId,
      sender,
    }),
  })
}

const checkForRestError = (responseJSON: any) => {
  if (responseJSON.code === 500) {
    throw new Error('Error talking to agent. Please check your spell.')
  }
}

const agentOutputTypes = [
  'Default',
  'Subspell',
  'Github (Issue Comment)',
  'Github (Pull Request Comment)',
  'Github (Comment Reply)',
  'REST API (Response)',
  'Discord (Voice)',
  'Discord (Text)',
  'Discord (DM)',
  'Twitter (Feed)',
  'Twitter (DM)',
  'Bluesky (Reply)',
  'Bluesky (Mention)',
  'Bluesky (Post)',
]

const parseAgentOutput = (responseJSON: any): string | undefined => {
  for (const type of agentOutputTypes) {
    const key = `Output - ${type}`
    const output = responseJSON?.result?.[key]
    if (output) {
      return output
    }
  }

  console.warn('No valid output found.')
  return undefined
}
