'use client';

import useSWR from 'swr';
import { UserWithMeows } from '@/types/custom-types';
import { fetcher } from '@/utils/useSWRFetcher';
import { MeowCard } from '@/components/MeowCard/MeowCard';

const ProfileLikes = ({ params }: { params: { id: string } }) => {
  const { data } = useSWR<UserWithMeows>(`/api/users/${params.id}/likes`, fetcher);

  if (data)
    return (
      <>
        {data.map((like: any) => (
          <MeowCard key={like.id} meow={like.meow} />
        ))}
      </>
    );
};

export default ProfileLikes;
