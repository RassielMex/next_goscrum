import { DefaultSession } from "next-auth";

export type RegisterFormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
        role?: string[];
        teamIdentifier?: string[];
      };
      message?: string;
    }
  | undefined;

export type LoginFormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type TaskFormState =
  | {
      errors?: {
        title?: string[];
        status?: string[];
        priority?: string[];
        user_id?: string[];
        description?: string[];
      };
      message?: string;
    }
  | undefined;

export type TaskStatus = "new" | "in_progress" | "finished";
export type TaskPriority = "low" | "medium" | "high";

export interface Task {
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
  user_id: string;
  description: string;
}

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      role: UserRole;
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"];
  }
}

export type UserRole = "leader" | "member";

export interface RegisterUser {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  teamId: number;
}

export type RegisterMemberUser = Omit<RegisterUser, "teamId"> & {
  teamIdentifier: string;
};

export type RegisterLeaderUser = Omit<RegisterUser, "teamId">;

export interface TeamfromDB {
  id: number;
  identifier: string;
}
export type Team = Omit<TeamfromDB, "id">;
