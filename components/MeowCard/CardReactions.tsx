import Image from 'next/image';
import { MeowWithAuthor } from '@/types/custom-types';
import { useSWRConfig } from 'swr';
import { useSession } from 'next-auth/react';

export const CardReactions = ({ meow }: { meow: MeowWithAuthor }) => {
  const { data: session } = useSession();
  const { mutate } = useSWRConfig();
  const { comments, remeows, likes } = meow;

  const handleLike = async () => {
    try {
      for (const like of likes) {
        if (like.userId === session?.user.id) {
          await fetch('/api/like/remove', {
            method: 'POST',
            body: JSON.stringify({
              meowId: meow.id,
            }),
          });
          return;
        }
      }

      await fetch('/api/like/add', {
        method: 'POST',
        body: JSON.stringify({
          meowId: meow.id,
        }),
      });
    } catch (err) {
      console.log(err);
    } finally {
      mutate('/api/meow');
    }
  };

  return (
    <div className='max-w-[425px]'>
      <div className='mt-3 flex justify-between gap-2'>
        <div className='flex min-h-[20px] flex-row'>
          <div>
            <Image src='/assets/icons/reply.svg' alt='Avatar' height={20} width={20} />
          </div>
          <span className={'text-reactions px-3 text-sm'}>
            {/* {comments?.length !== 0 ? comments?.length : ''} */}
          </span>
        </div>
        <div className='flex min-h-[20px] flex-row'>
          <div>
            <Image src='/assets/icons/remeow.svg' alt='Avatar' height={20} width={20} />
          </div>
          <span className={'text-reactions px-3 text-sm'}>
            {/* {remeows?.length !== 0 ? remeows?.length : ''} */}
          </span>
        </div>
        <div className='flex min-h-[20px] cursor-pointer flex-row' onClick={handleLike}>
          <div>
            <Image src='/assets/icons/like.svg' alt='Avatar' height={20} width={20} />
          </div>
          <span className={'text-reactions px-3 text-sm'}>
            {likes?.length !== 0 ? likes?.length : ''}
          </span>
        </div>
        <div className='flex min-h-[20px] flex-row'>
          <div>
            <Image src='/assets/icons/view.svg' alt='Avatar' height={20} width={20} />
          </div>
          <span className={'text-reactions px-3 text-sm'}></span>
        </div>
        <div className='flex min-h-[20px] flex-row'>
          <div>
            <Image src='/assets/icons/share.svg' alt='Avatar' height={20} width={20} />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
