'use client';

import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { UserWithMeows } from '@/types/custom-types';
import { Feed } from '@/components/Feed';
import { ProfileNavigation } from '@/components/Profile/ProfileNavigation';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Profile = ({ params }: { params: { id: string } }) => {
  const { data: session } = useSession();
  const { data } = useSWR<UserWithMeows>(`/api/users/${params.id}`, fetcher);

  return (
    <>
      {data && (
        <div key={data.id}>
          <div className='border-white-smoll bg-transblur sticky top-0 z-10 flex h-14 w-full max-w-xl items-center !border-t-0 px-4 backdrop-blur-md backdrop-filter'>
            <div className='btnhover mr-4 p-2'>
              <Link href='/' className='min-w-[56px]' passHref>
                <Image
                  src={`/assets/icons/arrow.svg`}
                  alt='logo'
                  height={22}
                  width={22}
                />
              </Link>
            </div>
            <div className='flex flex-col'>
              <span className='text-xl font-bold'>{data.username}</span>
              <span className='text-sm text-gray-500'>{data.meows.length} Meows</span>
            </div>
          </div>
          <div className='border-white-smoll !border-t-0'>
            <div>
              <Image src={`/assets/img/bg.jpg`} alt='logo' height={500} width={1500} />
            </div>
            <div className='mb-4 px-4 pt-3'>
              <div className='-mb-4 flex justify-between lg:-mb-6'>
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
              <div className=' mb-3 flex flex-col'>
                <span className='text-xl font-bold'>{data.username}</span>
                <span className='text-sm font-normal text-gray-500 lg:text-base'>
                  @{data.userlink}
                </span>
              </div>
              <div className='flex flex-row font-normal text-gray-500'>
                {data.birtday_date && (
                  <span className='mr-5 text-sm lg:text-base'>Born</span>
                )}
                <span className='text-sm lg:text-base'>Joined</span>
              </div>
            </div>
          </div>
          <ProfileNavigation />
          <Feed meows={data.meows} />
        </div>
      )}
    </>
  );
};

export default Profile;
