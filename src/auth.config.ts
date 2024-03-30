import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/schemas";

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials);
                
                if (validatedFields.success) {
                    const response = await fetch("https://0rk00cd8-7174.inc1.devtunnels.ms/api/auth/login", {
                        method: 'POST',
                        headers: { "Content-Type": "application/json", "Accept-Language": "ru-RU" },
                        body: JSON.stringify(validatedFields.data),
                    });

                    const user = await response.json();

                    if (response.ok && user) {
                        return user;
                    }
                    
                    return null;
                }

                return null;
            }
        })
    ],
    secret: "YOUR_SECRET_KEY_HERE",
} satisfies NextAuthConfig