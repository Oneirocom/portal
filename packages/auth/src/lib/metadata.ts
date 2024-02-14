import type {
  SignedInAuthObject,
  SignedOutAuthObject,
} from '@clerk/clerk-sdk-node'

export const getPublicMetadata = (
  auth: SignedInAuthObject | SignedOutAuthObject
) => {
  return {
    role: auth?.user?.publicMetadata?.role as string | undefined,
    stripeId: auth?.user?.privateMetadata?.stripeId as string | undefined,
    subscription: auth?.user?.publicMetadata?.subscription as
      | string
      | undefined,
  }
}
