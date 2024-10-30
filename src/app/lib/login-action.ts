import { LoginFormState } from "../models/definitions";
import { LoginSchema } from "../models/login-schema";

export async function LoginAction(
  _prevState: LoginFormState,
  formData: FormData
): Promise<LoginFormState> {
  try {
    const fieldEntries = Object.fromEntries(formData);
    const validatedFields = LoginSchema.safeParse(fieldEntries);

    if (!validatedFields.success) {
      return { errors: validatedFields.error.flatten().fieldErrors };
    }

    //Post Login data
  } catch (error) {
    console.error(error);
    return { message: "Algo malo paso de nuestro lado" };
  }
}
