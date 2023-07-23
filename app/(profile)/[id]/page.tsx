"use client"

import { useQuery } from "@tanstack/react-query"
import { Feed } from "@/components/Feed"
import { MeowWithAuthor } from "@/types/custom-types"

const Profile = ({ params }: { params: { id: string } }) => {
  const { data } = useQuery({ queryKey: ["userMeows"], queryFn: () => fetchUserMeows(params.id) }) as MeowWithAuthor

  return <Feed meows={data} />
}

export default Profile

const fetchUserMeows = async (id: string) => {
  const response = await fetch(`/api/users/${id}/meows`)
  const data = await response.json()
  return data
}
