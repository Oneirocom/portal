import type { RouterInputs } from '@magickml/portal-api-client'
import axios from 'axios'

export enum PublicPresignType {
  projectAvatar = 'projectAvatar',
  agentAvatar = 'agentAvatar',
  templateAvatar = 'templateAvatar',
}

export interface UploadImageProps {
  presignedUrl: {
    url: string
    key: string
  }
  imageFile: File
}

export const uploadImage = async ({
  presignedUrl,
  imageFile,
}: UploadImageProps) => {
  const res = await axios.put(presignedUrl.url, imageFile, {
    headers: {
      'Content-Type': imageFile.type,
    },
  })

  if (res.status !== 200) {
    throw new Error('Failed to upload image. Please try a different image.')
  } else {
    return presignedUrl.key
  }
}

interface GetPresignedUrlProps<T = any> {
  id: string
  imageFile: File
  fn: (args: any) => Promise<UploadImageProps['presignedUrl']>
  args: T
  type: RouterInputs['agents']['getPresignedUrl']['type']
}

export const handleImageUpload = async ({
  id,
  imageFile,
  fn,
  args,
  type,
}: GetPresignedUrlProps) => {
  const presignedUrl = await fn(args)

  if (!presignedUrl) {
    throw new Error('Failed to get presigned URL')
  }

  return await uploadImage({ presignedUrl, imageFile })
}
