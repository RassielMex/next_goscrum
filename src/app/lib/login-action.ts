"use server";
import { AuthError } from "next-auth";
import { LoginFormState } from "../models/definitions";
import { LoginSchema } from "../models/login-schema";
import { signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

    await signIn("credentials", formData);

    //Post Login data
  } catch (error) {
    console.log(error);
    revalidatePath("/login");
    if (error instanceof AuthError) {
      // Return `null` to indicate that the credentials are invalid
      return { message: "Invalid Credentials" };
    }
    return { message: "Something went wrong in our side" };
  } finally {
    redirect("/");
  }
}

export async function LogOutAction() {
  await signOut();
}
