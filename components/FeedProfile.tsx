'use client';

import { MeowCard } from './MeowCard/MeowCard';
import { MeowWithAuthor } from '@/types/custom-types';

export const FeedProfile = ({ meows }: { meows: MeowWithAuthor[] }) => {
  return (
    <>
      {meows.map((meow) => (
        <MeowCard key={meow.id} meow={meow} />
      ))}
    </>
  );
};
