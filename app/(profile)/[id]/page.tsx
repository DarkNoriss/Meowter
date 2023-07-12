'use client';

import Image from 'next/image';
import { FeedProfile } from '@/components/FeedProfile';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import useSWR from 'swr';
import { UserWithMeows } from '@/types/custom-types';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Profile = ({ params }: { params: { id: string } }) => {
  const { data: session } = useSession();
  const { data } = useSWR<UserWithMeows>(`/api/users/${params.id}`, fetcher);

  return (
    <>
      {data && (
        <div key={data.id}>
          <div className='border-white-smoll bg-transblur sticky top-0 flex h-14 w-full max-w-xl items-center !border-t-0 px-4 backdrop-blur-md backdrop-filter'>
            <Link href='/' className='min-w-[56px]' passHref>
              <Image src={`/assets/icons/arrow.svg`} alt='logo' height={22} width={22} />
            </Link>
            <div className='flex flex-col'>
              <span className='text-xl font-bold'>{data.username}</span>
              <span className='text-sm text-gray-500'>{data.meows.length} Meows</span>
            </div>
          </div>
          <div>
            <div>
              <Image src={`/assets/img/bg.jpg`} alt='logo' height={500} width={1500} />
            </div>
            <div className='mb-4 px-4 pt-3'>
              <div className='-mb-4 flex justify-between'>
                <div className='mt-[15%] w-1/4'>
                  <div className='relative'>
                    <div className='absolute bottom-1/2 -translate-y-1/4'>
                      <Image
                        src={data.avatar}
                        alt='Avatar'
                        height={135}
                        width={135}
                        className='rounded-full border-4 border-gray-900'
                      />
                    </div>
                  </div>
                </div>
                {session?.user.link === params.id && (
                  <div className='flex-center btnhover mb-3 h-9 rounded-full border px-4'>
                    <span className='text-base font-bold'>Edit profile</span>
                  </div>
                )}
              </div>
              <div className='mb-3 mt-1 flex flex-col'>
                <div>
                  <span className='text-xl font-bold'>{data.username}</span>
                </div>
                <div>
                  <span className='font-normal text-gray-500'>@{data.userlink}</span>
                </div>
              </div>
              <div className='flex flex-row font-normal text-gray-500'>
                <span className='mr-5'>Born</span>
                <span>Joined</span>
              </div>
            </div>
          </div>
          <div className='border-white-smoll flex h-14 flex-row !border-x-0 !border-t-0 font-normal text-gray-500'>
            <div className='flex-center btnhover flex-1 !rounded-none px-4'>
              <div className='flex-center h-full'>
                <span>Meows</span>
              </div>
            </div>
            <div className='flex-center btnhover flex-1 !rounded-none px-4'>
              <div className='flex-center h-full'>
                <span>Replies</span>
              </div>
            </div>
            <div className='flex-center btnhover flex-1 !rounded-none px-4'>
              <div className='flex-center h-full'>
                <span>Highlights</span>
              </div>
            </div>
            <div className='flex-center btnhover flex-1 !rounded-none px-4'>
              <div className='flex-center h-full '>
                <span>Media</span>
              </div>
            </div>
            <div className='flex-center btnhover flex-1 !rounded-none px-4'>
              <div className='flex-center h-full'>
                <span>Likes</span>
              </div>
            </div>
          </div>
          <FeedProfile meows={data.meows} />
        </div>
      )}
    </>
  );
};

export default Profile;
