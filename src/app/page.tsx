//import Image from "next/image";

import Navbar from "./components/shared/navbar";
import TaskCreateForm from "./components/tasks/task-create-form";
import TasksContainer from "./components/tasks/tasks-container";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto md:flex">
        <TaskCreateForm />
        <TasksContainer />
      </div>
    </div>
  );
}
