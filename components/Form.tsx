'use client';

import { ImageAvatar } from './ImageAvatar';

export const Form = () => {
  return (
    <div className='border-white-smoll flex px-4'>
      <div className='mr-3 pt-3'>
        <ImageAvatar />
      </div>
      <form className='flex flex-1 flex-col py-1'>
        <textarea
          className='border-white-smoll !border-x-0 !border-t-0 bg-transparent py-3 text-xl focus:outline-none'
          placeholder='What is happening?!'
        />
        <div className='flex justify-end pb-2 text-base font-bold'>
          <div className='flex-center btnhover mt-3 h-9 rounded-full bg-gray-500 px-4 hover:bg-gray-600 '>
            <span>Meow</span>
          </div>
        </div>
      </form>
    </div>
  );
};
