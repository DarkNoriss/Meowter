"use server"

import { revalidatePath } from "next/cache"
import { getServerSession } from "next-auth/next"
import { prisma } from "./connectToDb"
import { options } from "../api/auth/[...nextauth]/options"

export const sendMeow = async (text: string) => {
  const session = await getServerSession(options)

  await prisma.meow.create({
    data: {
      userId: session?.user.id,
      text,
    },
  })

  revalidatePath("/")
}
