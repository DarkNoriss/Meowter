import Link from 'next/link';
import { MeowWithAuthor } from '@/types/custom-types';

export const CardHeader = ({ meow }: { meow: MeowWithAuthor }) => {
  return (
    <div className='flex flex-row justify-between'>
      <Link href={`/${meow.author.userlink}`} className='flex cursor-pointer flex-row' passHref>
        <div className='max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap lg:max-w-none'>
          <span className='text-sm font-bold lg:text-base'>{meow.author.username}</span>
        </div>
        <div className='ml-1 max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap text-gray-500 lg:max-w-none'>
          <span className='text-sm lg:text-base'>@{meow.author.userlink}</span>
        </div>
      </Link>
      <div className='flex-center btnhover p-[4px]'>
        <svg viewBox='0 0 24 24' aria-hidden='true' className='h-4 fill-gray-500'>
          <g>
            <path d='M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'></path>
          </g>
        </svg>
      </div>
    </div>
  );
};
