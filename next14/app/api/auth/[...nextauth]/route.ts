import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: {
          label: "Email",
          type: "text",
          placeholder: "ashi@gmail.com",
        },
        password: { label: "Password", type: "text", placeholder: "123456" },
      },
      async authorize(credentials: any) {
        const username = credentials.username;
        const password = credentials.password;
        const hashpassword = await bcrypt.hash(password, 10);
      },
    }),
  ],
});

export const GET = handler;
export const POST = handler;
