'use client';

import { useState } from 'react';

export const NavButton = ({ name }: { name: string }) => {
  const [isHere, setIsHere] = useState<boolean>(false);

  return (
    <div className='btnhover my-1 flex h-14 flex-row p-3'>
      <div>
        <svg
          viewBox='0 0 24 24'
          aria-hidden='true'
          className='aspect-square h-7 fill-white'
        >
          <g>
            <path d='M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z'></path>
          </g>
        </svg>
      </div>
      <span className={`ml-5 text-xl ${isHere ? 'font-bold' : ''} capitalize`}>
        {name}
      </span>
    </div>
  );
};
