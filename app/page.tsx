import { getServerSession } from 'next-auth/next'
import { Feed } from '@/app/components/Feed'
import { db } from '@/app/lib/db'

import { Form } from './components/form/Form'
import { GeneralFeed } from './components/homepage/GeneralFeed'

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

const Home = async () => {
  // const meowsData = await getMeows()

  return (
    <>
      <div></div>
      <div className="grid grid-cols-1 ">
        <GeneralFeed />
      </div>
    </>
    // <div>
    //   <div className="border-white-smoll bg-transblur sticky top-0 z-10 flex h-14 w-full max-w-xl items-center !border-t-0 px-4 backdrop-blur-md">
    //     <span className="text-xl font-bold">Home</span>
    //   </div>
    //   <div className="-z-10">
    // {/* {session && <Form />} */}
    // {/* <Feed meows={meows} /> */}
    //   </div>
    // </div>
  )
}

export default Home
