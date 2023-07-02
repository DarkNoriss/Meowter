'use client';

import { useState } from 'react';

export const Login = () => {
  const [isLogged, setIsLogged] = useState<Boolean>(false);

  return (
    <>
      {!isLogged && (
        <div className='fixed bottom-0 left-0 flex w-full flex-row justify-around bg-gray-500'>
          <div className='flex flex-col p-4'>
            <span className='text-2xl font-bold'>{`Don't miss that's happening`}</span>
            <span>{`People on Meowter are the first to know`}</span>
          </div>
          <div className='flex-center'>
            <span className='btnhover border px-4 py-2 text-xl font-bold'>Log in</span>
          </div>
        </div>
      )}
    </>
  );
};
