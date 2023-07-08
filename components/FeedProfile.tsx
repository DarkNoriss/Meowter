'use client';

import { useEffect } from 'react';

import { MeowCard } from './MeowCard';
import { useMeowterContext } from '@/context/meowContext';
import { useSession } from 'next-auth/react';

export const FeedProfile = () => {
  const { data: session } = useSession();
  const { fetchUserMeows, getUserMeows } = useMeowterContext();

  useEffect(() => {
    // fetchUserMeows(session?.user.id);
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
