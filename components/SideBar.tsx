import Image from 'next/image';

export const SideBar = () => {
  return (
    <div>
      <div className='h-screen w-96'>
        <div className='border-white-smoll fixed top-0 h-full w-96 !border-y-0 !border-r-0 pl-7'>
          <div className='mt-2'>
            <div className='flex-center w-full rounded-full bg-slate-800'>
              <div className='pl-4'>
                <Image
                  src={`/assets/icons/explore.svg`}
                  alt='logo'
                  height={20}
                  width={20}
                />
              </div>
              <div className='flex-1 p-3'>
                <input
                  className='w-full bg-transparent text-xl'
                  placeholder='Search Meowter'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
