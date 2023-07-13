import { Login } from '@/components/Login';
import { Navbar } from '@/components/Navbar/Navbar';
import Provider from '@/components/Provider';
import { SideBar } from '@/components/SideBar';
import '@/styles/globals.css';

export const metadata = {
  title: 'Meowter',
  description: 'Twitter but for cats',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider>
      <html lang='en'>
        <body>
          <div className='flex-center min-h-screen max-w-full flex-row'>
            <Navbar />
            <main className='h-screen w-screen max-w-xl !border-y-0'>{children}</main>
            <SideBar />
            <Login />
          </div>
        </body>
      </html>
    </Provider>
  );
};

export default RootLayout;
