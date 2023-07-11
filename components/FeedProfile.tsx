'use client';

import { MeowCard } from './MeowCard/MeowCard';
import { MeowType, UserType } from '@/types/custom-types';

export const FeedProfile = ({
  meows,
  creator,
}: {
  meows: MeowType[];
  creator: UserType;
}) => {
  return (
    <>
      {meows.map((meow) => (
        <MeowCard key={meow._id} meow={meow} creator={creator} />
      ))}
    </>
  );
};
