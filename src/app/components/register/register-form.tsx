"use client";
import { RegisterAction } from "@/app/lib/register-action";
import { useActionState, useRef, useState } from "react";

export default function RegisterForm() {
  const memberRadioRef = useRef<HTMLInputElement>(null);
  const [showInputId, setShowInputId] = useState(false);
  const [actionResult, formAction, isPending] = useActionState(
    RegisterAction,
    undefined
  );

  const handleChange = () => {
    setShowInputId(false);
    if (memberRadioRef.current?.checked) {
      setShowInputId(true);
    }
  };

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="user" className="block mb-1">
          Usuario:
        </label>
        <input
          id="user"
          name="user"
          type="text"
          placeholder="usuario123"
          className="block p-2 border-2 rounded-md focus:outline-teal-200"
        />
        {actionResult?.errors?.user?.map((error, index) => {
          return (
            <span key={error + index} className="block text-sm text-red-500">
              {error}
            </span>
          );
        })}
      </div>

      <div>
        <label htmlFor="email" className="block mb-1">
          Correo:
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

      <div>
        <fieldset onChange={handleChange}>
          <div>
            <input
              id="leader"
              name="user_type"
              type="radio"
              value={"leader"}
              defaultChecked
            />
            <label htmlFor="team_leader">Soy team leader!</label>
          </div>
          <div>
            <input
              id="member"
              name="user_type"
              type="radio"
              value={"member"}
              ref={memberRadioRef}
            />
            <label htmlFor="member">Pertenezco a un grupo</label>
          </div>
        </fieldset>
        {showInputId && (
          <>
            <input
              id="group_id"
              name="group_id"
              type="text"
              placeholder="1234-1234-1234-1234"
              className="block p-2 border-2 rounded-md focus:outline-teal-200"
            />
            {actionResult?.errors?.group_id?.map((error, index) => {
              return (
                <span
                  key={error + index}
                  className="block text-sm text-red-500"
                >
                  {error}
                </span>
              );
            })}
          </>
        )}
      </div>

      <button
        aria-disabled={isPending}
        className="w-full py-1 mt-2 bg-teal-500 rounded-xl"
      >
        Login
      </button>
    </form>
  );
}