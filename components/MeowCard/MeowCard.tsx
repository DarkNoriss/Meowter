import Image from 'next/image';
import React from 'react';
import { MeowType, UserType } from '@/types/custom-types';
import { CardHeader } from './CardHeader';
import { CardContext } from './CardContext';
import { CardReactions } from './CardReactions';

export type MeowCardType = {
  meow: MeowType;
  creator?: UserType;
};

export const MeowCard: React.FC<MeowCardType> = ({ meow, creator }) => {
  return (
    <article className='border-white-smoll !border-t-0 px-4'>
      <div className='flex flex-row py-3'>
        <div className='mr-3'>
          <Image
            src={meow.creator.image ?? creator?.image}
            alt='Avatar'
            height={40}
            width={40}
            className='rounded-full'
          />
        </div>
        <div className='flex-1'>
          <CardHeader meow={meow} creator={creator} />
          <CardContext context={meow.context} />
          <CardReactions meow={meow} />
        </div>
      </div>
    </article>
  );
};
