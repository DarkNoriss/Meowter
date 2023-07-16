import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const ProfileNavigation = ({ params }: { params: { id: string } }) => {
  const path = usePathname();
  const navigationMap: { [key: string]: string } = {
    meows: `/${params.id}`,
    with_replies: `/${params.id}/with_replies`,
    highlights: `/${params.id}/highlights`,
    media: `/${params.id}/media`,
    likes: `/${params.id}/likes`,
  };

  const buttons = [
    { name: 'Meows', link: `/${params.id}`, key: 'meows' },
    { name: 'Replies', link: `/${params.id}/with_replies`, key: 'with_replies' },
    { name: 'Highlights', link: `/${params.id}/highlights`, key: 'highlights' },
    { name: 'Media', link: `/${params.id}/media`, key: 'media' },
    { name: 'Likes', link: `/${params.id}/likes`, key: 'likes' },
  ];

  const isActive = (name: string) => {
    return path === navigationMap[name];
  };

  return (
    <div className='border-white-smoll flex h-14 flex-row !border-t-0 font-normal'>
      {buttons.map((button) => (
        <ProfileButton key={button.key} name={button.name} link={button.link} isActive={isActive(button.key)} />
      ))}
    </div>
  );
};

const ProfileButton = ({ name, link, isActive }: { name: string; link: string; isActive: boolean }) => {
  return (
    <Link href={link} passHref className='flex-center btnhover flex-1 !rounded-none px-2 lg:px-4'>
      <div className='flex-center h-full'>
        <span className={clsx('text-sm lg:text-base', `${isActive ? 'font-bold text-gray-200' : 'text-gray-500'}`)}>{name}</span>
      </div>
    </Link>
  );
};
