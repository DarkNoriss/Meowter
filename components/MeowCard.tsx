import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { strToLink } from '@/utils/strToLink';

export const MeowCard = () => {
  const { data: session } = useSession();

  return (
    <article className='border-white-smoll !border-t-0 px-4'>
      <div className='flex flex-row py-3'>
        <div className='mr-3'>
          <Image
            src='/assets/avatar/avatar.jpg'
            alt='Avatar'
            height={40}
            width={40}
            className='rounded-full'
          />
        </div>
        <div className='w-full'>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-row'>
              <div className='text-base font-bold'>Patryk Przybylski</div>
              <div className='ml-1 text-base font-normal text-gray-500'>{`${strToLink(
                'Patryk Przybylski'
              )}`}</div>
            </div>
            <div className='flex-center'>
              <svg viewBox='0 0 24 24' aria-hidden='true' className='h-4 fill-gray-500'>
                <g>
                  <path d='M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'></path>
                </g>
              </svg>
            </div>
          </div>
          <div>
            <span>some day this will be a meow</span>
          </div>
          <div></div>
        </div>
      </div>
    </article>
  );
};
