"use server";

import { redirect } from "next/navigation";
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
  let teamId, role;
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
    const newUser = await registerUser(validatedFields.data);
    //console.log(newUser);
    if (!newUser?.id) {
      throw new Error("User not created");
    }
    teamId = newUser.teamId;
    role = newUser.role;
  } catch (error) {
    console.error(error);
    return { message: "Algo malo paso de nuestro lado" };
  } finally {
    if (teamId) {
      redirect(`/register/success/${teamId}/?role=${role}`);
    }
  }
}
