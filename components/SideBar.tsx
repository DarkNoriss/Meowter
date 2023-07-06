import Image from 'next/image';

export const SideBar = () => {
  return (
    <div>
      <div className='border-white-smoll flex h-screen flex-col justify-between !border-y-0 !border-r-0 pl-7 pr-7'>
        <div className='fixed top-0 mt-2 bg-slate-400 '>
          <div className='mb-3 flex w-80'>
            <div>
              <Image
                src={`/assets/icons/explore.svg`}
                alt='logo'
                height={20}
                width={20}
              />
            </div>
            <div className='p-3'>
              <input placeholder='Search Meowter' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
