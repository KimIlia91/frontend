import NextAuth from 'next-auth';
import authConfig from '@/auth.config';
import {useSession} from "next-auth/react";
const { auth } = NextAuth(authConfig);

import { 
    DEFAULT_LOGIN_REDIRECT, 
    DEFAULT_UNLOGIN_REDIRECT,
    adminRoutes, 
    apiAuthPrefix, 
    authRoutes,
    protectedRoutes 
} from '@/routes';

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    const isAdminRoute = adminRoutes.includes(nextUrl.pathname);
    const isProtectedRoute = protectedRoutes.includes(nextUrl.pathname);
    
    if (isApiAuthRoute){
        return null;
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }

        return null;
    }

    if (!isLoggedIn && !isAuthRoute) {
        return Response.redirect(new URL(DEFAULT_UNLOGIN_REDIRECT, nextUrl));
    }

    return null;
})

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}