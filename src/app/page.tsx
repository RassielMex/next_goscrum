//import Image from "next/image";

import { auth } from "@/auth";
import Navbar from "./components/shared/navbar";
import TaskCreateForm from "./components/tasks/task-create-form";
import TasksFilter from "./components/tasks/tasks-filter";
import TasksList from "./components/tasks/tasks-list";
import { getTasks, getUsers } from "./lib/data";
import { TaskOwner, TaskPriority } from "./models/definitions";

//import { Task } from "./models/definitions";

export default async function Home(props: {
  searchParams?: Promise<{
    search?: string;
    owner?: TaskOwner;
    priority?: TaskPriority;
  }>;
}) {
  const session = await auth();
  const user = session?.user;
  const teamId = user?.teamId.toString() || "";

  const tasksList = await getTasks(teamId);
  const users = await getUsers(teamId);

  const searchParams = await props.searchParams;
  const search = searchParams?.search;
  const priority = searchParams?.priority;
  const owner = searchParams?.owner;

  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto md:flex">
        {user?.role === "leader" && <TaskCreateForm users={users} />}
        <section className="w-full mx-2 p-4 flex flex-col gap-y-2 min-w-96">
          <h1 className="text-xl font-semibold mb-4">Tareas</h1>
          <TasksFilter />
          <TasksList tasks={tasksList} filters={{ search, priority, owner }} />
        </section>
      </div>
    </div>
  );
}
