export type RegisterFormState =
  | {
      errors?: {
        user?: string[];
        email?: string[];
        password?: string[];
        user_type?: string[];
        group_id?: string[];
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
