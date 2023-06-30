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
        <div className='flex-center h-full'>
          <Navbar />
          <main className='h-screen border-x'>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;