import { Feed } from "@/app/components/Feed"
import { prisma } from "@/app/lib/connectToDb"
import { MeowWithAuthor } from "@/types/custom-types"

const Profile = async ({ params }: { params: { id: string } }) => {
  const meows = await getUserMeows(params)

  return <Feed meows={meows} />
}

export default Profile

const getUserMeows = async (params: { id: string }) => {
  const user = await prisma.user.findUnique({
    where: { userlink: params.id },
  })

  if (!user) return

  const userMeows: MeowWithAuthor = await prisma.meow.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    include: {
      user: true,
      likes: true,
      replies: { include: { user: true, likes: true } },
    },
  })

  return userMeows
}

export const cache = "no-store"
