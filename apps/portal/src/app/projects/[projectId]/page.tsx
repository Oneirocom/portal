import { prepareToken } from '@magickml/portal-server-router'
import { prismaPortal } from '@magickml/portal-db'
import { auth, currentUser } from '@clerk/nextjs/server'
import { notFound } from 'next/navigation'

import { MagickIDE } from 'client/editor'
import { KeywordsService } from '@magickml/keywords'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export default async function EditorPage({
  params,
}: {
  params: { projectId: string }
}) {
  console.log('EditorPage', params)
  if (!apiUrl) {
    throw new Error('API_URL not found')
  }

  const user = auth()

  const projectId = params?.projectId
  console.log('projectId', projectId)

  if (typeof projectId !== 'string' || !user.userId) {
    notFound()
  }

  const userdata = await currentUser()

  // check if project exists
  const project = await prismaPortal.project.findUnique({
    where: {
      id: projectId as string,
    },
    select: {
      id: true,
    },
  })

  console.log('project', project)

  if (!project) {
    notFound()
  }

  const token = await prepareToken({
    user: {
      userId: user.userId,
      user: userdata,
      orgId: '',
    },
    projectId: projectId,
  })

  // update the projects last active date
  await prismaPortal.project.update({
    where: {
      id: projectId as string,
    },
    data: {
      lastActive: new Date(),
    },
  })

  const keywordsService = new KeywordsService()
  const providerData = await keywordsService.fetchModels()

  return (
    <MagickIDE
      config={{
        token,
        projectId,
        userId: user.userId,
        email: userdata?.emailAddresses[0].emailAddress,
        apiUrl,
        providerData,
      }}
      loading={[] as any}
      loadingStatus={[] as any}
    />
  )
}
