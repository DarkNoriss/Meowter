import Image from 'next/image';

export const CardAvatar = ({ avatarUrl }: { avatarUrl: string }) => {
  return <Image src={avatarUrl} alt='Avatar' height={40} width={40} className='rounded-full' />;
};
