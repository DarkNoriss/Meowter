import NextAuth, { DefaultSession } from 'next-auth/next';

declare module 'next-auth' {
  interface Session {
    user: DefaultSession['user'] & {
      id: string;
      link: string;
    };
  }
  interface Profile {
    picture?: string;
  }
}
