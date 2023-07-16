'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { clsx } from 'clsx';

export const NavButtons = () => {
  const { data: session } = useSession();
  const path = usePathname();
  const navigationMap: { [key: string]: string } = {
    home: `/`,
    profile: `/${session?.user.link}`,
  };

  const buttons = [
    { name: 'home', link: `/` },
    { name: 'explore', link: `/` },
    { name: 'notifications', link: `/` },
    { name: 'messages', link: `/` },
    { name: 'lists', link: `/` },
    { name: 'bookmarks', link: `/` },
    { name: 'communities', link: `/` },
    { name: 'verified', link: `/` },
    { name: 'profile', link: `/${session?.user.link}` },
    { name: 'more', link: `/` },
  ];

  const isActive = (name: string) => {
    if (name === 'profile') {
      const regex = new RegExp(`^/${session?.user.link}`);
      return regex.test(path);
    }

    return path === navigationMap[name];
  };

  return (
    <div className='my-1'>
      {buttons.map((button) => (
        <NavButton key={button.name} name={button.name} link={button.link} isActive={isActive(button.name)} />
      ))}
    </div>
  );
};

const NavButton = ({ name, link, isActive }: { name: string; link: string; isActive: boolean }) => {
  return (
    <Link href={link} className='flex h-14 justify-end xl:mr-6'>
      <div className='btnhover flex-center my-1 h-14 w-14 flex-row p-3 xl:flex xl:w-full xl:items-start xl:justify-start'>
        <div className='flex-center h-7 w-7'>
          <Image src={`/assets/icons/${name}.svg`} alt='logo' height={28} width={28} className='h-full w-full' />
        </div>
        <span className={clsx(`ml-5 hidden text-xl capitalize xl:block`, `${isActive ? 'font-bold' : ''}`)}>{name}</span>
      </div>
    </Link>
  );
};
