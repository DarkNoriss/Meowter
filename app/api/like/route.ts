import { Like } from "@prisma/client"
import { getServerSession } from "next-auth"
import { prisma } from "@/utils/connectToDb"
import { options } from "../auth/[...nextauth]/options"

export const POST = async (req: Request) => {
  const session = await getServerSession(options)
  const { meowId, replyId } = (await req.json()) as Like
  console.log(meowId, replyId)

  try {
    const like = await prisma.like.findFirst({
      where: {
        userId: session?.user.id,
        ...(meowId ? { meowId } : {}),
        ...(replyId ? { replyId } : {}),
      },
    })

    if (like) {
      await prisma.like.delete({
        where: { id: like.id },
      })

      return new Response("Removed like!", { status: 200 })
    } else {
      await prisma.like.create({
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
