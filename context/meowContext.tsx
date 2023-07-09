'use client';

import { MeowType } from '@/types/custom-types';
import { ReactNode, createContext, useContext, useState } from 'react';

type MeowterContextType = {
  fetchMeows: () => Promise<void>;
  meows: MeowType[];
};

const MeowterContext = createContext({} as MeowterContextType);

export const useMeowterContext = () => {
  return useContext(MeowterContext);
};

export const MeowterProvider = ({ children }: { children: ReactNode }) => {
  const [meows, setMeows] = useState<MeowType[]>([]);

  const fetchMeows = async () => {
    console.log('Fetching meows...');
    const response = await fetch('/api/meow', { cache: 'no-store' });
    const data = await response.json();

    setMeows(data);
  };

  return (
    <MeowterContext.Provider value={{ fetchMeows, meows }}>
      {children}
    </MeowterContext.Provider>
  );
};
