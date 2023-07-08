'use client';

import { useEffect } from 'react';

import { useMeowterContext } from '@/context/meowContext';
import { MeowCard } from './MeowCard';

export const Feed = () => {
  const { fetchMeows, getMeows } = useMeowterContext();

  useEffect(() => {
    fetchMeows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {getMeows().map((meow) => (
        <MeowCard key={meow._id} meow={meow} />
      ))}
    </>
  );
};
