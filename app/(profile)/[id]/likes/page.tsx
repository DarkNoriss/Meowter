"use client"

import { MeowCard } from "@/components/MeowCard/MeowCard"
import { MeowWithAuthor } from "@/types/custom-types"
import { useQuery } from "@tanstack/react-query"

const ProfileLikes = ({ params }: { params: { id: string } }) => {
  const { data } = useQuery({ queryKey: ["userLikes"], queryFn: () => fetchUserLikes(params.id) }) as MeowWithAuthor

  if (data)
    return (
      <>
        {data.map((like: any) => (
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
