'use client';

import { signIn, useSession } from 'next-auth/react';

export const Login = () => {
  const { data: session } = useSession();

  return (
    <>
      {!session && (
        <div className='fixed bottom-0 left-0 flex w-full flex-row justify-around bg-gray-500'>
          <div className='flex flex-col p-4'>
            <span className='text-2xl font-bold'>{`Don't miss what's happening`}</span>
            <span>{`People on Meowter are the first to know`}</span>
          </div>
          <div className='flex-center'>
            <button className='btnhover border px-4 py-2' onClick={() => signIn()}>
              <span className='text-xl font-bold'>Log in</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
