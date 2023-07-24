import { MeowWithAuthor } from "@/types/custom-types"
import { MeowCard } from "./meowcard/MeowCard"

export const Feed = async ({ meows }: { meows: MeowWithAuthor[] }) => {
  return (
    <>
      {meows?.map((meow) => (
        <MeowCard key={meow.id} meow={meow} />
      ))}
    </>
  )
}
