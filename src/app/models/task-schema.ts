import { z, string } from "zod";

export const TaskSchema = z.object({
  title: string().email().min(1).max(20),
  status: z.enum(["new", "in_progress", "finished"]),
  priority: z.enum(["low", "medium", "high"]),
  owner: z.string().uuid(),
  description: string().min(1).max(50),
});
