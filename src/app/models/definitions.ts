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
  userId: number;
  description: string;
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

declare module "next-auth" {
  interface User {
    role: UserRole;
  }

  interface Session {
    user: {
      role: UserRole;
    } & DefaultSession["user"];
  }
}

declare module "@auth/core" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    role: UserRole;
  }
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserFromDB {
  email: string;
  name: string;
  role: string;
}
