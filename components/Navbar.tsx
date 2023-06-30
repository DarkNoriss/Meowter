'use client';

import Image from 'next/image';
import { NavButton } from './navbar/NavButton';
import { useState } from 'react';

export const Navbar = () => {
  const [isLogged, setIsLogged] = useState<Boolean>(true);

  return (
    <header className='flex h-screen w-72 flex-col justify-between pl-2 pr-8'>
      <div>
        <div className='btnhover flex-center aspect-square h-14 py-[2px]'>
          <Image src='/assets/icons/cat.svg' alt='logo' height={28} width={28} />
        </div>
        <div className='my-1'>
          <NavButton name={'home'} />
          <NavButton name={'explore'} />
          <NavButton name={'notifications'} />
          <NavButton name={'lists'} />
          <NavButton name={'booksmarks'} />
          <NavButton name={'verified'} />
          <NavButton name={'profile'} />
          <NavButton name={'more'} />
        </div>
        <div className='flex-center btnhover my-4 h-14 rounded-full bg-gray-500 hover:bg-gray-600'>
          <button className='text-lg font-bold'>Meow</button>
        </div>
      </div>
      {isLogged && (
        <div className='btnhover my-3 flex items-center  p-3'>
          <div>
            <Image
              src='/assets/avatar/avatar.jpg'
              alt='Avatar'
              height={40}
              width={40}
              className='rounded-full'
            />
          </div>
          <div className='mx-3 flex flex-col text-sm'>
            <span className='font-bold'>DarkNoriss</span>
            <span className='font-normal text-gray-500'>@DarkNoriss231</span>
          </div>
          <div className='flex flex-1 justify-end'>
            <svg viewBox='0 0 24 24' aria-hidden='true' className='h-5 fill-white '>
              <g>
                <path d='M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'></path>
              </g>
            </svg>
          </div>
        </div>
      )}
    </header>
  );
};
