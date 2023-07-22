import { Like } from '@prisma/client';
import { Types } from 'mongoose';

export type UserWithMeows = Prisma.MeowGetPayload<{
  include: {
    meows: {
      include: {
        author: true;
      };
    };
  } & User;
}>;

export type MeowWithAuthor = Prisma.MeowGetPayload<{
  include: {
    user: true;
  } & Meow;
}>;

export type CommentType = {
  creator: Types.Object;
  meow: Types.Object;
  content: string;
  date: Date;
  likes: [];
};

export type ReplyWithAuthor = Prisma.ReplyGetPayload<{
  include: {
    user: true;
  } & Reply;
}>;

export type SessionProviderType = {
  children: React.ReactNode;
  session?: Session;
};
