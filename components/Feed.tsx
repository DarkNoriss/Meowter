import { MeowCard } from './MeowCard/MeowCard';

import useSWR from 'swr';
import { MeowType } from '@/types/custom-types';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Feed = () => {
  const { data } = useSWR<MeowType[]>('/api/meow', fetcher);

  return (
    <>
      {data?.map((meow) => (
        <MeowCard key={meow._id} meow={meow} />
      ))}
    </>
  );
};
