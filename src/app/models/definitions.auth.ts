import { DefaultSession } from "next-auth";
import { UserRole } from "./definitions";

declare module "next-auth" {
  interface User {
    role: UserRole;
    teamId: number;
  }

  interface Session {
    user: {
      role: UserRole;
      teamId: number;
    } & DefaultSession["user"];
  }
}

declare module "@auth/core/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    role: UserRole;
    teamId: number;
  }
}
