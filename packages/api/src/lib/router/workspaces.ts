import { createTRPCRouter, protectedProcedure } from '../trpc'
import { prisma } from '@magickml/portal-db'
import { z } from 'zod'
import { TRPCError } from '@trpc/server'
import { checkIfUserIsMember } from '../utils/shared'
import { PostHog } from 'posthog-node'

const getOauthFlag = async () => {
  const client = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  })
  return await client.isFeatureEnabled('use-default-workspace', 'default')
}

export const workspaceRouter = createTRPCRouter({
  getWorkspaces: protectedProcedure.query(async ({ ctx }) => {
    const defaultWorkspace = await getOauthFlag()
    const workspaces = await prisma.workspaces.findMany({
      where: {
        deleted_at: null,

        ...(defaultWorkspace && {
          is_default: true,
          creator_id: ctx.session.user.id,
        }),

        workspace_members: {
          some: {
            user_id: ctx.session.user.id,
            status: {
              equals: 'accepted',
            },
          },
        },
      },
      orderBy: {
        created_at: 'asc',
      },
    })

    return workspaces
  }),

  getWorkspaceMembers: protectedProcedure
    .input(z.object({ workspaceId: z.string() }))
    .query(async ({ ctx, input }) => {
      const userMembership = await prisma.workspace_members.findUnique({
        where: {
          workspace_id_user_id: {
            workspace_id: input.workspaceId,
            user_id: ctx.session.user.id,
          },
        },
      })

      if (!userMembership) {
        throw new Error('User is not a member of the specified workspace')
      }

      // If user is a member, fetch all members within the workspace
      const members = await prisma.workspace_members.findMany({
        where: {
          workspace_id: input.workspaceId,
          status: {
            not: 'deleted',
          },
        },
        select: {
          status: true,
          role: true,
          users: true,
        },
      })

      const organizedMembers = members.map(member => {
        return {
          ...member.users,
          status: member.status,
          workspaceRole: member.role,
        }
      })

      return organizedMembers
    }),

  createWorkspace: protectedProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id
      const workspace = await prisma.workspaces.create({
        data: {
          name: input.name,
          creator_id: userId,
          workspace_members: {
            create: {
              user_id: userId,
              role: 'owner',
              status: 'accepted',
            },
          },
        },
      })

      return workspace
    }),

  getRecentActivity: protectedProcedure
    .input(
      z.object({
        workspaceId: z.string(),
        count: z.number().optional().default(10),
      })
    )
    .query(async ({ ctx, input }) => {
      // First, verify if the user is a member of the workspace.
      const userMembership = await checkIfUserIsMember(
        input.workspaceId,
        ctx.session.user.id,
        false
      )

      if (!userMembership) {
        throw new Error('User is not a member of the specified workspace')
      }

      // Fetch agents based on the project IDs
      const agents = await prisma.agents.findMany({
        where: {
          workspace_id: input.workspaceId,
        },
        take: input.count,
        orderBy: {
          updatedAt: 'desc',
        },
      })

      return agents
    }),

  inviteToWorkspace: protectedProcedure
    .input(
      z.object({
        workspaceId: z.string(),
        email: z.string().email(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userMembership = await checkIfUserIsMember(
        input.workspaceId,
        ctx.session.user.id,
        true
      )

      if (!userMembership) {
        throw new Error('User is not a member of the specified workspace')
      }

      // check if user is already a member of the workspace. we dont have the user id, so we have to query for it by email
      const user = await prisma.user.findUnique({
        where: {
          email: input.email,
        },
      })

      // only for whitelist era
      if (!user) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'User does not exist',
          cause: new Error('User does not exist'),
        })
      }

      // check if user is already a member of the workspace
      const existingMember = await prisma.workspace_members.findUnique({
        where: {
          workspace_id_user_id: {
            workspace_id: input.workspaceId,
            user_id: user.id,
          },
        },
        select: {
          status: true,
          id: true,
        },
      })

      if (existingMember && existingMember?.status !== 'deleted') {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message:
            'User is already a member or invited to the specified workspace',
          cause: new Error(
            'User is already a member of the specified workspace'
          ),
        })
      }

      const newMember = await prisma.workspace_members.upsert({
        where: {
          workspace_id_user_id: {
            workspace_id: input.workspaceId,
            user_id: user.id,
          },
        },
        update: {
          status: 'pending',
        },
        create: {
          workspace_id: input.workspaceId,
          user_id: user.id,
          role: 'member',
        },
      })

      if (!newMember) {
        // throw new Error('Failed to add user to workspace');
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to add user to workspace',
          cause: new Error('Failed to add user to workspace'),
        })
      }

      return newMember
    }),

  removeMember: protectedProcedure
    .input(
      z.object({
        workspaceId: z.string(),
        memberId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userMembership = await checkIfUserIsMember(
        input.workspaceId,
        ctx.session.user.id,
        true
      )

      if (!userMembership) {
        throw new Error('User is not a member of the specified workspace')
      }

      // check if user for whitelist era
      const user = await prisma.user.findUnique({
        where: {
          id: input.memberId,
        },
      })

      // check if the user is the requester
      if (user?.id === ctx.session.user.id) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'You cannot remove yourself from the workspace',
          cause: new Error('You cannot remove yourself from the workspace'),
        })
      }

      if (!user) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'User does not exist',
          cause: new Error(
            'User does not exist. Please check the email address and try again.'
          ),
        })
      }

      const deleteData = await prisma.workspace_members.update({
        where: {
          workspace_id_user_id: {
            workspace_id: input.workspaceId,
            user_id: input.memberId,
          },
        },
        data: {
          status: 'deleted',
          deleted_at: new Date(),
        },
      })

      return deleteData
    }),

  deleteWorkspace: protectedProcedure
    .input(
      z.object({
        workspaceId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userMembership = await checkIfUserIsMember(
        input.workspaceId,
        ctx.session.user.id,
        true
      )

      if (!userMembership) {
        throw new Error('User is not a member of the specified workspace')
      }

      // check if workspace is default
      const workspace = await prisma.workspaces.findUnique({
        where: {
          id: input.workspaceId,
        },
        select: {
          id: true,
          is_default: true,
        },
      })

      if (workspace?.is_default) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Cannot delete default workspace',
          cause: new Error('Cannot delete default workspace'),
        })
      }

      const deleteData = await prisma.workspaces.update({
        where: {
          id: input.workspaceId,
        },
        data: {
          deleted_at: new Date(),
        },
      })

      if (!deleteData) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to delete workspace',
          cause: new Error('Failed to delete workspace'),
        })
      }

      return deleteData
    }),

  getInvites: protectedProcedure.query(async ({ ctx }) => {
    const invites = await prisma.workspace_members.findMany({
      where: {
        user_id: ctx.session.user.id,
        status: 'pending',
      },
      include: {
        workspaces: {
          select: {
            creator_id: true,
            name: true,
            created_at: true,
            users: {
              select: {
                id: true,
                email: true,
              },
            },
          },
        },
      },
    })

    return invites
  }),

  handleInvite: protectedProcedure
    .input(
      z.object({
        inviteId: z.string(),
        type: z.enum(['accepted', 'deleted']),
      })
    )
    .mutation(async ({ input }) => {
      const invite = await prisma.workspace_members.update({
        where: {
          id: input.inviteId,
        },
        data: {
          status: input.type,
        },
      })

      if (!invite) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to accept invite',
          cause: new Error('Failed to accept invite'),
        })
      }

      return invite
    }),
})
