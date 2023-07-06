import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const Button = ({ name }: { name: string }) => {
  const [isHere, setIsHere] = useState<boolean>(false);
  const path = usePathname();

  useEffect(() => {
    const isPathMatched = (name === 'home' && path === '/') || path === `/${name}`;
    setIsHere(isPathMatched);
  }, [name, path]);

  return (
    <div className='btnhover my-1 flex h-14 flex-row p-3'>
      <div>
        <Image src={`/assets/icons/${name}.svg`} alt='logo' height={28} width={28} />
      </div>
      <span className={`ml-5 text-xl ${isHere ? 'font-bold' : ''} capitalize`}>
        {name}
      </span>
    </div>
  );
};
