import { INFINITE_SCROLL_PAGINATION_RESULTS } from "@/lib/config"
import { db } from "@/lib/db"
import { MeowFeed } from "./MeowFeed"

export const GeneralFeed = async () => {
  const meows = await db.meow.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      user: true,
      likes: true,
      replies: {
        include: {
          user: true,
          likes: true,
        },
      },
    },
    take: INFINITE_SCROLL_PAGINATION_RESULTS,
  })

  return <MeowFeed initialMeows={meows} />
}
