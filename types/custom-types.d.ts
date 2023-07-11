import { Types } from 'mongoose';

export type UserType = {
  _id: string;
  email: string;
  username: string;
  userlink: string;
  image: string;
  date: Date;
  meows: [];
};

export type MeowType = {
  creator: Types.Object;
  context: string;
  date: Date;
  meta: {
    remeows: number;
    comments: number;
    likes: number;
  };
  _id: string;
};

export type SessionProviderType = {
  children: React.ReactNode;
  session?: Session;
};
