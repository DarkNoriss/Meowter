"use client"
import { MeowWithAuthor, ReplyWithAuthor } from "@/types/custom-types"
import { CardAvatar } from "./Avatar"
import { CardContext } from "./Context"
import { CardHeader } from "./Header"
import { CardReactions } from "./Reactions"
import { CardReplies } from "./Replies"
import { Meow, MeowPayload } from "@prisma/client"

export const MeowCard = ({ meow, reply }: { meow: MeowWithAuthor; reply?: ReplyWithAuthor }) => {
  console.log(meow[0])
  return (
    <article className="border-white-smoll !border-t-0 px-2 lg:px-4">
      <div className="flex max-w-full flex-row py-3">
        <div className="mr-3 flex flex-col pt-3">
          <CardAvatar avatarUrl={meow?.user.avatar} />
          {/* {meow?.replies.length > 0 && (
            <div className="flex-center -mb-8 flex-1 pt-1">
              <div className="h-full w-[2px] -translate-x-1/2 bg-gray-600"></div>
            </div>
          )} */}
        </div>
        <div className="max-w-full flex-1">
          {/* <CardHeader meow={meow} /> */}
          {/* <CardContext context={meow.text} /> */}
          {/* <CardReactions meow={meow ?? reply} type="meow" /> */}
        </div>
      </div>
      {/* {meow?.replies.length > 0 && <CardReplies replies={meow.replies} />} */}
    </article>
  )
}
