"use client";

import { LoginAction } from "@/app/lib/login-action";
import { useActionState } from "react";

export default function LoginForm() {
  const [actionResult, formAction, isPending] = useActionState(
    LoginAction,
    undefined
  );

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="email" className="block mb-1">
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="correo@dominio.com"
          className="block p-2 border-2 rounded-md focus:outline-teal-200"
        />
        {actionResult?.errors?.email?.map((error, index) => {
          return (
            <span key={error + index} className="block text-sm text-red-500">
              {error}
            </span>
          );
        })}
      </div>
      <div>
        <label htmlFor="password" className="block mb-1">
          Password:
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="*******"
          className="block p-2 border-2 rounded-md focus:outline-teal-200"
        />
        {actionResult?.errors?.password?.map((error, index) => {
          return (
            <span key={error + index} className="block text-sm text-red-500">
              {error}
            </span>
          );
        })}
      </div>
      <button
        aria-disabled={isPending}
        className="w-full py-1 mt-2 bg-teal-500 rounded-xl"
      >
        Login
      </button>
      {actionResult?.message && (
        <span className="block text-sm text-red-500 text-center my-2">
          {actionResult?.message}
        </span>
      )}
    </form>
  );
}
