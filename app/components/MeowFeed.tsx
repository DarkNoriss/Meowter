'use client'

import { useIntersection } from '@mantine/hooks'
import { FC, useRef } from 'react'
import { MeowWithAuthor } from '@/types/custom-types'

type MeowFeedProps = {
  initialMeows: MeowWithAuthor[]
}

export const MeowFeed: FC<MeowFeedProps> = ({ initialMeows }) => {
  const lastMeowRef = useRef<HTMLElement>(null)
  const { entry, ref } = useIntersection({ root: lastMeowRef.current, threshold: 1 })

  return <div>PostFeed</div>
}
