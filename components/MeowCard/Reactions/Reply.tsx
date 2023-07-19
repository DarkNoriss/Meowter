import ReplyIcon from '@/public/assets/icons/reply.svg';
import React from 'react';
import { clsx } from 'clsx';
import { Reply } from '@prisma/client';

export const CardReactionReply = ({ meowId, reply, divClasses }: { meowId: string; reply: Reply[]; divClasses: string }) => {
  const commented: boolean = false;

  return (
    <div
      className={clsx(
        divClasses,
        'group hover:fill-blue-600 hover:text-blue-600',
        `${commented ? 'fill-blue-600 text-blue-600' : 'fill-gray-400 text-gray-400'}`
      )}
    >
      <div className='p-2 group-hover:rounded-full group-hover:bg-blue-600 group-hover:bg-opacity-25'>
        <ReplyIcon alt='reply' className='aspect-square h-5' />
      </div>
      <span className='flex-center px-3 text-sm'>{/* {comments?.length !== 0 ? comments?.length : ''} */}</span>
    </div>
  );
};
