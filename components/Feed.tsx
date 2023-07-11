'use client';

import { useEffect, useState } from 'react';

import { MeowCard } from './MeowCard/MeowCard';
import { useMeowterContext } from '@/context/meowContext';
import useSWR from 'swr';
import { MeowType } from '@/types/custom-types';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Feed = () => {
  // const { fetchMeows, meows } = useMeowterContext();
  const { data, isLoading } = useSWR<MeowType[]>('/api/meow', fetcher);

  // useEffect(() => {
  //   //fetchMeows();
  // }, [fetchMeows]);
  if (isLoading) return 'Loading...';
  return (
    <>
      {data?.map((meow) => (
        <MeowCard key={meow._id} meow={meow} />
      ))}
    </>
  );
};
