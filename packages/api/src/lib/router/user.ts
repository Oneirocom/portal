import { z } from 'zod'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'
import { prisma } from '@magickml/portal-db'
import { uploadImage } from '../utils/upload'

export const usersRouter = createTRPCRouter({
  // Update user name
  updateUserName: protectedProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.session.user.id // Get user ID from session
      return await prisma.user.update({
        where: { id: userId },
        data: { name: input.name },
      })
    }),

  // Update user image
  updateUserImage: protectedProcedure
    .input(
      z.object({
        image: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.session.user.id // Get user ID from session
      return await prisma.user.update({
        where: { id: userId },
        data: { image: input.image },
      })
    }),

  // Get the current user
  getCurrentUser: publicProcedure.query(async ({ ctx }) => {
    const userId = ctx?.session?.user.id // Get user ID from session

    if (!userId) {
      return null
    }

    return await prisma.user.findUnique({
      where: { id: userId },
      include: {
        onboarding: true,
      },
    })
  }),

  updateUser: protectedProcedure
    .input(
      z.object({
        name: z.string().optional(),
        about: z.string().optional(),
        base64Image: z.string().optional().nullable(),
        base64ImageBanner: z.string().optional().nullable(),
        profileOnboarding: z.boolean().optional(),
        username: z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.session.user.id // Get user ID from session
      const base64Image = input.base64Image
      const base64ImageBanner = input.base64ImageBanner

      let filePath: string | null = null
      let bannerfilePath: string | null = null

      // Handle the base64 image data
      if (base64Image) {
        const avatarResponse = await uploadImage(
          userId,
          base64Image,
          'userAvatar'
        )
        filePath = `/users/${userId}/avatar.jpg?${avatarResponse.VersionId}`
      }

      if (base64ImageBanner) {
        const bannerResponse = await uploadImage(
          userId,
          base64ImageBanner,
          'userBanner'
        )
        bannerfilePath = `/users/${userId}/banner.jpg?${bannerResponse.VersionId}`
      }

      // Only update fields that are not undefined
      const updateData = {
        name: input.name,
        image: filePath ? filePath : undefined,
        bannerImage: bannerfilePath ? bannerfilePath : undefined,
        about: input.about,
        profileOnboarding: input.profileOnboarding,
      }

      return await prisma.$transaction(async prisma => {
        // Update user
        await prisma.user.update({
          where: { id: userId },
          data: updateData,
        })

        // Update or create profile
        await prisma.profile.upsert({
          where: { userId: userId },
          update: {
            username: input.username ?? undefined,
            bannerImage: bannerfilePath ? bannerfilePath : undefined,
            profileImage: filePath ? filePath : undefined,
          },
          create: {
            userId: userId,
            username: input.username ?? '',
          },
        })
      })
    }),

  getRecentActivity: protectedProcedure
    .input(z.object({}))
    .query(async ({ ctx }) => {
      const userId = ctx.session.user.id
      const projects = await prisma.project.findMany({
        where: { creatorId: userId, lastActive: { not: null } },
        orderBy: {
          lastActive: 'desc',
        },
        take: 10,
      })

      // const agents = await prismaAide.agents.findMany({
      //   where: {
      //     projectId: {
      //       in: projects.map(project => project.id),
      //     },
      //   },
      //   orderBy: {
      //     updatedAt: 'desc',
      //   },
      //   take: 10,
      // })

      return {
        projects,
        // agents,
      }
    }),

  getOnboardingStatus: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id
    const onboarding = await prisma.onboarding.findUnique({
      where: { id: userId }, // Assuming onboarding ID is the same as user ID
    })
    return {
      home: onboarding?.home ?? true,
      projects: onboarding?.projects ?? true,
      agents: onboarding?.agents ?? true,
    }
  }),

  updateUserOnboarding: protectedProcedure
    .input(
      z.object({
        onboarding: z.object({
          home: z.boolean().optional(),
          projects: z.boolean().optional(),
          agents: z.boolean().optional(),
        }),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id

      const onboarding = await prisma.onboarding.update({
        where: { id: userId }, // Assuming onboarding ID is the same as user ID
        data: {
          home: input.onboarding.home,
          projects: input.onboarding.projects,
          agents: input.onboarding.agents,
        },
      })

      return onboarding
    }),
})
