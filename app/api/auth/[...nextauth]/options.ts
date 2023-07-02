import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/Google';

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};
