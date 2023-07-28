import { Reply } from "@prisma/client"
import { getServerSession } from "next-auth"
import { prisma } from "@/app/lib/db"
import { options } from "../../auth/[...nextauth]/options"

export const POST = async (req: Request) => {
  const session = await getServerSession(options)
  const { meowId, text } = (await req.json()) as Reply

  try {
    if (session) {
      const newReply = await prisma.reply.create({
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
