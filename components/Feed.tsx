import { MeowCard } from "@/components/meowcard/MeowCard"
import { MeowWithAuthor } from "@/types/custom-types"

export const Feed = async ({ meows }: { meows: MeowWithAuthor[] }) => {
  return (
    <>
      {meows?.map((meow) => (
        <MeowCard key={meow.id} meow={meow} />
      ))}
    </>
  )
}
