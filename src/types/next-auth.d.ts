import { Session } from 'next-auth';

declare module 'next-auth' {
  interface User {
    id?: string;
    isAdmin?: boolean;
    accessToken?: string;
    refreshToken?: string;
  }

  interface Session {
    user?: JWT;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    isAdmin?: boolean;
    accessToken?: string;
    refreshToken?: string;
  }
}