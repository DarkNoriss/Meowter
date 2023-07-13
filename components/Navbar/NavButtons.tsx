'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { clsx } from 'clsx';

export const NavButtons = () => {
  return (
    <div className='my-1'>
      <Link href='/' passHref>
        <Button name={'home'} />
      </Link>
      <Buttons />
    </div>
  );
};

const Buttons = () => {
  const { data: session } = useSession();

  if (session)
    return (
      <>
        <Button name={'explore'} />
        <Button name={'notifications'} />
        <Button name={'messages'} />
        <Button name={'lists'} />
        <Button name={'booksmarks'} />
        <Button name={'verified'} />
        <Link href={`/${session.user.link}`} passHref>
          <Button name={'profile'} link={session.user.link} />
        </Link>
        <Button name={'more'} />
      </>
    );
};

const Button = ({ name, link }: { name: string; link?: string }) => {
  const [isHere, setIsHere] = useState<boolean>(false);
  const path = usePathname();

  useEffect(() => {
    const isPathMatched =
      (name === 'home' && path === '/') || path === `/${name}` || path === `/${link}`;

    setIsHere(isPathMatched);
  }, [link, name, path]);

  return (
    <div className='flex h-14 justify-end xl:mr-6'>
      <div className='btnhover flex-center my-1 h-14 w-14 flex-row p-3 xl:flex xl:w-full xl:items-start xl:justify-start'>
        <div className='flex-center h-7 w-7'>
          <Image
            src={`/assets/icons/${name}.svg`}
            alt='logo'
            height={28}
            width={28}
            className='h-full w-full'
          />
        </div>
        <span
          className={clsx(
            `ml-5 hidden text-xl capitalize xl:block`,
            `${isHere ? 'font-bold' : ''}`
          )}
        >
          {name}
        </span>
      </div>
    </div>
  );
};
