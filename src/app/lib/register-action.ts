"use server";

import { RegisterFormState } from "../models/definitions";
import {
  LeaderRegisterSchema,
  MemberRegisterSchema,
} from "../models/register-schema";

export async function RegisterAction(
  _prevState: RegisterFormState,
  formData: FormData
): Promise<RegisterFormState> {
  try {
    const fieldEntries = Object.fromEntries(formData);
    const validatedFields =
      formData.get("user_type") === "leader"
        ? LeaderRegisterSchema.safeParse(fieldEntries)
        : MemberRegisterSchema.safeParse(fieldEntries);

    if (!validatedFields.success) {
      return { errors: validatedFields.error.flatten().fieldErrors };
    }

    //Post Register data
  } catch (error) {
    console.error(error);
    return { message: "Algo malo paso de nuestro lado" };
  }
}
