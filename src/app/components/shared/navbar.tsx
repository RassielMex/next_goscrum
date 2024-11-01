import { LogOutAction } from "@/app/lib/login-action";
import { CiLogout } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className="bg-stone-700 text-white h-12 px-4">
      <div className="container mx-auto h-full flex justify-between items-center">
        <p className="text-lg font-semibold">Go Scrum</p>
        <form action={LogOutAction}>
          <button type="submit">
            <CiLogout className="size-6" />
          </button>
        </form>
      </div>
    </nav>
  );
}
