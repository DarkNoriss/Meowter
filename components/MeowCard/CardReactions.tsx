import clsx from 'clsx';
import ReplyIcon from '@/public/assets/icons/reply.svg';
import RemeowIcon from '@/public/assets/icons/remeow.svg';
import LikeIcon from '@/public/assets/icons/like.svg';
import ViewIcon from '@/public/assets/icons/view.svg';
import ShareIcon from '@/public/assets/icons/share.svg';
import { MeowWithAuthor } from '@/types/custom-types';
import { useSession } from 'next-auth/react';
import { Like } from '@prisma/client';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export const CardReactions = ({ meow }: { meow: MeowWithAuthor }) => {
  const { data: session } = useSession();
  const [sendingLike, setSendingLike] = useState(false);
  const queryClient = useQueryClient();
  const { comments, remeows, likes } = meow;

  const commented: boolean = false;
  const remeowed: boolean = false;
  const liked: boolean = !!likes?.find((like: Like) => like.userId === session?.user.id);

  const divClasses = clsx('flex min-h-[20px] cursor-pointer flex-row');

  const handleLike = async () => {
    if (!session || sendingLike) return;

    try {
      setSendingLike(true);
      const userHasLiked = await checkLike(meow.id);

      if (userHasLiked) {
        console.log('Removing like!');
        await sendLike('/api/like/remove', meow.id);
      } else {
        console.log('Sending like!');
        await sendLike('/api/like/add', meow.id);
      }

      await queryClient.invalidateQueries(['meows']);
    } catch (err) {
      console.log(err);
    } finally {
      setSendingLike(false);
    }
  };

  return (
    <div className='max-w-[425px]'>
      <div className='-mb-2 -ml-2 flex justify-between gap-2'>
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
        <div
          className={clsx(
            divClasses,
            'group hover:fill-green-600 hover:text-green-600',
            `${remeowed ? 'fill-green-600 text-green-600' : 'fill-gray-400 text-gray-400'}`
          )}
        >
          <div className='p-2 group-hover:rounded-full group-hover:bg-green-600 group-hover:bg-opacity-25'>
            <RemeowIcon alt='remeow' className='aspect-square h-5' />
          </div>
          <span className='flex-center px-3 text-sm'>{/* {remeows?.length !== 0 ? remeows?.length : ''} */}</span>
        </div>
        <div
          className={clsx(
            divClasses,
            'group hover:fill-red-600 hover:text-red-600',
            `${liked ? 'fill-red-600 text-red-600' : 'fill-gray-400 text-gray-400'}`
          )}
          onClick={handleLike}
        >
          <div className='p-2 group-hover:rounded-full group-hover:bg-red-600 group-hover:bg-opacity-25'>
            <LikeIcon alt='like' className='aspect-square h-5' />
          </div>
          <span className='flex-center px-3 text-sm'>{likes?.length !== 0 ? likes?.length : ''}</span>
        </div>
        <div className={clsx(divClasses, 'fill-gray-400 text-gray-400')}>
          <div className='btnhover p-2 hover:bg-opacity-75'>
            <ViewIcon alt='like' className='aspect-square h-5' />
          </div>
          <span className='flex-center px-3 text-sm'></span>
        </div>
        <div className={clsx(divClasses, 'fill-gray-400 text-gray-400')}>
          <div className='btnhover p-2 hover:bg-opacity-75'>
            <ShareIcon alt='like' className='aspect-square h-5' />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

const sendLike = async (url: string, meowId: string) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      meowId: meowId,
    }),
  });
};

const checkLike = async (meowId: string) => {
  const response = await fetch('/api/like', {
    method: 'POST',
    body: JSON.stringify({
      meowId: meowId,
    }),
  });

  const data = await response.json();
  const { exists } = data;

  return exists;
};
