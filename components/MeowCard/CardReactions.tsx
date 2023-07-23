import clsx from "clsx"
import RemeowIcon from "@/public/assets/icons/remeow.svg"
import ShareIcon from "@/public/assets/icons/share.svg"
import ViewIcon from "@/public/assets/icons/view.svg"
import { MeowWithAuthor } from "@/types/custom-types"
import { CardReactionLike } from "./Reactions/Like"
import { CardReactionReply } from "./Reactions/Reply"

export const CardReactions = ({ meow, type }: { meow: MeowWithAuthor; type: string }) => {
  const { replies, likes } = meow

  const remeowed = false

  const divClasses = clsx("flex min-h-[20px] cursor-pointer flex-row")

  return (
    <div className="max-w-[425px]">
      <div className="-mb-2 -ml-2 flex justify-between gap-2">
        <CardReactionReply meow={meow} replies={replies} divClasses={divClasses} type={type} />
        <div
          className={clsx(
            divClasses,
            "group hover:fill-green-600 hover:text-green-600",
            `${remeowed ? "fill-green-600 text-green-600" : "fill-gray-400 text-gray-400"}`
          )}
        >
          <div className="p-2 group-hover:rounded-full group-hover:bg-green-600/25 ">
            <RemeowIcon alt="Remeow" className="aspect-square h-5" />
          </div>
          <span className="flex-center px-3 text-sm">{/* {remeows?.length !== 0 ? remeows?.length : ''} */}</span>
        </div>
        <CardReactionLike meowId={meow.id} likes={likes} divClasses={divClasses} type={type} />
        <div className={clsx(divClasses, "fill-gray-400 text-gray-400")}>
          <div className="btnhover p-2 hover:fill-gray-400/75">
            <ViewIcon alt="View" className="aspect-square h-5" />
          </div>
          <span className="flex-center px-3 text-sm"></span>
        </div>
        <div className={clsx(divClasses, "fill-gray-400 text-gray-400")}>
          <div className="btnhover p-2 hover:fill-gray-400/75">
            <ShareIcon alt="Share" className="aspect-square h-5" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
