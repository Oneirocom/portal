import { S3Client, PutObjectCommand, PutObjectOutput } from '@aws-sdk/client-s3'

export type UploadImageType = 'userAvatar' | 'userBanner' | 'projectAvatar' | 'agentAvatar'

const typeToFolderAndFileKeyMap: Record<
  UploadImageType,
  { folder: string; fileKey: string }
> = {
  userAvatar: { folder: 'users', fileKey: 'avatar.jpg' },
  userBanner: { folder: 'users', fileKey: 'banner.jpg' },
  projectAvatar: { folder: 'projects', fileKey: 'avatar.jpg' },
  agentAvatar: { folder: 'agents', fileKey: 'avatar.jpg' },
}

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.NEXT_AWS_ACCESS_KEY!,
    secretAccessKey: process.env.NEXT_AWS_SECRET_KEY!,
  },
  region: process.env.NEXT_AWS_REGION,
  endpoint: process.env.NEXT_AWS_BUCKET_ENDPOINT,
  forcePathStyle: true,
})

const createBufferFromImage = (image: string): Buffer =>
  Buffer.from(image.replace(/^data:image\/\w+;base64,/, ''), 'base64')

export const uploadImage = async (
  id: string,
  image: string,
  type: UploadImageType
): Promise<PutObjectOutput> => {
  const { folder, fileKey } = typeToFolderAndFileKeyMap[type]
  const buffer = createBufferFromImage(image)

  const s3Params = {
    Bucket: process.env.NEXT_AWS_BUCKET_NAME!,
    Key: `${folder}/${id}/${fileKey}`,
    Body: buffer,
    ContentEncoding: 'base64',
    ContentType: 'image/jpeg',
  }

  const command = new PutObjectCommand(s3Params)

  try {
    return await s3.send(command)
  } catch (error) {
    console.error('Error uploading image to S3', { error })
    throw error
  }
}
