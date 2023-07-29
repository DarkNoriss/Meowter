import Link from "next/link"
import CatIcon from "@/public/assets/icons/cat3.svg"

export const Logo = () => {
  return (
    <div className="mt-2 flex justify-end xl:justify-start">
      <Link href="/" className="btnhover flex-center aspect-square h-14 py-[2px]" passHref>
        <CatIcon alt="cat" className="flex-center ml-3 aspect-square h-7" />
      </Link>
    </div>
  )
}
