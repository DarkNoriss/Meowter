import { FeedHeader } from "@/components/FeedHeader"
import { Form } from "@/components/form/Form"
import { GeneralFeed } from "@/components/GeneralFeed"
import { getAuthSession } from "@/lib/auth"

const Home = async () => {
  const session = await getAuthSession()

  return (
    <>
      <FeedHeader>
        <span className="text-xl font-bold">Home</span>
      </FeedHeader>
      {session && <Form />}
      <GeneralFeed />
    </>
  )
}

export default Home

export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"
