import { INFINITE_SCROLL_PAGINATION_RESULTS } from '@/app/lib/config'
import { db } from '@/app/lib/db'

export const GeneralFeed = async () => {
  const meows = await db.meow.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      user: true,
      likes: true,
      replies: true,
    },
    take: INFINITE_SCROLL_PAGINATION_RESULTS,
  })

  return <div>General Feed</div>
}
