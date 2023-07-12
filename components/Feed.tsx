import { MeowCard } from './MeowCard/MeowCard';
import { useMeowterContext } from '@/context/meowContext';
import { UserWithMeows } from '@/types/custom-types';
import { useEffect } from 'react';
import useSWR from 'swr';

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Feed = () => {
  const { meows, fetchMeows } = useMeowterContext();
  // const { data } = useSWR<UserWithMeows>('/api/meow', fetcher);

  useEffect(() => {
    fetchMeows();
  }, [fetchMeows]);

  return (
    <>
      {meows.map((meow) => (
        <MeowCard key={meow.id} meow={meow} />
      ))}
    </>
  );
};
