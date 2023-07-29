import { Reply } from "@prisma/client"
import { getAuthSession } from "@/lib/auth"
import { db } from "@/lib/db"

export const POST = async (req: Request) => {
  const session = await getAuthSession()
  const { meowId, text } = (await req.json()) as Reply

  try {
    if (session) {
      const newReply = await db.reply.create({
        data: {
          userId: session.user.id as string,
          meowId,
          text,
        },
      })

      return new Response(JSON.stringify(newReply), { status: 201 })
    }
  } catch (err) {
    return new Response("Failed to create a new reply", { status: 500 })
  }
}
