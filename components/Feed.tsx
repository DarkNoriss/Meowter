'use client';

import { useState } from 'react';
import { MeowCard } from './MeowCard';
import { connectToDB } from '@/utils/connectToDB';

export const Feed = () => {
  const hey = connectToDB();
  const [posts, setPosts] = useState([]);

  return (
    <div className=''>
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
      <MeowCard />
    </div>
  );
};
