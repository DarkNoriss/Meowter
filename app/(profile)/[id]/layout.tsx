import Image from 'next/image'
import Link from 'next/link'
import { getServerSession } from 'next-auth/next'
import { ProfileNavigation } from '@/app/(profile)/[id]/ProfileNavigation'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { prisma } from '@/app/lib/db'
import { formatDateProfile } from '@/app/lib/formatDate'
import ArrowIcon from '@/public/assets/icons/arrow.svg'
import CalendarIcon from '@/public/assets/icons/calendar.svg'

const ProfileLayout = async ({ children, params }: { children: React.ReactNode; params: { id: string } }) => {
  // const sessionData = getServerSession(options)
  // const userData = getUser(params.id)

  // const [session, user] = await Promise.all([sessionData, userData])

  if (user)
    return (
      <>
        <div key={user.id}>
          <div className="border-white-smoll bg-transblur sticky top-0 z-10 flex h-14 w-full max-w-xl items-center !border-t-0 px-4 backdrop-blur-md">
            <Link href="/" className="btnhover mr-4 p-2" passHref>
              <ArrowIcon alt="Arrow" className="aspect-square h-6 fill-gray-100" />
            </Link>
            <div className="flex flex-col">
              <span className="text-xl font-bold">{user.username}</span>
              <span className="text-sm text-gray-500">{user.meows.length} Meows</span>
            </div>
          </div>
          <div className="border-white-smoll !border-t-0">
            <Image src={`/assets/img/bg.jpg`} alt="Background image" height={500} width={1500} />
            <div className="mb-4 px-4 pt-3">
              <div className="-mb-4 flex justify-between lg:-mb-6">
                <div className="mt-[15%] w-1/4">
                  <div className="relative">
                    <div className="absolute bottom-1/2 -translate-y-1/4">
                      <Image
                        src={user.avatar}
                        alt="Avatar"
                        height={135}
                        width={135}
                        className="rounded-full border-4 border-gray-900"
                      />
                    </div>
                  </div>
                </div>
                {session?.user.link === params.id && (
                  <div className="flex-center btnhover mb-3 h-9 rounded-full border px-4">
                    <span className="text-base font-bold">Edit profile</span>
                  </div>
                )}
              </div>
              <div className=" mb-3 flex flex-col">
                <span className="text-xl font-bold">{user.username}</span>
                <span className="text-sm font-normal text-gray-500 lg:text-base">@{user.userlink}</span>
              </div>
              <div className="flex flex-row fill-gray-500 font-normal text-gray-500">
                {user.birthdayDate && <span className="mr-5 text-sm lg:text-base">Born</span>}
                <div className="flex-center flex-row">
                  <CalendarIcon className={'mr-1 aspect-square h-5'} />
                  <span className="text-sm lg:text-base">Joined {formatDateProfile(user.createdAt)}</span>
                </div>
              </div>
            </div>
          </div>
          <ProfileNavigation params={params} />
          {children}
        </div>
      </>
    )
}

export default ProfileLayout

const getUser = async (id: string) => {
  const userWithMeows = await prisma.user.findUnique({
    where: { userlink: id },
    include: { meows: true },
  })

  return userWithMeows
}
