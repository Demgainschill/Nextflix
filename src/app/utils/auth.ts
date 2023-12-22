import NextAuth, { AuthOptions, NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import  prisma from "@/app/utils/db";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ]
} satisfies NextAuthOptions;
