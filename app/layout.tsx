import { ReactNode } from "react"
import { Login } from "@/components/Login"
import { Navbar } from "@/components/navbar/Navbar"
import { Providers } from "@/components/Providers"
import { SideBar } from "@/components/sidebar/SideBar"

import "@/styles/globals.css"

export const metadata = {
  title: "Meowter - Your Social Network for Cats",
  description:
    "Meowter is a social networking platform for cats to connect and share their thoughts. Join the cat community today!",
  keywords: ["meowter", "social network", "cats", "cat lovers", "tweets", "meows"],
  og: {
    title: "Meowter - Your Social Network for Cats",
    description:
      "Meowter is a social networking platform for cats to connect and share their thoughts. Join the cat community today!",
    type: "website",
    image: "https://raw.githubusercontent.com/DarkNoriss/Meowter/main/public/assets/icons/cat3.svg",
    imageAlt: "Meowter Logo",
    url: "https://meowter-cat.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meowter - Your Social Network for Cats",
    description:
      "Meowter is a social networking platform for cats to connect and share their thoughts. Join the cat community today!",
    image: "https://raw.githubusercontent.com/DarkNoriss/Meowter/main/public/assets/icons/cat3.svg",
    imageAlt: "Meowter Logo",
  },
  favicon: "https://meowter-cat.vercel.app/assets/icons/cat3.svg",
  metadataBase: "https://meowter-cat.vercel.app",
}

const RootLayout = ({ children, modal }: { children: ReactNode; modal: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          {modal}
          <div className="container mx-auto flex items-start">
            <Navbar />
            <main className="min-h-screen max-w-full grow border-x sm:max-w-[600px]">{children}</main>
            <SideBar />
          </div>
          <Login />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
