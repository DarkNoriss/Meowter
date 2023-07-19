import LikeIcon from '@/public/assets/icons/like.svg';
import { Like } from '@prisma/client';
import { useQueryClient } from '@tanstack/react-query';
import { clsx } from 'clsx';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

export const CardReactionLike = ({ meowId, likes, divClasses }: { meowId: string; likes: Like[]; divClasses: string }) => {
  const { data: session } = useSession();
  const [sendingLike, setSendingLike] = useState(false);
  const queryClient = useQueryClient();

  const liked: boolean = !!likes.find((like: Like) => like.userId === session?.user.id);

  const handleLike = async () => {
    if (!session || sendingLike) return;

    try {
      setSendingLike(true);
      const userHasLiked = await checkLike(meowId);

      if (userHasLiked) {
        console.log('Removing like!');
        await sendLike('/api/like/remove', meowId);
      } else {
        console.log('Sending like!');
        await sendLike('/api/like/add', meowId);
      }

      await queryClient.invalidateQueries(['meows']);
    } catch (err) {
      console.log(err);
    } finally {
      setSendingLike(false);
    }
  };

  return (
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
