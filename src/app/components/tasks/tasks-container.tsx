import React from "react";
import TasksList from "./tasks-list";
import TasksFilter from "./tasks-filter";

//type Props = {}

export default function TasksContainer() {
  return (
    <section className="w-full mx-2 p-4 flex flex-col gap-y-2 min-w-96">
      <h1 className="text-xl font-semibold mb-4">Tareas</h1>
      <TasksFilter />
      <TasksList />
    </section>
  );
}
