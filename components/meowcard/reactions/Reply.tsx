"use client"

import { Reply } from "@prisma/client"
import dynamic from "next/dynamic"
import { useSession } from "next-auth/react"
import { useState } from "react"
import ReplyIcon from "@/public/assets/icons/reply.svg"
import { MeowWithAuthor } from "@/types/custom-types"
import { cn } from "@/lib/utils"
import Link from "next/link"

const ModalComponent = dynamic(() => import("./ReplyModal"))

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
      <Link
        className={cn(
          divClasses,
          "group hover:fill-blue-600 hover:text-blue-600",
          `${commented ? "fill-blue-600 text-blue-600" : "fill-gray-400 text-gray-400"}`
        )}
        href={{ pathname: `/compose/meow/[id]`, query: meow.id }}
        as={`/compose/meow/${meow.id}`}
      >
        <div className="p-2 group-hover:rounded-full group-hover:bg-blue-600/25">
          <ReplyIcon alt="reply" className="aspect-square h-5" />
        </div>
        <span className="flex-center px-3 text-sm">{replies?.length !== 0 ? replies?.length : ""}</span>
      </Link>
      {/* {modalIsOpen && <ModalComponent closeModal={closeModal} meow={meow} />} */}
    </>
  )
}
