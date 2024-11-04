import { string, z } from "zod";

const RegisterSchema = z.object({
  name: string().min(1).max(20),
  email: string().email().min(1).max(30),
  password: string().min(1).max(20),
});

export const LeaderRegisterSchema = RegisterSchema.extend({
  role: z.literal("leader"),
});

export const MemberRegisterSchema = RegisterSchema.extend({
  role: z.literal("member"),
  teamIdentifier: z.string().uuid(),
});
