import { MeowCard } from './MeowCard/MeowCard';
import { useMeowterContext } from '@/context/meowContext';
import { useEffect } from 'react';

export const Feed = () => {
  const { meows, fetchMeows } = useMeowterContext();

  useEffect(() => {
    fetchMeows();
  }, [fetchMeows]);

  return (
    <>
      {meows?.map((meow) => (
        <MeowCard key={meow.id} meow={meow} />
      ))}
    </>
  );
};
