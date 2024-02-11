import { z } from 'zod'
import { createTRPCRouter, protectedProcedure } from '../trpc'
import { hasAccess, prepareToken } from '../utils/shared'
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
    .input(z.object({ projectId: z.string() }))
    .query(async ({ input, ctx }) => {
      const access = await hasAccess({
        user: ctx.auth,
        projectId: input.projectId,
      })

      if (!access) {
        throw new Error('User is not a member of the specified workspace')
      }

      // TODO: make this an infinite query
      return await prisma.documents.findMany({
        orderBy: {
          date: 'desc',
        },
        where: {
          projectId: input.projectId,
          metadata: {
            not: {
              equals: null,
            },
          },
        },
      })
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

      const newToken = await prepareToken({
        user: ctx.auth,
        projectId,
      })

      const updatedDocument = await updateDocument({
        token: newToken,
        documentId,
        projectId,
        content: updateData.content,
        type: updateData.type,
        files: updateData.files,
      })

      return updatedDocument as Document
    }),

  deleteDocument: protectedProcedure
    .input(z.object({ documentId: z.string(), projectId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const newToken = await prepareToken({
        user: ctx.auth,
        projectId: input.projectId,
      })
      await deleteDocument({
        token: newToken,
        documentId: input.documentId,
        projectId: input.projectId,
      })
    }),
})

interface UpdateDocumentParams {
  token: string
  documentId: string
  projectId: string
  content?: string
  type?: string
  files?: any[]
}
const updateDocument = async (params: UpdateDocumentParams) => {
  const formData = new FormData()
  if (params.type) formData.append('type', params.type)
  if (params.content) formData.append('content', params.content)
  if (params.files) {
    for (const file of params.files as File[]) {
      formData.append('files', file, file.name)
    }
  }

  console.log('Sending form data', formData)
  console.log(
    'URL',
    `${process.env.NEXT_PUBLIC_API_URL}/documents/${params.documentId}?projectId=${params.projectId}`
  )

  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/documents/${params.documentId}?projectId=${params.projectId}`, // Note the inclusion of documentId in the URL
    {
      method: 'PATCH', // Change this to PUT for updating
      headers: {
        Authorization: `Bearer ${params.token}`,
      },
      body: formData,
    }
  )

  const data = await result.json()

  return data
}

interface DeleteDocumentParams {
  token: string
  documentId: string
  projectId: string
}
const deleteDocument = async (params: DeleteDocumentParams) => {
  await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/documents/${params.documentId}?projectId=${params.projectId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${params.token}`,
      },
    }
  )
}
