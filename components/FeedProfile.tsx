'use client';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { MeowCard } from './MeowCard';
import { MeowType } from '@/types/custom-types';

export const FeedProfile = ({
  id,
  setUserMeowsNb,
}: {
  id: string;
  setUserMeowsNb: Dispatch<SetStateAction<number>>;
}) => {
  const [userMeows, setUserMeows] = useState<MeowType[]>([]);

  useEffect(() => {
    const fetchUserMeows = async () => {
      console.log('Fetching user meows...');
      const response = await fetch(`/api/users/${id}/meows`);
      const data = await response.json();

      setUserMeowsNb(data.length);
      setUserMeows(data);
    };

    fetchUserMeows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {userMeows.map((meow) => (
        <MeowCard key={meow._id} meow={meow} />
      ))}
    </>
  );
};
