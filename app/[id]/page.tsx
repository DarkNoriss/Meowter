import { Feed } from "@/components/Feed"
import { db } from "@/lib/db"
import { MeowWithAuthor } from "@/types/custom-types"

const Profile = async ({ params }: { params: { id: string } }) => {
  const meows = await getUserMeows(params)

  return <Feed meows={meows} />
}

export default Profile

const getUserMeows = async (params: { id: string }) => {
  const user = await db.user.findUnique({
    where: { userlink: params.id },
  })

  if (!user) return

  const userMeows: MeowWithAuthor = await db.meow.findMany({
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

export const revalidate = 1
// export const cache = "no-store"
