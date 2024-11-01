import { getUserFromDb } from "@/app/lib/data";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { User } from "next-auth/providers/notion";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: { signIn: "/login" },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        //console.log("User from token", user);
        const u = user as User;

        token.email = u.person.email;
      }
      //console.log("token", token);
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.user.email = token.email!;
        session.user.name = token.name;
        //console.log("sesscin: ", session);
      }
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      //console.log(isLoggedIn);
      //console.log("auth from middleware:", auth);
      //console.log("islgged: ");
      console.log(nextUrl.pathname);
      if (nextUrl.pathname === "/") {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }
      return true;
    },
  },
  providers: [
    Credentials({
      credentials: { email: {}, password: {} },
      authorize: async (credentials) => {
        try {
          //TODO: Hash password

          let user = null;
          user = await getUserFromDb(
            credentials.email as string,
            credentials.password as string
          );
          //console.log(user);
          if (!user) {
            return null;
          }

          // return JSON object with the user data
          return user;
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
});
