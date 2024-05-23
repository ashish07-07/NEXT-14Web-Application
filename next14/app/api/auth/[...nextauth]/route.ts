import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Email",
//       credentials: {
//         username: {
//           label: "Email",
//           type: "text",
//           placeholder: "ashi@gmail.com",
//         },
//         password: { label: "Password", type: "text", placeholder: "123456" },
//       },

//       async authorize(credentials:any)
//       {
//              console.log(credentials);
//              return
//              {
//                  "id"
//              };
//       }
//       ,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
// });

// export const GET = handler;
// export const POST = handler;

// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: {
//           label: "email",
//           type: "text",
//           placeholder: "ashish077@gmail.com",
//         },
//         password: {
//           label: "password",
//           type: "password",
//           placeholder: "123456",
//         },
//       },
//       async authorize(credentials: any) {
//         const username = credentials.username;
//         const password = credentials.password;
//         console.log("hi testing the credentials");
//         console.log(credentials);
//         return {
//           id: "user1",
//           name: "ashish",
//           email: username,
//         };
//       },
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
// });

// export { handler as GET, handler as POST };

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: {
          label: "Email",
          type: "text",
          placeholder: "ashi07@gmail.com",
        },
        password: { label: "password", type: "text", placeholder: "123456" },
      },

      async authorize(credentials: any) {
        console.log(credentials);
        const username = credentials.username;
        const password = credentials.password;

        return {
          id: "user1",
          email: username,
          name: "Lindan",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "secret",
});
export { handler as GET, handler as POST };
