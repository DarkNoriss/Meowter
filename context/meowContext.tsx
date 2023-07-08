'use client';

import { MeowType, UserType } from '@/types/custom-types';
import { ReactNode, createContext, useContext, useReducer, useState } from 'react';

type MeowterContextType = {
  fetchMeows: () => Promise<void>;
  fetchUser: ({ userLink }: { userLink: string }) => Promise<void>;
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
    const response = await fetch('api/meow');
    const data = await response.json();

    setMeows(data);
  };

  const fetchUser = async ({ userLink }: { userLink: string }) => {
    const response = await fetch(`api/users/${userLink}`);
    const data = await response.json();

    setUser(data);
  };

  const fetchUserMeows = async ({ userId }: { userId: string }) => {
    const response = await fetch(`api/users/${userId}/meow`);
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
