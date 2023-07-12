import Image from 'next/image';
import { MeowWithAuthor } from '@/types/custom-types';

export const CardReactions = ({ meow }: { meow: MeowWithAuthor }) => {
  // const { comments, remeows, likes } = meow;
  return (
    <div className='max-w-[425px]'>
      <div className='mt-3 flex justify-between gap-2'>
        <div className='flex min-h-[20px] flex-row'>
          <div>
            <Image src='/assets/icons/reply.svg' alt='Avatar' height={20} width={20} />
          </div>
          <span className='text-reactions px-3 text-sm'>
            {/* {comments.length !== 0 ?? comments.length} */}
          </span>
        </div>
        <div className='flex min-h-[20px] flex-row'>
          <div>
            <Image src='/assets/icons/remeow.svg' alt='Avatar' height={20} width={20} />
          </div>
          <span className='text-reactions px-3 text-sm'>
            {/* {remeows.length !== 0 ?? remeows.length} */}
          </span>
        </div>
        <div className='flex min-h-[20px] flex-row'>
          <div>
            <Image src='/assets/icons/like.svg' alt='Avatar' height={20} width={20} />
          </div>
          <span className='text-reactions px-3 text-sm'>
            {/* {likes.length !== 0 ?? likes.length} */}
          </span>
        </div>
        <div className='flex min-h-[20px] flex-row'>
          <div>
            <Image src='/assets/icons/view.svg' alt='Avatar' height={20} width={20} />
          </div>
          <div></div>
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
