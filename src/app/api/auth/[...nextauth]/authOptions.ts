import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

const DBAdapter = PrismaAdapter(prisma);

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  adapter: {
    ...DBAdapter,
    createUser: async (user) => {
      const createdUser = await DBAdapter.createUser!(user);

      const createUserBoard = await prisma.board.create({
        data: {
          title: "My Task Board",
          desc: "Tasks to keep organized.",
          userId: createdUser.id,
        },
      });

      return createdUser;
    },
  },
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        // @ts-ignore
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export default authOptions;
