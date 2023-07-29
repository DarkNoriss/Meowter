import { MeowCard } from "@/components/meowcard/MeowCard"
import { db } from "@/lib/db"
import { LikeWithMeows } from "@/types/custom-types"

const ProfileLikes = async ({ params }: { params: { id: string } }) => {
  const userLikes = await getUserLikes(params.id)
  if (userLikes) console.log("GAY", userLikes)
  return (
    <>
      {userLikes?.map((like: LikeWithMeows) => (
        <MeowCard key={like.id} meow={like.meow} reply={like.reply} />
      ))}
    </>
  )
}

export default ProfileLikes

const getUserLikes = async (id: string) => {
  const user = await db.user.findUnique({
    where: { userlink: id },
  })

  if (!user) return
  const userLikes = await db.like.findMany({
    where: { userId: user.id },
    orderBy: { meow: { createdAt: "desc" } },
    include: {
      meow: {
        include: {
          user: true,
          likes: true,
          replies: { include: { user: true } },
        },
      },
      reply: {
        include: {
          user: true,
          likes: true,
        },
      },
    },
  })

  return userLikes
}

export const revalidate = 1
// export const cache = "no-store"
