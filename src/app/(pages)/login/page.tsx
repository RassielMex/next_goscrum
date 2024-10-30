import LoginForm from "@/app/components/login/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <div className="rounded-lg p-10 bg-white shadow-md">
        <h4 className="text-xl font-semibold text-center mb-4">Login</h4>
        <LoginForm />
        <Link href="/register">
          <p className="text-teal-500 text-center mt-2">Registrarse</p>
        </Link>
      </div>
    </div>
  );
}
