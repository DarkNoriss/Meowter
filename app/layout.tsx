import { Login } from '@/components/Login';
import { Navbar } from '@/components/Navbar';
import '@/styles/globals.css';

export const metadata = {
  title: 'Meowter',
  description: 'Twitter but for cats',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <div className='flex-center min-h-screen flex-row'>
          <Navbar />
          <main className='h-screen border-x'>{children}</main>
          <Login />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
