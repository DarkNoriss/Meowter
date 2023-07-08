import Image from 'next/image';
import React from 'react';
import { MeowType } from '@/types/custom-types';
import Link from 'next/link';

export const MeowCard = ({ meow }: { meow: MeowType }) => {
  return (
    <article className='border-white-smoll !border-t-0 px-4'>
      <div className='flex flex-row py-3'>
        <div className='mr-3'>
          <Image
            src={meow.creator.image}
            alt='Avatar'
            height={40}
            width={40}
            className='rounded-full'
          />
        </div>
        <div className='flex-1'>
          <div className='flex flex-row justify-between'>
            <Link
              href={`/${meow.creator.userlink}`}
              className='flex cursor-pointer flex-row'
              passHref
            >
              <div className='text-base font-bold'>{meow.creator.username}</div>
              <div className='ml-1 text-base text-gray-500'>@{meow.creator.userlink}</div>
            </Link>
            <div className='flex-center btnhover p-[4px]'>
              <svg viewBox='0 0 24 24' aria-hidden='true' className='h-4 fill-gray-500'>
                <g>
                  <path d='M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'></path>
                </g>
              </svg>
            </div>
          </div>
          <div>
            <span className=''>{meow.context}</span>
          </div>
          <div>
            <div className='mt-3 flex max-w-[425px] justify-between gap-2'>
              <div className='min-h-[20px]'>
                <div>
                  <Image
                    src='/assets/icons/reply.svg'
                    alt='Avatar'
                    height={20}
                    width={20}
                  />
                </div>
                <div></div>
              </div>
              <div className='min-h-[20px]'>
                <div>
                  <Image
                    src='/assets/icons/remeow.svg'
                    alt='Avatar'
                    height={20}
                    width={20}
                  />
                </div>
                <div></div>
              </div>
              <div className='min-h-[20px]'>
                <div>
                  <Image
                    src='/assets/icons/like.svg'
                    alt='Avatar'
                    height={20}
                    width={20}
                  />
                </div>
                <div></div>
              </div>
              <div className='min-h-[20px]'>
                <div>
                  <Image
                    src='/assets/icons/view.svg'
                    alt='Avatar'
                    height={20}
                    width={20}
                  />
                </div>
                <div></div>
              </div>
              <div className='min-h-[20px]'>
                <div>
                  <Image
                    src='/assets/icons/share.svg'
                    alt='Avatar'
                    height={20}
                    width={20}
                  />
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
