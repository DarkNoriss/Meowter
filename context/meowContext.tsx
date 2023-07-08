'use client';

import { MeowType, UserType } from '@/types/custom-types';
import { ReactNode, createContext, useContext, useReducer, useState } from 'react';

type MeowterContextType = {
  fetchMeows: () => Promise<void>;
  fetchUser: ({ id }: { id: string }) => Promise<void>;
  fetchUserMeows: ({ userId }: { userId: string }) => Promise<void>;
  getMeows: () => MeowType[];
  getUser: () => UserType[];
  getUsersMeows: () => MeowType[];
};

const MeowterContext = createContext({} as MeowterContextType);

export const useMeowterContext = () => {
  return useContext(MeowterContext);
};

export const MeowterProvider = ({ children }: { children: ReactNode }) => {
  const [meows, setMeows] = useState<MeowType[]>([]);
  const [user, setUser] = useState<UserType[]>([]);
  const [userMeows, setUserMeows] = useState<MeowType[]>([]);

  const fetchMeows = async () => {
    console.log('Fetching meows...');
    const response = await fetch('/api/meow', { cache: 'no-store' });
    const data = await response.json();

    setMeows(data);
  };

  const fetchUser = async ({ id }: { id: string }) => {
    console.log('Fetching user...');
    const response = await fetch(`/api/users/${id}`);
    const data = await response.json();

    setUser(data);
  };

  const fetchUserMeows = async ({ userId }: { userId: string }) => {
    console.log('Fetching user meows...');
    const response = await fetch(`/api/users/${userId}/meow`);
    const data = await response.json();

    setUserMeows(data);
  };

  const getMeows = () => meows;
  const getUser = () => user;
  const getUsersMeows = () => userMeows;

  return (
    <MeowterContext.Provider
      value={{ fetchMeows, fetchUser, fetchUserMeows, getMeows, getUser, getUsersMeows }}
    >
      {children}
    </MeowterContext.Provider>
  );
};
