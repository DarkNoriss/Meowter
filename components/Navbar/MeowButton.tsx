'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

export const MeowButton = () => {
  const { data: session } = useSession();

  if (session)
    return (
      <div className='flex-center btnhover my-4 h-14 w-full rounded-full bg-gray-500 hover:bg-gray-600'>
        <button className='text-lg font-bold'>Meow</button>
      </div>
    );
};
