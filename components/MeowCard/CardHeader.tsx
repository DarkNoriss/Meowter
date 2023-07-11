import Link from 'next/link';
import { MeowCardType } from './MeowCard';

export const CardHeader: React.FC<MeowCardType> = ({ meow, creator }) => {
  return (
    <div className='flex flex-row justify-between'>
      <Link
        href={`/${meow.creator.userlink ?? creator?.userlink}`}
        className='flex cursor-pointer flex-row'
        passHref
      >
        <div className='text-base font-bold'>
          {meow.creator.username ?? creator?.username}
        </div>
        <div className='ml-1 text-base text-gray-500'>
          @{meow.creator.userlink ?? creator?.userlink}
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
