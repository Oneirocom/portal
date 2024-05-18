import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <SignIn path="/sign-in" />
    </div>
  )
}
