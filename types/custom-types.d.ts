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
    author: true;
  } & Meow;
}>;

export type CommentType = {
  creator: Types.Object;
  meow: Types.Object;
  content: string;
  date: Date;
  likes: [];
};

export type SessionProviderType = {
  children: React.ReactNode;
  session?: Session;
};
