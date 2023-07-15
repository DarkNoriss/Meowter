import Link from 'next/link';
import DotsIcon from '@/public/assets/icons/dots.svg';
import { MeowWithAuthor } from '@/types/custom-types';

export const CardHeader = ({ meow }: { meow: MeowWithAuthor }) => {
  return (
    <div className='flex flex-row justify-between'>
      <Link href={`/${meow.user.userlink}`} className='flex cursor-pointer flex-row' passHref>
        <div className='max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap lg:max-w-none'>
          <span className='text-sm font-bold lg:text-base'>{meow.user.username}</span>
        </div>
        <div className='ml-1 max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap text-gray-500 lg:max-w-none'>
          <span className='text-sm lg:text-base'>@{meow.user.userlink}</span>
        </div>
      </Link>
      <div className='flex-center btnhover p-[4px]'>
        <DotsIcon alt='dots' className='aspect-square h-4 fill-gray-500' />
      </div>
    </div>
  );
};
