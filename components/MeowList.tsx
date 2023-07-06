import { useEffect, useState } from 'react';
import { MeowCard } from './MeowCard';
import { MeowType } from '@/types/custom-types';

export const MeowList = () => {
  const [meows, setMeows] = useState<MeowType[]>([]);

  useEffect(() => {
    fetchMeows();
  }, []);

  const fetchMeows = async () => {
    const response = await fetch('api/meow');
    const data = await response.json();

    setMeows(data);
  };

  return (
    <>
      {meows.map((meow) => (
        <MeowCard key={meow._id} meow={meow} />
      ))}
    </>
  );
};
