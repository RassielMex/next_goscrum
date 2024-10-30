//import Image from "next/image";

import Navbar from "./components/shared/navbar";
import CreateTaskForm from "./components/tasks/create-task-form";
import TasksContainer from "./components/tasks/tasks-container";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto md:flex">
        <CreateTaskForm />
        <TasksContainer />
      </div>
    </div>
  );
}
