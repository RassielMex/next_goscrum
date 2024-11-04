import { Task } from "@/app/models/definitions";
import TaskCard from "./task-card";

export default function TasksList({ tasks }: { tasks: Task[] }) {
  const newTasks = tasks.filter((task) => {
    return task.status === "new";
  });

  const inProgressTasks = tasks.filter((task) => {
    return task.status === "in_progress";
  });

  const finishedTasks = tasks.filter((task) => {
    return task.status === "finished";
  });

  return (
    <div className="flex gap-x-2">
      <div className="flex flex-col w-1/3 gap-y-2">
        {newTasks.map((task, index) => {
          return <TaskCard key={task.title + index} task={task} />;
        })}
      </div>
      <div className="flex flex-col w-1/3 gap-y-2">
        {inProgressTasks.map((task, index) => {
          return <TaskCard key={task.title + index} task={task} />;
        })}
      </div>
      <div className="flex flex-col w-1/3 gap-y-2">
        {finishedTasks.map((task, index) => {
          return <TaskCard key={task.title + index} task={task} />;
        })}
      </div>
    </div>
  );
}
