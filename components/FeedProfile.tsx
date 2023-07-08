'use client';

import { useEffect } from 'react';

import { MeowCard } from './MeowCard';
import { useMeowterContext } from '@/context/meowContext';

export const FeedProfile = () => {
  const { fetchUserMeows, getUser, getUserMeows } = useMeowterContext();

  useEffect(() => {
    const id = getUser()?.[0]._id.toString();
    fetchUserMeows({ id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {getUserMeows().map((meow) => (
        <MeowCard key={meow._id} meow={meow} />
      ))}
    </>
  );
};
