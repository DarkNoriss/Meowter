'use client';

import { useState } from 'react';
import { ExpandingTextarea } from './ExpandingTextarea';
import { ImageAvatar } from '../ImageAvatar';
import { clsx } from 'clsx';
import { useSession } from 'next-auth/react';
import { useSWRConfig } from 'swr';

export const Form = () => {
  const { data: session } = useSession();
  const [text, setText] = useState('');
  const { mutate } = useSWRConfig();
  const [sendingMeow, setSendingMeow] = useState<boolean>(false);

  const createMeow = async (e: any) => {
    e.preventDefault();
    setSendingMeow(true);

    try {
      const response = await fetch('/api/meow/new', {
        method: 'POST',
        body: JSON.stringify({
          context: text,
        }),
      });
      if (response.ok) {
        console.log('Meow sended!');
      }
    } catch (err) {
      console.log(err);
    } finally {
      setText('');
      setSendingMeow(false);
      mutate('/api/meow');
    }
  };

  return (
    <>
      {session && (
        <div className='border-white-smoll flex !border-t-0 px-4'>
          <div className='mr-3 pt-3'>
            <ImageAvatar />
          </div>
          <form className='flex flex-1 flex-col py-1' onSubmit={createMeow}>
            <ExpandingTextarea text={text} setText={setText} />
            <div className='flex justify-end pb-2 text-base font-bold'>
              <button
                className={clsx(
                  `flex-center mt-3 h-9 rounded-full bg-gray-500 px-4 `,
                  text.length === 0 ? 'bg-gray-700' : 'btnhover hover:bg-gray-600'
                )}
                disabled={sendingMeow || text.length === 0}
              >
                Meow
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
