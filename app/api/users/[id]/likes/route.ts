import { prisma } from "@/utils/connectToDb"

export const GET = async (req: Request, { params }: { params: { id: string } }) => {
  try {
    const user = await prisma.user.findUnique({
      where: { userlink: params.id },
    })

    if (!user) return
    const userLikes = await prisma.like.findMany({
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
      },
    })

    return new Response(JSON.stringify(userLikes), { status: 200 })
  } catch (e) {
    return new Response("Failed to fetch user meows", { status: 500 })
  }
}
