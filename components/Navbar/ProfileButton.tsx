'use client';

import Image from 'next/image';
import { RefObject, useEffect, useRef, useState } from 'react';
import { ImageAvatar } from '../ImageAvatar';
import { signOut, useSession } from 'next-auth/react';

export const ProfileButton = () => {
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

  if (session)
    return (
      <div className='relative' onClick={handleOpen} ref={menuRef}>
        <div className={`${open ? '' : 'btnhover'} my-3 flex w-full items-center p-3`}>
          <ImageAvatar />
          <div className=' hidden flex-row xl:flex'>
            <div className='mx-3 flex flex-col text-base'>
              <span className='font-bold'>{session.user?.name}</span>
              <span className='font-normal text-gray-500'>@{session.user.link}</span>
            </div>
            <div className='flex flex-1 justify-end'>
              <Image src='/assets/icons/dots.svg' alt='logo' height={22} width={22} />
            </div>
          </div>
        </div>
        {open && (
          <div className='shadow-glow shadow-white border-white-smoll active absolute bottom-1/2 left-1/2 w-72 -translate-y-1/2 rounded-xl bg-gray-950 py-3 xl:-translate-x-1/2'>
            <div className='btnhover border-white-smoll !rounded-none !border-x-0 !border-b-0 px-4 py-3'>
              <span className='text-base font-bold'>Add an existing account</span>
            </div>
            <div className='btnhover !rounded-none px-4 py-3' onClick={() => signOut()}>
              <span className='text-base font-bold'>Log out @{session.user.link}</span>
            </div>
          </div>
        )}
      </div>
    );
};
