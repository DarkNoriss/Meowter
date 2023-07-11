import { Types } from 'mongoose';

export type UserType = {
  _id: string;
  email: string;
  username: string;
  userlink: string;
  image: string;
  date: Date;
  meows: MeowType[];
  remeows: [];
  likes: [];
  comments: CommentType[];
};

export type MeowType = {
  creator: Types.Object;
  context: string;
  date: Date;
  remeows: [];
  comments: CommentType[];
  likes: [];
  _id: string;
};

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
