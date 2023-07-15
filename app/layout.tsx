import Provider from '@/components/Provider';
import { SideBar } from '@/components/Sidebar/SideBar';
import { Login } from '@/components/Login';
import { Navbar } from '@/components/Navbar/Navbar';
import '@/styles/globals.css';

export const metadata = {
  title: 'Meowter - Your Social Network for Cats',
  description: 'Meowter is a social networking platform for cats to connect and share their thoughts. Join the cat community today!',
  keywords: ['meowter', 'social network', 'cats', 'cat lovers', 'tweets', 'meows'],
  og: {
    title: 'Meowter - Your Social Network for Cats',
    description: 'Meowter is a social networking platform for cats to connect and share their thoughts. Join the cat community today!',
    type: 'website',
    image: 'https://raw.githubusercontent.com/DarkNoriss/Meowter/main/public/assets/icons/cat3.svg',
    imageAlt: 'Meowter Logo',
    url: 'https://meowter-cat.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meowter - Your Social Network for Cats',
    description: 'Meowter is a social networking platform for cats to connect and share their thoughts. Join the cat community today!',
    image: 'https://raw.githubusercontent.com/DarkNoriss/Meowter/main/public/assets/icons/cat3.svg',
    imageAlt: 'Meowter Logo',
  },
  favicon: 'https://meowter-cat.vercel.app/assets/icons/cat3.svg',
  metadataBase: 'https://meowter-cat.vercel.app',
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
