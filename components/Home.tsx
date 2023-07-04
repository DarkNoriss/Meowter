'use client';

import { Feed } from '@/components/Feed';
import { useSession } from 'next-auth/react';
import { Form } from './Form';

export const Home = () => {
  const { data: session } = useSession();

  return (
    <div className='w-screen max-w-xl'>
      <div className='border-white-smoll bg-transnew fixed top-0 z-10 flex h-14 w-full max-w-xl items-center px-4 backdrop-blur-md backdrop-filter'>
        <span className='text-xl font-bold'>Home</span>
      </div>
      <div className='h-14'></div>
      <div className='-z-10 max-h-screen'>
        {session && <Form />}
        <Feed />
      </div>
    </div>
  );
};
