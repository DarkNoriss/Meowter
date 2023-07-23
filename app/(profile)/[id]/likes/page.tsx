"use client"

import { useQuery } from "@tanstack/react-query"
import { MeowCard } from "@/components/MeowCard/MeowCard"
import { LikeWithMeows, MeowWithAuthor } from "@/types/custom-types"

const ProfileLikes = ({ params }: { params: { id: string } }) => {
  const { data } = useQuery({ queryKey: ["userLikes"], queryFn: () => fetchUserLikes(params.id) }) as MeowWithAuthor
  console.log(data)
  if (data)
    return (
      <>
        {data.map((like: LikeWithMeows) => (
          <MeowCard key={like.id} meow={like.meow} />
        ))}
      </>
    )
}

export default ProfileLikes

const fetchUserLikes = async (id: string) => {
  const response = await fetch(`/api/users/${id}/likes`)
  const data = await response.json()
  return data
}
