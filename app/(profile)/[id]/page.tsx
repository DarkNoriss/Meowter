'use client';

import { Feed } from '@/components/Feed';
import { useQuery } from '@tanstack/react-query';

const Profile = ({ params }: { params: { id: string } }) => {
  const { data } = useQuery({ queryKey: ['userMeows'], queryFn: () => fetchUserMeows(params.id) });

  return <Feed meows={data} />;
};

export default Profile;

const fetchUserMeows = async (id: string) => {
  const response = await fetch(`/api/users/${id}/meows`);
  const data = await response.json();
  return data;
};
