'use client';

import { Feed } from '@/components/Feed';
import { Form } from '@/components/Form/Form';
import { MeowWithAuthor } from '@/types/custom-types';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

const Home = () => {
  const { data: session } = useSession();
  const { data, refetch } = useQuery({ queryKey: ['meows'], queryFn: fetchMeows });

  useEffect(() => {
    refetch();
  }, [session, refetch]);

  return (
    <div>
      <div className='border-white-smoll bg-transblur sticky top-0 z-10 flex h-14 w-full max-w-xl items-center !border-t-0 px-4 backdrop-blur-md backdrop-filter'>
        <span className='text-xl font-bold'>Home</span>
      </div>
      <div className='-z-10'>
        {session && <Form />}
        <Feed meows={data as MeowWithAuthor[]} />
      </div>
    </div>
  );
};

export default Home;

const fetchMeows = async () => {
  const response = await fetch('/api/meow');
  const data = await response.json();
  return data;
};
