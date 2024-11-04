"use server";

import { RegisterFormState } from "../models/definitions";
import {
  LeaderRegisterSchema,
  MemberRegisterSchema,
} from "../models/register-schema";
import { registerUser } from "./data";

export async function RegisterAction(
  _prevState: RegisterFormState,
  formData: FormData
): Promise<RegisterFormState> {
  try {
    const fieldEntries = Object.fromEntries(formData);
    const validatedFields =
      formData.get("role") === "leader"
        ? LeaderRegisterSchema.safeParse(fieldEntries)
        : MemberRegisterSchema.safeParse(fieldEntries);

    if (!validatedFields.success) {
      //console.log(validatedFields.error);
      return { errors: validatedFields.error.flatten().fieldErrors };
    }
    //console.log("Register");
    await registerUser(validatedFields.data);
  } catch (error) {
    console.error(error);
    return { message: "Algo malo paso de nuestro lado" };
  }
}
