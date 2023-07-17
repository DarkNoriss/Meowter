'use client';

import Link from 'next/link';
import React from 'react';
import HomeIcon from '@/public/assets/icons/home.svg';
import ExploreIcon from '@/public/assets/icons/Explore.svg';
import NotificationsIcon from '@/public/assets/icons/notifications.svg';
import MessagesIcon from '@/public/assets/icons/messages.svg';
import ListsIcon from '@/public/assets/icons/lists.svg';
import BookmarksIcon from '@/public/assets/icons/bookmarks.svg';
import CommunitiesIcon from '@/public/assets/icons/communities.svg';
import VerifiedIcon from '@/public/assets/icons/verified.svg';
import ProfileIcon from '@/public/assets/icons/profile.svg';
import MoreIcon from '@/public/assets/icons/more.svg';
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
  const Icon = getIconComponent(name);

  return (
    <Link href={link} className='flex h-14 justify-end xl:mr-6'>
      <div className='btnhover flex-center my-1 h-14 w-14 flex-row p-3 xl:flex xl:w-full xl:items-start xl:justify-start'>
        <Icon className={clsx('flex-center h-7 w-7 ', `${isActive ? 'fill-gray-200' : 'fill-gray-400'}`)} />
        <span className={clsx(`ml-5 hidden text-xl capitalize xl:block`, `${isActive ? 'font-bold' : ''}`)}>{name}</span>
      </div>
    </Link>
  );
};

const getIconComponent = (name: string) => {
  switch (name) {
    case 'home':
      return HomeIcon;
    case 'explore':
      return ExploreIcon;
    case 'notifications':
      return NotificationsIcon;
    case 'messages':
      return MessagesIcon;
    case 'lists':
      return ListsIcon;
    case 'bookmarks':
      return BookmarksIcon;
    case 'communities':
      return CommunitiesIcon;
    case 'verified':
      return VerifiedIcon;
    case 'profile':
      return ProfileIcon;
    case 'more':
      return MoreIcon;
    default:
      return null;
  }
};
