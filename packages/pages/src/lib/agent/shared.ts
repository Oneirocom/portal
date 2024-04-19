export const imgPrep = (image: string | null) =>
  image ? `${process.env.NEXT_PUBLIC_BUCKET_PREFIX}/${image}` : null
