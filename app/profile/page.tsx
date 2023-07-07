'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';

const Profile = () => {
  const { data: session } = useSession();

  return (
    <>
      <div className='border-white-smoll bg-transblur sticky top-0 flex h-14 w-full max-w-xl items-center !border-t-0 px-4 backdrop-blur-md backdrop-filter'>
        <div className='min-w-[56px]'>
          <Image src={`/assets/icons/arrow.svg`} alt='logo' height={22} width={22} />
        </div>
        <div className='flex flex-col'>
          <span className='text-xl font-bold'>{session?.user.name}</span>
          <span className='text-sm text-gray-500'>987 Meows</span>
        </div>
      </div>
      <div>
        <div>
          <Image src={`/assets/img/bg.jpg`} alt='logo' height={500} width={1500} />
        </div>
        <div className='mb-4 px-4 pt-3'>
          <div className='flex '>
            <div>
              <Image
                src={session?.user.image}
                alt='Avatar'
                height={40}
                width={40}
                className='rounded-full'
              />
            </div>
            <div>
              <span>Edit profile</span>
            </div>
          </div>
          <div className='flex flex-col'>
            <div>
              <span className='text-xl font-bold'>{session?.user.name}</span>
            </div>
            <div>
              <span className='text-xl font-bold'>{session?.user.name}</span>
            </div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
