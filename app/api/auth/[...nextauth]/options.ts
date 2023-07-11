import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@/models/user';
import { connectToDB } from '@/utils/connectToDB';
import { strToLink } from '@/utils/strToLink';

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      session.user.link = sessionUser.userlink;

      return session;
    },

    async signIn({ profile }) {
      try {
        await connectToDB();

        const userExists = await User.findOne({ email: profile?.email });

        if (!userExists && profile) {
          await User.create({
            email: profile.email,
            username: profile.name,
            userlink: strToLink(profile.name as string),
            image: profile.image ?? profile.picture,
            date: new Date(),
            meows: [],
          });
        }

        return true;
      } catch (err: any) {
        console.log('Error checking if user exists: ', err.message);
        return false;
      }
    },
  },
};
