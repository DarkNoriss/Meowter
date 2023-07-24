"use client"

import { clsx } from "clsx"
import { useSession } from "next-auth/react"
import { useState } from "react"
import { sendMeow } from "@/app/lib/sendMeow"
import { ExpandingTextarea } from "./ExpandingTextarea"
import { ImageAvatar } from "../navbar/ImageAvatar"

export const Form = () => {
  const { data: session } = useSession()
  const [text, setText] = useState("")
  const [sendingMeow, setSendingMeow] = useState<boolean>(false)

  const placeholder = "What is happening?!"

  const createMeow = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSendingMeow(true)

    try {
      await sendMeow(text)
    } catch (error) {
      console.error(error)
    } finally {
      setText("")
      setSendingMeow(false)
    }
  }

  return (
    <>
      {session && (
        <div className="border-white-smoll flex !border-t-0 px-4">
          <div className="mr-3 pt-3">
            <ImageAvatar />
          </div>
          <form className="flex flex-1 flex-col py-1" onSubmit={createMeow}>
            <ExpandingTextarea text={text} setText={setText} placeholder={placeholder} />
            <div className="flex justify-end pb-2 text-base font-bold">
              <button
                className={clsx(
                  `flex-center mt-3 h-9 rounded-full bg-gray-500 px-4 `,
                  text.length === 0 ? "bg-gray-700" : "btnhover hover:bg-gray-600"
                )}
                disabled={sendingMeow || text.length === 0}
              >
                Meow
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
