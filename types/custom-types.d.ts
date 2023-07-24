import { Types } from "mongoose"

export type UserWithMeows = Prisma.MeowGetPayload<{
  include: {
    meows: {
      include: {
        author: true
      }
    }
  }
}>

export type MeowWithAuthor = Prisma.MeowGetPayload<{
  include: {
    user: true
  }
}>

export type CommentType = {
  creator: Types.Object
  meow: Types.Object
  content: string
  date: Date
  likes: []
}

export type LikeWithMeows = Prisma.LikeGetPayload<{
  include: {
    meow: true
  } & Like
}>

export type ReplyWithAuthor = Prisma.ReplyGetPayload<{
  include: {
    user: true
  } & Reply
}>

export type SessionProviderType = {
  children: React.ReactNode
  session?: Session
}
