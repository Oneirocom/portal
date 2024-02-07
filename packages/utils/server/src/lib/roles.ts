import { Role } from '@magickml/portal-config'
import { prisma } from '@magickml/portal-db'

export const checkRole = async (email: string) => {
  const lowerCaseEmail = email.toLowerCase()

  const user = await prisma.user.findUnique({
    select: {
      role: true,
    },
    where: { email: lowerCaseEmail },
  })

  if (!user) {
    return false
  }

  return user.role as Role
}
