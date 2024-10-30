import { z, string } from "zod";

export const LoginSchema = z.object({
  email: string().email().min(1),
  password: string().min(1),
});
