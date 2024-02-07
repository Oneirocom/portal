export const defaultImagePath = '/images/default/'
export const defaultBannerImagePath = '/images/banners/default/'
export const bucketImagePath = process.env.NEXT_PUBLIC_BUCKET_PREFIX
export const hashStringToInt = (s: string, max: number) => {
  let h = 0
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0
  }
  return Math.abs((h % max) + 1)
}

export const defaultImage = (projectId: string) => {
  return `${defaultImagePath}image-${hashStringToInt(projectId, 75)}.webp`
}

export const defaultBannerImage = (userId: string) => {
  return `${defaultBannerImagePath}banner-${hashStringToInt(userId, 10)}.png`
}
