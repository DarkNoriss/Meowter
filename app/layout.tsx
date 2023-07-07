'use client';

import { Login } from '@/components/Login';
import { Navbar } from '@/components/Navbar';
import { SessionProvider } from 'next-auth/react';
import { SideBar } from '@/components/SideBar';
import '@/styles/globals.css';

export const metadata = {
  title: 'Meowter',
  description: 'Twitter but for cats',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <SessionProvider>
          <div className='flex-center min-h-screen flex-row'>
            <Navbar />
            <main className='h-screen w-screen max-w-xl !border-y-0'>{children}</main>
            <SideBar />
            <Login />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
