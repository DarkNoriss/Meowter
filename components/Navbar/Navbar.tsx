import { NavButtons } from './NavButtons';
import { Logo } from './Logo';
import { MeowButton } from './MeowButton';
import { ProfileButton } from './ProfileButton';

export const Navbar = () => {
  return (
    <header>
      <div className='sm h-screen w-20 xl:w-64'>
        <div className='border-white-smoll fixed top-0 h-full w-20 !border-y-0 !border-l-0 px-2 xl:w-64'>
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
