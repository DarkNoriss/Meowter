'use client';

import { Feed } from '@/components/Feed';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const Home = () => {
  const { data: session } = useSession();

  return (
    <div className='w-screen max-w-xl'>
      <div className='border-white-smoll z-10 flex h-14 items-center !border-x-0 !border-t-0 px-4'>
        <span className='text-xl font-bold'>Home</span>
      </div>
      <div className='-z-10 max-h-screen'>
        {session && (
          <div className='border-white-smoll flex !border-x-0 !border-t-0 px-4'>
            <div className='mr-3 pt-3'>
              <Image
                src={session.user?.image as string}
                alt='Avatar'
                height={40}
                width={40}
                className='rounded-full'
              />
            </div>
            <div className='flex flex-1 flex-col py-1'>
              <span className='border-white-smoll !border-x-0 !border-t-0 py-3 text-xl text-gray-500'>
                What is happening?!
              </span>
              <div className='flex justify-end pb-2 text-base font-bold'>
                <div className='flex-center btnhover mt-3 h-9 rounded-full bg-gray-500 px-4 hover:bg-gray-600 '>
                  <span>Meow</span>
                </div>
              </div>
            </div>
          </div>
        )}
        <Feed />
      </div>
    </div>
  );
};

export default Home;
