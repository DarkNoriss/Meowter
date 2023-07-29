"use server"

import { revalidatePath } from "next/cache"
import { getServerSession } from "next-auth/next"
import { options } from "@/lib/auth"
import { db } from "./db"

export const sendMeow = async (text: string) => {
  const session = await getServerSession(options)

  await db.meow.create({
    data: {
      userId: session?.user.id,
      text,
    },
  })

  revalidatePath("/")
}
