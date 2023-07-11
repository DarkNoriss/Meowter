'use client';

import { useEffect } from 'react';

import { MeowCard } from './MeowCard';
import { useMeowterContext } from '@/context/meowContext';

export const Feed = () => {
  const { fetchMeows, meows } = useMeowterContext();

  useEffect(() => {
    fetchMeows();
  }, [fetchMeows]);

  return (
    <>
      {meows.map((meow) => (
        <MeowCard key={meow._id} meow={meow} />
      ))}
    </>
  );
};
