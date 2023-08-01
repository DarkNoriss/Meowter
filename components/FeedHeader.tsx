import { ReactElement } from "react"

export const FeedHeader = async ({ children }: { children: ReactElement }) => {
  return (
    <div className="border-white-smoll bg-transblur sticky top-0 z-10 flex h-14 w-full items-center !border-t-0 px-4 backdrop-blur-md">
      {children}
    </div>
  )
}
