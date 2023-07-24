"use client"

import { signOut, useSession } from "next-auth/react"
import { RefObject, useEffect, useRef, useState } from "react"
import DotsIcon from "@/public/assets/icons/dots.svg"
import { ImageAvatar } from "./ImageAvatar"

export const ProfileButton = () => {
  const { data: session } = useSession()
  const [open, setOpen] = useState<boolean>(false)
  const menuRef: RefObject<HTMLDivElement> = useRef(null)

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.body.addEventListener("click", handler)

    return () => {
      document.body.removeEventListener("click", handler)
    }
  }, [])

  const handleOpen = () => {
    if (!open) setOpen(true)
  }

  if (session)
    return (
      <div className="relative" onClick={handleOpen} ref={menuRef}>
        <div className={`${open ? "" : "btnhover"} my-3 flex w-full items-center p-3`}>
          <ImageAvatar />
          <div className="hidden w-full flex-row xl:flex">
            <div className="mx-3 flex flex-1 flex-col text-base">
              <span className="font-bold">{session.user?.name}</span>
              <span className="text-gray-500">@{session.user.link}</span>
            </div>
            <div className="flex-center justify-end">
              <DotsIcon alt="dots" className="aspect-square h-5 fill-gray-300" />
            </div>
          </div>
        </div>
        {open && (
          <div className="shadow-glow border-white-smoll absolute bottom-1/2 left-1/2 w-72 -translate-y-1/2 rounded-xl bg-gray-950 py-3 shadow-white xl:-translate-x-1/2">
            <div className="btnhover border-white-smoll !rounded-none !border-x-0 !border-b-0 px-4 py-3">
              <span className="text-base font-bold">Add an existing account</span>
            </div>
            <div className="btnhover !rounded-none px-4 py-3" onClick={() => signOut()}>
              <span className="text-base font-bold">Log out @{session.user.link}</span>
            </div>
          </div>
        )}
      </div>
    )
}
