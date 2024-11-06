//FORMS
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
        userId?: string[];
        description?: string[];
      };
      message?: string;
    }
  | undefined;

//DATABASE

export type TaskStatus = "new" | "in_progress" | "finished";
export type TaskPriority = "low" | "medium" | "high";

export interface Task {
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
  userId: number;
  description: string;
}

export interface TaskWithUser extends Omit<Task, "userId"> {
  user: UserFromDB;
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

export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserFromDB {
  id: number;
  email: string;
  name: string;
  role: string;
  teamId: number;
}

export interface FilterList {
  owner?: TaskOwner;
  search?: string;
  priority?: TaskPriority;
}

export interface TasksFilter extends FilterList {
  status: TaskStatus;
}

export type TaskOwner = "all" | "mine";
