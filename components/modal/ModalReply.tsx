"use client"

import { useClickOutside } from "@mantine/hooks"
import { MeowPayload } from "@prisma/client"
import { useRouter } from "next/navigation"
import CloseIcon from "@/public/assets/icons/close.svg"

export const ModalReply = ({ meow }: { meow: MeowPayload }) => {
  const router = useRouter()
  const ref = useClickOutside(() => router.back())

  console.log(meow)

  return (
    <div className="w-full max-w-xl rounded-2xl bg-gray-900" ref={ref}>
      <div className="flex h-14 px-4">
        <div className="flex-center" onClick={() => router.back()}>
          <div className="btnhover p-2">
            <CloseIcon alt="Close button" className="h-5 fill-gray-200" />
          </div>
        </div>
      </div>
    </div>
  )
}
