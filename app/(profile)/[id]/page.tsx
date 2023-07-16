'use client';

import useSWR from 'swr';
import { Feed } from '@/components/Feed';
import { UserWithMeows } from '@/types/custom-types';
import { fetcher } from '@/utils/useSWRFetcher';

const Profile = ({ params }: { params: { id: string } }) => {
  const { data } = useSWR<UserWithMeows>(`/api/users/${params.id}/meows`, fetcher);

  return <Feed meows={data} />;
};

export default Profile;
