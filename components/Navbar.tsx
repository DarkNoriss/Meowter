'use client';

import Image from 'next/image';
import { Button } from './Navbar/Button';
import { useSession } from 'next-auth/react';
import { RefObject, useEffect, useRef, useState } from 'react';
import { signOut } from 'next-auth/react';
import { ImageAvatar } from './ImageAvatar';
import Link from 'next/link';

export const Navbar = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState<Boolean>(false);

  const menuRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handler);

    return () => {
      document.body.removeEventListener('click', handler);
    };
  }, []);

  const handleOpen = () => {
    if (!open) setOpen(true);
  };

  return (
    <header>
      <div className='h-screen w-72'>
        <div className='border-white-smoll fixed top-0 h-full w-72 !border-y-0 !border-l-0 pr-7'>
          <div className='flex h-full flex-col justify-between'>
            <div className=''>
              <Link
                href='/'
                className='btnhover flex-center aspect-square h-14 py-[2px]'
                passHref
              >
                <Image
                  src='/assets/icons/cat.svg'
                  alt='logo'
                  height={28}
                  width={28}
                  className='h-8 w-auto'
                />
              </Link>
              <div className='my-1'>
                <Link href='/' passHref>
                  <Button name={'home'} />
                </Link>
                {session && (
                  <>
                    <Button name={'explore'} />
                    <Button name={'notifications'} />
                    <Button name={'messages'} />
                    <Button name={'lists'} />
                    <Button name={'booksmarks'} />
                    <Button name={'verified'} />
                    <Link href={`/${session.user.link}`} passHref>
                      <Button name={'profile'} />
                    </Link>
                    <Button name={'more'} />
                  </>
                )}
              </div>
              {session && (
                <div className='flex-center btnhover my-4 h-14 w-full rounded-full bg-gray-500 hover:bg-gray-600'>
                  <button className='text-lg font-bold'>Meow</button>
                </div>
              )}
            </div>
            {session && (
              <div className='relative' onClick={handleOpen} ref={menuRef}>
                <div
                  className={`${
                    open ? '' : 'btnhover'
                  } my-3 flex w-full items-center p-3`}
                >
                  <ImageAvatar />
                  <div className='mx-3 flex flex-col text-base'>
                    <span className='font-bold'>{session.user?.name}</span>
                    <span className='font-normal text-gray-500'>
                      @{session.user.link}
                    </span>
                  </div>
                  <div className='flex flex-1 justify-end'>
                    <Image
                      src='/assets/icons/dots.svg'
                      alt='logo'
                      height={22}
                      width={22}
                    />
                  </div>
                </div>
                {open && (
                  <div className='shadow-glow shadow-white border-white-smoll active absolute bottom-1/2 left-1/2 w-72 -translate-x-1/2 -translate-y-1/2 rounded-xl py-3'>
                    <div className='btnhover border-white-smoll !rounded-none !border-x-0 !border-b-0 px-4 py-3'>
                      <span className='text-base font-bold'>Add an existing account</span>
                    </div>
                    <div
                      className='btnhover !rounded-none px-4 py-3'
                      onClick={void signOut}
                    >
                      <span className='text-base font-bold'>
                        Log out @{session.user.link}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
