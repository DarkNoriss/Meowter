"use client"

import { Reply } from "@prisma/client"
import { clsx } from "clsx"
import { useSession } from "next-auth/react"
import { useState } from "react"
import ReplyIcon from "@/public/assets/icons/reply.svg"
import { MeowWithAuthor } from "@/types/custom-types"
import { ReplyModal } from "./ReplyModal"

export const CardReactionReply = ({
  meow,
  replies,
  divClasses,
  type,
}: {
  meow: MeowWithAuthor
  replies: Reply[]
  divClasses: string
  type?: string
}) => {
  const { data: session } = useSession()
  const [modalIsOpen, setIsOpen] = useState(false)

  const commented = !!replies?.find((reply: Reply) => reply.userId === session?.user.id)

  const openModal = () => session?.user && setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <div
        className={clsx(
          divClasses,
          "group hover:fill-blue-600 hover:text-blue-600",
          `${commented ? "fill-blue-600 text-blue-600" : "fill-gray-400 text-gray-400"}`
        )}
        onClick={() => (type === "meow" ? openModal() : null)}
      >
        <div className="p-2 group-hover:rounded-full group-hover:bg-blue-600/25">
          <ReplyIcon alt="reply" className="aspect-square h-5" />
        </div>
        <span className="flex-center px-3 text-sm">{replies?.length !== 0 ? replies?.length : ""}</span>
      </div>
      {modalIsOpen && <ReplyModal closeModal={closeModal} meow={meow} />}
    </>
  )
}
