'use client';

import { MeowType } from '@/types/custom-types';
import { ReactNode, createContext, useContext, useReducer, useState } from 'react';

type MeowterContextType = {
  fetchMeows: () => Promise<void>;
  getMeows: () => MeowType[];
};

const MeowterContext = createContext({} as MeowterContextType);

export const useMeowterContext = () => {
  return useContext(MeowterContext);
};

export const MeowterProvider = ({ children }: { children: ReactNode }) => {
  const [meows, setMeows] = useState<MeowType[]>([]);

  const fetchMeows = async () => {
    const response = await fetch('api/meow');
    const data = await response.json();

    setMeows(data);
  };

  const getMeows = () => meows;

  return (
    <MeowterContext.Provider value={{ fetchMeows, getMeows }}>
      {children}
    </MeowterContext.Provider>
  );
};
