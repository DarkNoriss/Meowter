import { useState } from 'react';
import { ExpandingTextarea } from './ExpandingTextarea';
import { ImageAvatar } from './ImageAvatar';
import { useSession } from 'next-auth/react';
import { useMeowterContext } from '@/context/meowContext';

export const Form = () => {
  const { data: session } = useSession();
  const { fetchMeows } = useMeowterContext();
  const [text, setText] = useState('');
  const [sendingMeow, setSendingMeow] = useState<boolean>(false);

  const createMeow = async (e: any) => {
    e.preventDefault();
    setSendingMeow(true);

    try {
      const response = await fetch('/api/meow/new', {
        method: 'POST',
        body: JSON.stringify({
          userId: session?.user.id,
          context: text,
          date: new Date(),
        }),
      });
      if (response.ok) {
        console.log('meow sended');
      }
    } catch (err) {
      console.log(err);
    } finally {
      setSendingMeow(false);
      setText('');
      fetchMeows();
    }
  };

  return (
    <div className='border-white-smoll flex !border-t-0 px-4'>
      <div className='mr-3 pt-3'>
        <ImageAvatar />
      </div>
      <form className='flex flex-1 flex-col py-1' onSubmit={createMeow}>
        <ExpandingTextarea text={text} setText={setText} />
        <div className='flex justify-end pb-2 text-base font-bold'>
          <button
            className='flex-center btnhover mt-3 h-9 rounded-full bg-gray-500 px-4 hover:bg-gray-600'
            disabled={sendingMeow || text.length === 0}
          >
            Meow
          </button>
        </div>
      </form>
    </div>
  );
};
