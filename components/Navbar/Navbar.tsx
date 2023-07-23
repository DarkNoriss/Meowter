import { Logo } from "./Logo"
import { MeowButton } from "./MeowButton"
import { NavButtons } from "./NavButtons"
import { ProfileButton } from "./ProfileButton"

export const Navbar = () => {
  return (
    <header>
      <div className="h-screen w-14 xl:w-64">
        <div className="border-white-smoll fixed top-0 h-full w-14 !border-y-0 !border-l-0 xl:w-64">
          <div className="flex h-full flex-col justify-between">
            <div>
              <Logo />
              <NavButtons />
              <MeowButton />
            </div>
            <ProfileButton />
          </div>
        </div>
      </div>
    </header>
  )
}
