'use client';

import { useEffect } from 'react';

import { MeowCard } from './MeowCard';
import { useMeowterContext } from '@/context/meowContext';

export const Feed = () => {
  const { fetchMeows, meows } = useMeowterContext();

  useEffect(() => {
    fetchMeows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {meows.map((meow) => (
        <MeowCard key={meow._id} meow={meow} />
      ))}
    </>
  );
};
