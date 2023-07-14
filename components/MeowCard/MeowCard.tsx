import React from 'react';
import Image from 'next/image';
import { MeowWithAuthor } from '@/types/custom-types';
import { CardHeader } from './CardHeader';
import { CardContext } from './CardContext';
import { CardReactions } from './CardReactions';

export const MeowCard = ({ meow }: { meow: MeowWithAuthor }) => {
  return (
    <article className='border-white-smoll !border-t-0 px-4'>
      <div className='flex max-w-full flex-row p-3'>
        <div className='mr-3 min-w-max'>
          <Image
            src={meow.author.avatar}
            alt='Avatar'
            height={40}
            width={40}
            className='rounded-full'
          />
        </div>
        <div className='max-w-full flex-1'>
          <CardHeader meow={meow} />
          <CardContext context={meow.text} />
          <CardReactions meow={meow} />
        </div>
      </div>
    </article>
  );
};
