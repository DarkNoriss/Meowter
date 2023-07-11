import { Types } from 'mongoose';

export type UserType = {
  _id: string;
  email: string;
  username: string;
  userlink: string;
  image: string;
  date: Date;
  meows: MeowType[];
};

export type MeowType = {
  creator: Types.Object;
  context: string;
  date: Date;
  remeows: [];
  comments: [];
  likes: [];
  _id: string;
};

export type SessionProviderType = {
  children: React.ReactNode;
  session?: Session;
};
