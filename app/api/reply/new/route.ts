import { getServerSession } from "next-auth"
import { options } from "../../auth/[...nextauth]/options"
import { prisma } from "@/utils/connectToDb"
import { Reply } from "@prisma/client"

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
