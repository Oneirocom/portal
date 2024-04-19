import type { api, RouterInputs } from '@magickml/portal-api-client'
import axios from 'axios'

interface GetPresignedUrlProps {
  agentId: string
  imageFile: File
  getPresignedUrl: ReturnType<
    typeof api.agents.getPresignedUrl.useMutation
  >['mutateAsync']
  type: RouterInputs['agents']['getPresignedUrl']['type']
}

export const handleImageUpload = async ({
  agentId,
  imageFile,
  getPresignedUrl,
}: GetPresignedUrlProps) => {
  const presignedUrl = await getPresignedUrl({
    agentId,
    type: 'agentAvatar' as RouterInputs['agents']['getPresignedUrl']['type'],
  })
  if (!presignedUrl) {
    throw new Error('Failed to get presigned URL')
  }

  const res = await axios.put(presignedUrl.url, imageFile, {
    headers: {
      'Content-Type': imageFile.type,
    },
  })

  console.log(res)

  // check if the image was uploaded successfully
  if (res.status !== 200) {
    // toast.error('Failed to upload image. Please try a different image.')
    throw new Error('Failed to upload image. Please try a different image.')
  } else {
    return presignedUrl.key
  }
}
