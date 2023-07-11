import { NavButtons } from './NavButtons';
import { Logo } from './Logo';
import { MeowButton } from './MeowButton';
import { ProfileButton } from './ProfileButton';

export const Navbar = () => {
  return (
    <header>
      <div className='h-screen w-72'>
        <div className='border-white-smoll fixed top-0 h-full w-72 !border-y-0 !border-l-0 pr-7'>
          <div className='flex h-full flex-col justify-between'>
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
  );
};
