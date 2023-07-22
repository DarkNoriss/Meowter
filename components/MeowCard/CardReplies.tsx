import { CardContext } from './CardContext';
import { CardHeader } from './CardHeader';
import { CardReactions } from './CardReactions';
import { CardAvatar } from './CardAvatar';
import { ReplyWithAuthor } from '@/types/custom-types';

export const CardReplies = ({ replies }: { replies: ReplyWithAuthor[] }) => {
  console.log(replies);
  return (
    <div>
      {replies.map((reply, index, { length }) => (
        <div key={reply.id} className='flex max-w-full flex-row py-3'>
          <div className='mr-3 flex flex-col pt-3'>
            <CardAvatar avatarUrl={reply.user.avatar} />
            {length - 1 !== index && (
              <div className='flex-center -mb-8 flex-1 pt-1'>
                <div className='h-full w-[2px] -translate-x-1/2 bg-gray-600'></div>
              </div>
            )}
          </div>
          <div className='max-w-full flex-1'>
            <CardHeader meow={reply} />
            <CardContext context={reply.text} />
            <CardReactions meow={reply} type='reply' />
          </div>
        </div>
      ))}
    </div>
  );
};
