import { z, string, coerce } from "zod";

export const TaskSchema = z.object({
  title: string().min(1).max(20),
  status: z.enum(["new", "in_progress", "finished"]),
  priority: z.enum(["low", "medium", "high"]),
  userId: coerce.number(),
  description: string().min(1).max(50),
});
