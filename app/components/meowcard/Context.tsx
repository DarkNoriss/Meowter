import clsx from "clsx"

export const CardContext = async ({ context }: { context: string }) => {
  const words = context.split(" ")

  const hasLongWord = words.some((word) => word.length > 20)

  return (
    <div>
      <span className={clsx("text-sm lg:text-base", ` ${hasLongWord ? "break-all" : "break-words"}`)}>{context}</span>
    </div>
  )
}
