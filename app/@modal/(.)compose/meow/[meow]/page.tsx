import { ModalReply } from "@/components/modal/ModalReply"
import { db } from "@/lib/db"

const ComposeMeow = async ({ params }: { params: string }) => {
  const getId = params
  // const meow = await db.meow.findUnique({ where: { id: getId } })
  console.log(getId)
  return (
    <div className="flex-center fixed left-0 top-0 z-10 h-full w-full bg-gray-700/50">
      {/* <ModalReply meow={meow} /> */}
    </div>
  )
}

export default ComposeMeow
