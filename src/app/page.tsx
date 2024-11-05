//import Image from "next/image";

import Navbar from "./components/shared/navbar";
import TaskCreateForm from "./components/tasks/task-create-form";
import TasksFilter from "./components/tasks/tasks-filter";
import TasksList from "./components/tasks/tasks-list";
import { Task } from "./models/definitions";

export default async function Home() {
  let tasksResponse;
  let tasks: Task[] = [];
  try {
    tasksResponse = await fetch("http://localhost:8080/api/tasks");
    tasks = await tasksResponse.json();
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto md:flex">
        <TaskCreateForm />
        <section className="w-full mx-2 p-4 flex flex-col gap-y-2 min-w-96">
          <h1 className="text-xl font-semibold mb-4">Tareas</h1>
          <TasksFilter />
          <TasksList tasks={tasks} />
        </section>
      </div>
    </div>
  );
}
