//import Image from "next/image";

import { auth } from "@/auth";
import Navbar from "./components/shared/navbar";
import TaskCreateForm from "./components/tasks/task-create-form";
import TasksFilter from "./components/tasks/tasks-filter";
import TasksList from "./components/tasks/tasks-list";
import { getTasks, getUsers } from "./lib/data";
//import { Task } from "./models/definitions";

export default async function Home() {
  const session = await auth();
  const tasks = await getTasks("");
  const users = await getUsers("");
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto md:flex">
        <TaskCreateForm users={users} />
        <section className="w-full mx-2 p-4 flex flex-col gap-y-2 min-w-96">
          <h1 className="text-xl font-semibold mb-4">Tareas</h1>
          <TasksFilter />
          <TasksList tasks={tasks} />
        </section>
      </div>
    </div>
  );
}
