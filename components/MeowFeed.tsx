"use client"

import { useIntersection } from "@mantine/hooks"
import { useInfiniteQuery } from "@tanstack/react-query"
import axios from "axios"
import { useRef } from "react"
import { INFINITE_SCROLL_PAGINATION_RESULTS } from "@/lib/config"
import { MeowWithUserLikesReplies } from "@/types/custom-types"

export const MeowFeed = ({ initialMeows }: { initialMeows: MeowWithUserLikesReplies[] }) => {
  const lastMeowRef = useRef<HTMLElement>(null)
  const {} = useIntersection({
    root: lastMeowRef.current,
    threshold: 1,
  })

  const { data, fetchNextPage } = useInfiniteQuery(
    ["infinite-query"],
    async ({ pageParam = 1 }) => {
      const query = `api/meows?limit=${INFINITE_SCROLL_PAGINATION_RESULTS}&page=${pageParam}`
      const { data } = await axios.get(query)
      return data as MeowWithUserLikesReplies[]
    },
    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1
      },
      initialData: { pages: [initialMeows], pageParams: [1] },
    }
  )

  return <div>MeowFeed</div>
}
