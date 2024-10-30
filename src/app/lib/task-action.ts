import { TaskFormState } from "../models/definitions";
import { TaskSchema } from "../models/task-schema";

export async function TaskCreateAction(
  _prevState: TaskFormState,
  formData: FormData
): Promise<TaskFormState> {
  try {
    const fieldEntries = Object.fromEntries(formData);
    const validatedFields = TaskSchema.safeParse(fieldEntries);

    if (!validatedFields.success) {
      console.log("Error");
      console.log(validatedFields.error.flatten().fieldErrors);
      return { errors: validatedFields.error.flatten().fieldErrors };
    }

    //Post Login data
  } catch (error) {
    console.error(error);
    return { message: "Algo malo paso de nuestro lado" };
  }
}
