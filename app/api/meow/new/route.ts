import { getServerSession } from "next-auth"
import { options } from "../../auth/[...nextauth]/options"
import { prisma } from "@/utils/connectToDb"

type ResponseData = {
  context: string
}

export const POST = async (req: Request) => {
  const session = await getServerSession(options)
  const { context } = (await req.json()) as ResponseData

  try {
    if (session) {
      const newMeow = await prisma.meow.create({
        data: {
          userId: session.user.id,
          text: context,
        },
      })

      return new Response(JSON.stringify(newMeow), { status: 201 })
    }
  } catch (err) {
    return new Response("Failed to create a new meow", { status: 500 })
  }
}
