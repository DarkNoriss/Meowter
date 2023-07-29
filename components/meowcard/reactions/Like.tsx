"use client"

import { Like } from "@prisma/client"
import { useQueryClient } from "@tanstack/react-query"
import { clsx } from "clsx"
import { useSession } from "next-auth/react"
import { useState } from "react"
import LikeIcon from "@/public/assets/icons/like.svg"

export const CardReactionLike = ({
  meowId,
  likes,
  divClasses,
  type,
}: {
  meowId: string
  likes: Like[]
  divClasses: string
  type?: string
}) => {
  const { data: session } = useSession()
  const [sendingLike, setSendingLike] = useState(false)
  const queryClient = useQueryClient()

  const liked = !!likes?.find((like: Like) => like.userId === session?.user.id)

  const handleLike = async () => {
    if (!session || sendingLike) return

    try {
      setSendingLike(true)

      console.log("Sending like!")
      if (type === "meow") await sendLikeMeow("/api/like", meowId)
      else await sendLikeReply("/api/like", meowId)

      await queryClient.invalidateQueries(["meows"])
    } catch (err) {
      console.log(err)
    } finally {
      setSendingLike(false)
    }
  }

  return (
    <div
      className={clsx(
        divClasses,
        "group hover:fill-red-600 hover:text-red-600",
        `${liked ? "fill-red-600 text-red-600" : "fill-gray-400 text-gray-400"}`
      )}
      onClick={handleLike}
    >
      <div className="p-2 group-hover:rounded-full group-hover:bg-red-600/25 ">
        <LikeIcon alt="like" className="aspect-square h-5" />
      </div>
      <span className="flex-center px-3 text-sm">{likes?.length !== 0 ? likes?.length : ""}</span>
    </div>
  )
}

const sendLikeMeow = async (url: string, id: string) => {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      meowId: id,
    }),
  })
}
const sendLikeReply = async (url: string, id: string) => {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      replyId: id,
    }),
  })
}
