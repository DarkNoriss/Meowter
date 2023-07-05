import { useSession } from 'next-auth/react';
import Image from 'next/image';

export const ImageAvatar = () => {
  const { data: session } = useSession();

  return (
    <Image
      src={session?.user?.image as string}
      alt='Avatar'
      height={40}
      width={40}
      className='rounded-full'
    />
  );
};
