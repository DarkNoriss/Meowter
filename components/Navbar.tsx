'use client';

import Image from 'next/image';
import { Button } from './navbar/Button';
import { useSession } from 'next-auth/react';
import { strToLink } from '@/utils/strToLink';

export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <header className='flex h-screen w-72 flex-col justify-between pl-2 pr-8'>
      <div>
        <div className='btnhover flex-center aspect-square h-14 py-[2px]'>
          <Image src='/assets/icons/cat.svg' alt='logo' height={28} width={28} />
        </div>
        <div className='my-1'>
          <Button name={'home'} />
          <Button name={'explore'} />
          <Button name={'notifications'} />
          <Button name={'lists'} />
          <Button name={'booksmarks'} />
          <Button name={'verified'} />
          <Button name={'profile'} />
          <Button name={'more'} />
        </div>
        <div className='flex-center btnhover my-4 h-14 rounded-full bg-gray-500 hover:bg-gray-600'>
          <button className='text-lg font-bold'>Meow</button>
        </div>
      </div>
      {session && (
        <div className='btnhover my-3 flex items-center p-3'>
          <div>
            <Image
              src={session.user?.image as string}
              alt='Avatar'
              height={40}
              width={40}
              className='rounded-full'
            />
          </div>
          <div className='mx-3 flex flex-col text-sm'>
            <span className='font-bold'>{session.user?.name}</span>
            <span className='font-normal text-gray-500'>
              {strToLink(session.user?.name as string)}
            </span>
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
