'use client';

import { useState } from 'react';
import { ExpandingTextarea } from './ExpandingTextarea';
import { ImageAvatar } from '../Navbar/ImageAvatar';
import { clsx } from 'clsx';
import { useSession } from 'next-auth/react';
import { useQueryClient } from '@tanstack/react-query';

export const Form = () => {
  const { data: session } = useSession();
  const [text, setText] = useState('');
  const queryClient = useQueryClient();
  const [sendingMeow, setSendingMeow] = useState<boolean>(false);

  const createMeow = async (e: any) => {
    e.preventDefault();
    setSendingMeow(true);

    try {
      await sendMeow(text);
    } catch (err) {
      console.log(err);
    } finally {
      setText('');
      setSendingMeow(false);
      queryClient.invalidateQueries(['meows']);
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

const sendMeow = async (text: string) => {
  const response = await fetch('/api/meow/new', {
    method: 'POST',
    body: JSON.stringify({
      context: text,
    }),
  });

  const data = await response.json();
  return data;
};
