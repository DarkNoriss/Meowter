import { Like } from "@prisma/client"
import { getAuthSession } from "@/lib/auth"
import { db } from "@/lib/db"

export const POST = async (req: Request) => {
  const session = await getAuthSession()
  const { meowId, replyId } = (await req.json()) as Like
  console.log(meowId, replyId)

  try {
    const like = await db.like.findFirst({
      where: {
        userId: session?.user.id,
        ...(meowId ? { meowId } : {}),
        ...(replyId ? { replyId } : {}),
      },
    })

    if (like) {
      await db.like.delete({
        where: { id: like.id },
      })

      return new Response("Removed like!", { status: 200 })
    } else {
      await db.like.create({
        data: {
          userId: session?.user.id,
          ...(meowId ? { meowId } : {}),
          ...(replyId ? { replyId } : {}),
        },
      })

      return new Response("Added like!", { status: 200 })
    }
  } catch (e) {
    return new Response("Failed to check if like exists", { status: 500 })
  }
}
