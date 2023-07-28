import { Inter } from 'next/font/google'
import { Login } from '@/app/components/Login'
import { Navbar } from '@/app/components/navbar/Navbar'
import { SideBar } from '@/app/components/sidebar/SideBar'
import '@/styles/globals.css'

import { Providers } from './components/Providers'
import { cn } from './lib/utils'

export const metadata = {
  title: 'Meowter - Your Social Network for Cats',
  description:
    'Meowter is a social networking platform for cats to connect and share their thoughts. Join the cat community today!',
  keywords: ['meowter', 'social network', 'cats', 'cat lovers', 'tweets', 'meows'],
  og: {
    title: 'Meowter - Your Social Network for Cats',
    description:
      'Meowter is a social networking platform for cats to connect and share their thoughts. Join the cat community today!',
    type: 'website',
    image: 'https://raw.githubusercontent.com/DarkNoriss/Meowter/main/public/assets/icons/cat3.svg',
    imageAlt: 'Meowter Logo',
    url: 'https://meowter-cat.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meowter - Your Social Network for Cats',
    description:
      'Meowter is a social networking platform for cats to connect and share their thoughts. Join the cat community today!',
    image: 'https://raw.githubusercontent.com/DarkNoriss/Meowter/main/public/assets/icons/cat3.svg',
    imageAlt: 'Meowter Logo',
  },
  favicon: 'https://meowter-cat.vercel.app/assets/icons/cat3.svg',
  metadataBase: 'https://meowter-cat.vercel.app',
}

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={cn('bg-gray-800 text-gray-200 antialiased', inter.className)}>
      <body className="min-h-screen antialiased">
        <Providers>
          {/* <Navbar /> */}
          <div className="container mx-auto h-full max-w-xl">
            {children}
            {/* <main className="h-screen w-screen max-w-xl !border-y-0">{children}</main> */}
            {/* <SideBar /> */}
            {/* <Login /> */}
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
