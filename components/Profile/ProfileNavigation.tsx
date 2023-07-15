import { usePathname } from 'next/navigation';

export const ProfileNavigation = () => {
  return (
    <div className='border-white-smoll flex h-14 flex-row !border-t-0 font-normal text-gray-500'>
      <ProfileButton name={'Meows'} />
      <ProfileButton name={'Replies'} />
      <ProfileButton name={'Highlights'} />
      <ProfileButton name={'Media'} />
      <ProfileButton name={'Likes'} />
    </div>
  );
};

const ProfileButton = ({ name }: { name: string }) => {
  const path = usePathname();

  console.log(path);
  return (
    <div className='flex-center btnhover flex-1 !rounded-none px-2 lg:px-4'>
      <div className='flex-center h-full'>
        <span className='text-sm lg:text-base'>{name}</span>
      </div>
    </div>
  );
};
