import { z } from 'zod'
import { createTRPCRouter, protectedProcedure } from '../trpc'
import { checkIfUserIsMember, prepareToken } from '../utils/shared'
import { prisma } from '@magickml/portal-db'

type Document = {
  id: string
  date: string
  type: string
  content: string
  projectId: string
  embedding: string
}

export const documentsRouter = createTRPCRouter({
  // Get all documents for a project
  getDocuments: protectedProcedure
    .input(z.object({ projectId: z.string(), workspaceId: z.string() }))
    .query(async ({ input, ctx }) => {
      const access = await checkIfUserIsMember(
        input.workspaceId,
        ctx.session.user.id,
        false
      )

      if (!access) {
        throw new Error('User is not a member of the specified workspace')
      }

      const documents = await prisma.documents.findMany({
        orderBy: {
          date: 'desc',
        },
        where: {
          projectId: input.projectId,
          workspace_id: input.workspaceId,
          // get documents where metadata is not null
          metadata: {
            not: {
              equals: null,
            },
          },
        },
      })

      return documents
    }),

  updateDocument: protectedProcedure
    .input(
      z.object({
        documentId: z.string(), // The ID of the document to update
        projectId: z.string(),
        updateData: z.object({
          content: z.string().optional(),
          type: z.string().optional(),
          files: z.array(z.any()).optional(),
        }),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { documentId, updateData, projectId } = input

      const newToken = await prepareToken(ctx, input)
      const updatedDocument = await updateDocument(newToken, documentId, {
        ...updateData,
        projectId,
      })
      return updatedDocument as Document
    }),

  // Embed and create a single document
  createDocument: protectedProcedure
    .input(
      z.object({
        projectId: z.string(),
        content: z.string(),
        type: z.string(),
        files: z.array(z.any()),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const newToken = await prepareToken(ctx, input)
      const createdDocument = await createDocument(newToken, input)
      return createdDocument as Document
    }),
  deleteDocument: protectedProcedure
    .input(z.object({ documentId: z.string(), projectId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const newToken = await prepareToken(ctx, input)
      await deleteDocument(newToken, input)
    }),
})

const createDocument = async (
  token: string | null,
  input: { projectId: string; content: string; type: string; files: any[] }
) => {
  const formData = new FormData()
  formData.append('date', new Date().toISOString())
  formData.append('projectId', input.projectId)
  formData.append('modelName', 'text-embedding-ada-002')
  formData.append(
    'secrets',
    JSON.stringify({
      openai_api_key: process.env.OPEN_API_KEY,
      google_ai_key: '',
    })
  )
  formData.append('type', input.type)
  formData.append('content', input.content)
  for (const file of input.files as File[]) {
    formData.append('files', file, file.name)
  }

  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/documents?projectId=${input.projectId}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  )

  const data = await result.json()

  return data
}

const updateDocument = async (
  token: string | null,
  documentId: string, // The ID of the document to update
  input: { projectId: string; content?: string; type?: string; files?: any[] }
) => {
  const formData = new FormData()
  if (input.type) formData.append('type', input.type)
  if (input.content) formData.append('content', input.content)
  if (input.files) {
    for (const file of input.files as File[]) {
      formData.append('files', file, file.name)
    }
  }

  console.log('Sending form data', formData)
  console.log(
    'URL',
    `${process.env.NEXT_PUBLIC_API_URL}/documents/${documentId}?projectId=${input.projectId}`
  )

  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/documents/${documentId}?projectId=${input.projectId}`, // Note the inclusion of documentId in the URL
    {
      method: 'PATCH', // Change this to PUT for updating
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  )

  const data = await result.json()

  return data
}

const deleteDocument = async (
  token: string | null,
  input: { documentId: string; projectId: string }
) => {
  await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/documents/${input.documentId}?projectId=${input.projectId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}
