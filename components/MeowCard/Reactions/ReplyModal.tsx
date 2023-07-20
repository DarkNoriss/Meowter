import CloseIcon from '@/public/assets/icons/close.svg';
import Image from 'next/image';
import { ExpandingTextarea } from '@/components/Form/ExpandingTextarea';
import { ImageAvatar } from '@/components/Navbar/ImageAvatar';
import { clsx } from 'clsx';
import { RefObject, useEffect, useRef, useState } from 'react';
import { MeowWithAuthor } from '@/types/custom-types';
import { CardContext } from '../CardContext';
import { useQueryClient } from '@tanstack/react-query';

export const ReplyModal = ({ closeModal, meow }: { closeModal: () => void; meow: MeowWithAuthor }) => {
  const [text, setText] = useState('');
  const [sendingReply, setSendingReply] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const modalRef: RefObject<HTMLDivElement> = useRef(null);

  const placeholder = 'Meow your reply!';

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      // Check if the click is outside the modal
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    const handleEscapeKey = (event: any) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    // Attach the event listener when the modal is open
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);
    document.body.classList.add('overflow-hidden');

    // Clean up the event listener when the modal is closed or unmounted
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.classList.remove('overflow-hidden');
    };
  }, [closeModal]);

  const createReply = async (e: any) => {
    e.preventDefault();
    setSendingReply(true);

    try {
      console.log('Sending reply!');
      await sendReply(meow.id, text);
    } catch (err) {
      console.log(err);
    } finally {
      setText('');
      setSendingReply(false);
      await queryClient.invalidateQueries(['meows']);
      closeModal();
    }
  };

  return (
    <div className='flex-center not-in-group fixed left-0 top-0 z-10 h-full w-full bg-gray-700 bg-opacity-50'>
      <div
        className='w-full max-w-xl rounded-2xl bg-gray-900'
        onClick={(e) => {
          e.stopPropagation();
        }}
        ref={modalRef}
      >
        <div className='flex h-14 px-4'>
          <div className='flex-center' onClick={closeModal}>
            <div className='btnhover p-2'>
              <CloseIcon alt='Close button' className='h-5 fill-gray-200' />
            </div>
          </div>
        </div>
        <div className='flex h-full px-4'>
          <div className='mr-3 flex flex-col pt-3'>
            <Image src={meow.user.avatar} alt='Avatar' height={40} width={40} className='rounded-full' />
            <div className='flex-center -mb-2 mt-1 flex-1'>
              <div className='h-full w-[2px] -translate-x-1/2 bg-gray-600'></div>
            </div>
          </div>
          <div className='max-w-full flex-1'>
            <div className='pb-3'>
              <div className='flex flex-row justify-between'>
                <div className='flex flex-row'>
                  <div className='max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap lg:max-w-none'>
                    <span className='text-sm font-bold lg:text-base'>{meow.user.username}</span>
                  </div>
                  <div className='ml-1 max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap text-gray-500 lg:max-w-none'>
                    <span className='text-sm lg:text-base'>@{meow.user.userlink}</span>
                  </div>
                </div>
              </div>
              <CardContext context={meow.text} />
            </div>
            <div className='pb-4 pt-1'>
              <span className='text-sm text-gray-500 lg:text-base'>Replying to </span>
              <span>@{meow.user.userlink}</span>
            </div>
          </div>
        </div>
        <div className='flex px-4'>
          <div className='mr-3 pt-3'>
            <ImageAvatar />
          </div>
          <form className='w-full' onSubmit={createReply}>
            <ExpandingTextarea text={text} setText={setText} placeholder={placeholder} />
            <div className='flex justify-end pb-2 text-base font-bold'>
              <button
                className={clsx(
                  `flex-center mt-3 h-9 rounded-full bg-gray-500 px-4 `,
                  text.length === 0 ? 'bg-gray-700' : 'btnhover hover:bg-gray-600'
                )}
                disabled={sendingReply || text.length === 0}
              >
                Reply
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const sendReply = async (meowId: string, text: string) => {
  const response = await fetch('/api/reply/new', {
    method: 'POST',
    body: JSON.stringify({
      meowId,
      text,
    }),
  });

  const data = await response.json();
  return data;
};
