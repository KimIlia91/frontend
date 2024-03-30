import NextAuth from "next-auth";
import authConfig from '@/auth.config';

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    callbacks: {
        async session({session, token}) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
                session.user.isAdmin = token.isAdmin as boolean | undefined;
                session.user.accessToken = token.accessToken as string | undefined;
                session.user.refreshToken = token.refreshToken as string | undefined;
            }

            return session;
        },
        async jwt({token, user}){
            if(user) {
                token.isAdmin = user.isAdmin;
                token.accessToken = user.accessToken;
                token.refreshToken = user.refreshToken;
            }
            
            return token;
        }
    },
    session: { strategy: "jwt" },
    ...authConfig,
});