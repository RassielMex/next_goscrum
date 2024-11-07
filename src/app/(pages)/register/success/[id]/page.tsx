import { getTeamIdentifier } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";

type Params = Promise<{ id: string }>;

export default async function LoginSuccessPage(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;
  const identier = await getTeamIdentifier(+id);

  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <div className="rounded-lg p-10 bg-white shadow-md flex flex-col justify-center items-center gap-y-2">
        {identier ? (
          <>
            <div className="h-10 w-10 relative">
              <Image src={"/party-popper.png"} alt="party" fill />
            </div>
            <p>¡Su registro se realizo con exito!</p>
            <p>Comparta el siguiente identificador con su equipo:</p>
            <p className="font-medium">{identier}</p>
            <Link href="/login">
              <u className="text-teal-500 text-center ">Login</u>
            </Link>
          </>
        ) : (
          <p>Team id invalido</p>
        )}
      </div>
    </div>
  );
}
