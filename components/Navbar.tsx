import Image from 'next/image';

export const Navbar = () => {
  return (
    <header className='flex h-screen w-64 flex-col justify-between px-2'>
      <div>
        <div>Navigation</div>
        <div>
          <div>Home</div>
          <div>Explore</div>
          <div>Notifications</div>
          <div>Lists</div>
          <div>Booksmarks</div>
          <div>Verified</div>
          <div>Profile</div>
          <div>More</div>
        </div>
        <div>Tweet</div>
      </div>
      <div className='my-3 flex cursor-pointer items-center rounded-full p-3 transition-all duration-200 hover:bg-gray-900 hover:shadow-lg'>
        <div>
          <Image
            src='/assets/avatar/avatar.jpg'
            alt='Avatar'
            height={40}
            width={40}
            className='rounded-full'
          />
        </div>
        <div className='mx-3 flex flex-col text-xs'>
          <span className='font-bold'>DarkNoriss</span>
          <span className='font-normal text-gray-500'>@DarkNoriss231</span>
        </div>
        <div className='flex flex-1 justify-end'>
          <svg viewBox='0 0 24 24' aria-hidden='true' className='h-5 fill-white '>
            <g>
              <path d='M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'></path>
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
};
