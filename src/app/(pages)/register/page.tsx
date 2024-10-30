import RegisterForm from "@/app/components/register/register-form";
import Link from "next/link";

//type Props = {}

export default function RegisterPage() {
  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <div className="rounded-lg p-10 bg-white shadow-md">
        <h4 className="text-xl font-semibold text-center mb-4">Register</h4>
        <RegisterForm />
        <Link href="/login">
          <p className="text-teal-500 text-center mt-2">Iniciar Sesión</p>
        </Link>
      </div>
    </div>
  );
}
