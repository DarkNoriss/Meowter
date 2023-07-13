'use client';

import { signIn, useSession } from 'next-auth/react';

export const Login = () => {
  const { data: session } = useSession();

  return (
    <>
      {!session && (
        <div className='fixed bottom-0 left-0 w-full bg-gray-500 md:px-24 lg:px-48 xl:px-96'>
          <div className='flex flex-row justify-evenly'>
            <div className='flex flex-col p-2 py-4 lg:p-4'>
              <span className='text-base font-bold lg:text-2xl'>
                Don&apos;t miss what&apos;s happening
              </span>
              <span className='text-sm lg:text-base'>
                People on Meowter are the first to know
              </span>
              di
            </div>
            <div className='flex-center'>
              <button
                className='btnhover border px-4 py-2'
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                <span className='text-base font-bold lg:text-xl'>Log in</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
