import Image from 'next/image';
import { useSession } from 'next-auth/react';

export const ImageAvatar = () => {
  const { data: session } = useSession();

  return <Image src={session?.user?.image as string} alt='Avatar' height={40} width={40} className='h-10 w-10 rounded-full' />;
};
