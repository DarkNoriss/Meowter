'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { clsx } from 'clsx';
import React from 'react';

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
    <div className='btnhover my-1 flex h-14 flex-row p-3'>
      <div>
        <Image src={`/assets/icons/${name}.svg`} alt='logo' height={28} width={28} />
      </div>
      <span className={clsx(`ml-5 text-xl capitalize`, `${isHere ? 'font-bold' : ''}`)}>
        {name}
      </span>
    </div>
  );
};
