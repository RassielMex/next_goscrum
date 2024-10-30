import React from "react";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/20/solid";

export default function Navbar() {
  return (
    <nav className="bg-stone-700 text-white h-12 px-4">
      <div className="container mx-auto h-full flex justify-between items-center">
        <p className="text-lg font-semibold">Go Scrum</p>
        <ArrowLeftStartOnRectangleIcon className="size-6" />
      </div>
    </nav>
  );
}
