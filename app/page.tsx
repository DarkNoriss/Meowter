'use client';

import useSWR from 'swr';
import { Feed } from '@/components/Feed';
import { Form } from '@/components/Form/Form';
import { MeowWithAuthor } from '@/types/custom-types';
import { useSession } from 'next-auth/react';
import { fetcher } from '@/utils/useSWRFetcher';

const Home = () => {
  const { data: session } = useSession();
  const { data } = useSWR<MeowWithAuthor[]>('/api/meow', fetcher, { refreshInterval: 5000 });

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
