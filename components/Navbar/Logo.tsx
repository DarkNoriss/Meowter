import Link from 'next/link';
import Image from 'next/image';

export const Logo = () => {
  return (
    <div className='flex justify-end xl:justify-start'>
      <Link
        href='/'
        className='btnhover flex-center aspect-square h-14 py-[2px]'
        passHref
      >
        <Image
          src='/assets/icons/cat.svg'
          alt='logo'
          height={28}
          width={28}
          className='h-8 w-auto'
        />
      </Link>
    </div>
  );
};
