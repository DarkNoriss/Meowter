import { getServerSession } from "next-auth/next"
import { Feed } from "@/app/components/Feed"
import { prisma } from "@/app/lib/connectToDb"
import { options } from "./api/auth/[...nextauth]/options"
import { Form } from "./components/form/Form"

const Home = async () => {
  const sessionData = getServerSession(options)
  const meowsData = getMeows()

  const [session, meows] = await Promise.all([sessionData, meowsData])

  return (
    <div>
      <div className="border-white-smoll bg-transblur sticky top-0 z-10 flex h-14 w-full max-w-xl items-center !border-t-0 px-4 backdrop-blur-md">
        <span className="text-xl font-bold">Home</span>
      </div>
      <div className="-z-10">
        {session && <Form />}
        <Feed meows={meows} />
      </div>
    </div>
  )
}

export default Home

const getMeows = async () => {
  const meows = await prisma.meow.findMany({
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
  })

  return meows
}

export const revalidate = 1
