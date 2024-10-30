"use client";
import Link from "next/link";
import { useRef, useState } from "react";

//type Props = {}

export default function RegisterPage() {
  const memberRadioRef = useRef<HTMLInputElement>(null);
  const [showInputId, setShowInputId] = useState(false);

  const handleChange = () => {
    setShowInputId(false);
    if (memberRadioRef.current?.checked) {
      setShowInputId(true);
    }
  };
  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <div className="rounded-lg p-10 bg-white shadow-md">
        <h4 className="text-xl font-semibold text-center mb-4">Register</h4>
        <form>
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
            <span className="text-sm text-red-500">Texto de Error</span>
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
            <span className="text-sm text-red-500">Texto de Error</span>
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
            <span className="text-sm text-red-500">Texto de Error</span>
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
                <span className="text-sm text-red-500">Texto de Error</span>
              </>
            )}
          </div>

          <button className="w-full py-1 mt-2 bg-teal-500 rounded-xl">
            Login
          </button>
        </form>
        <Link href="/register">
          <p className="text-teal-500 text-center mt-2">Registrarse</p>
        </Link>
      </div>
    </div>
  );
}
