'use client';

import { Feed } from '@/components/Feed';
import { Form } from '@/components/Form/Form';
import { UserWithMeows } from '@/types/custom-types';
import { useSession } from 'next-auth/react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data: session } = useSession();
  // const { data } = useSWR<UserWithMeows>('/api/meow', fetcher);

  return (
    <>
      <div className='border-white-smoll bg-transblur sticky top-0 z-10 flex h-14 w-full max-w-xl items-center !border-t-0 px-4 backdrop-blur-md backdrop-filter'>
        <span className='text-xl font-bold'>Home</span>
      </div>
      <div className='-z-10'>
        {session && <Form />}
        <Feed />
      </div>
    </>
  );
};

export default Home;
