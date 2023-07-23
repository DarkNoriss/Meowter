import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { prisma } from "@/utils/connectToDb"
import { strToLink } from "@/utils/strToLink"

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await prisma.user.findUnique({
        where: { email: session.user.email || "" },
      })
      session.user.id = sessionUser?.id.toString()
      session.user.link = sessionUser?.userlink

      return session
    },

    async signIn({ profile }) {
      try {
        await prisma.$transaction(async (prisma) => {
          const userExists = await prisma.user.findUnique({
            where: { email: profile?.email || "" },
          })

          if (!userExists && profile) {
            await prisma.user.create({
              data: {
                username: profile?.name as string,
                email: profile?.email as string,
                userlink: strToLink(profile?.name as string),
                avatar: (profile?.image as string) ?? (profile?.picture as string),
              },
            })
          }
        })

        return true
      } catch (error) {
        console.log("Error checking if user exists: ", error)
        return false
      }
    },
  },
}
