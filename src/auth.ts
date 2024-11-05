import { getUserFromDb } from "@/app/lib/data";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: { signIn: "/login" },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.role = user.role;
        token.teamId = user.teamId;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.user.role = token.role;
        session.user.teamId = token.teamId;
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
          user = await getUserFromDb({
            email: credentials.email as string,
            password: credentials.password as string,
          });
          //console.log("User from auth", user);
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
