import {getServerSession, NextAuthOptions, User} from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import prisma from "@/lib/db";
import {PrismaAdapter} from "@auth/prisma-adapter";

declare module "next-auth"{
    interface Session{
        user: User & {
            isAdmin: Boolean;
        }
    }
}

declare module "next-auth/jwt"{
    interface JWT {
        isAdmin: Boolean;
    }
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
      strategy: "jwt"
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_SECRET_ID as string
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_SECRET_ID as string
        })
    ],
    callbacks: {
        async session({token, session}){
            if(token){
                session.user.isAdmin = token.isAdmin
            }
            return session
        },
        async jwt({token}){
            const userInDb = await prisma.user.findUnique({
                where: {
                    email: token.email
                }
            });
             token.isAdmin = userInDb?.isAdmin!;
            return token;
        }
    }
 }

 export const getAuthSession = () => getServerSession((authOptions))