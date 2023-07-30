"use client"

import { useClickOutside } from "@mantine/hooks"
import { useRouter } from "next/navigation"
import CloseIcon from "@/public/assets/icons/close.svg"

const ComposeMeow = () => {
  const router = useRouter()
  const ref = useClickOutside(() => router.back())

  return (
    <div className="flex-center fixed left-0 top-0 z-10 h-full w-full bg-gray-700/50">
      <div className="w-full max-w-xl rounded-2xl bg-gray-900" ref={ref}>
        <div className="flex h-14 px-4">
          <div className="flex-center" onClick={() => router.back()}>
            <div className="btnhover p-2">
              <CloseIcon alt="Close button" className="h-5 fill-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComposeMeow
