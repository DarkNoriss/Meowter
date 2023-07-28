import { INFINITE_SCROLL_PAGINATION_RESULTS } from '@/app/lib/config'
import { db } from '@/app/lib/db'
import { Feed } from '../Feed'

export const GeneralFeed = async () => {
  const meows = await db.meow.findMany({
    orderBy: { createdAt: 'desc' },
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

  return (
    <>
      <Feed meows={meows} />
      <div>General Feed</div>
    </>
  )
}
