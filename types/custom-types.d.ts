import { Types } from 'mongoose';

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
