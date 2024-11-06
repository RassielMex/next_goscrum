import {
  FilterList,
  TasksFilter,
  TaskWithUser,
} from "@/app/models/definitions";
import TaskCard from "./task-card";
import { auth } from "@/auth";
import { Session } from "next-auth";

export default async function TasksList({
  tasks,
  filters,
}: {
  tasks: TaskWithUser[] | null;
  filters: FilterList;
}) {
  const currentUser = await auth();
  const { search, owner, priority } = filters;

  const newTasks = applyFilter(
    tasks,
    { status: "new", owner, priority, search },
    currentUser
  );
  const inProgressTasks = applyFilter(
    tasks,
    { status: "in_progress", owner, priority, search },
    currentUser
  );
  const finishedTasks = applyFilter(
    tasks,
    { status: "finished", owner, priority, search },
    currentUser
  );

  // const newTasks = tasks?.filter((task) => {
  //   return task.status === "new";
  // });

  return (
    <div className="flex gap-x-2">
      <div className="flex flex-col w-1/3 gap-y-2">
        <p className="p-1 bg-blue-500 rounded text-center text-white font-semibold text-base">
          Nuevas
        </p>
        {newTasks?.map((task, index) => {
          return <TaskCard key={task.title + index} task={task} />;
        })}
      </div>
      <div className="flex flex-col w-1/3 gap-y-2">
        <p className="p-1 bg-green-500 rounded text-center text-white font-semibold text-base">
          En Progreso
        </p>
        {inProgressTasks?.map((task, index) => {
          return <TaskCard key={task.title + index} task={task} />;
        })}
      </div>
      <div className="flex flex-col w-1/3 gap-y-2">
        <p className="p-1 bg-gray-500 rounded text-center text-white font-semibold text-base">
          Finalizado
        </p>
        {finishedTasks?.map((task, index) => {
          return <TaskCard key={task.title + index} task={task} />;
        })}
      </div>
    </div>
  );
}

function applyFilter(
  tasksArray: TaskWithUser[] | null,
  filters: TasksFilter,
  user: Session | null
) {
  //console.log(filters);
  let filteredArray = tasksArray?.filter((task) => {
    return task.status === filters.status;
  });
  if (filters.search) {
    filteredArray = filteredArray?.filter((task) => {
      const f = filters.search || "";
      return task.title.toLowerCase().includes(f);
    });
  }
  if (filters.priority) {
    filteredArray = filteredArray?.filter((task) => {
      return task.priority === filters.priority;
    });
  }
  if (filters.owner) {
    filteredArray = filteredArray?.filter((task) => {
      if (filters.owner === "all") {
        return true;
      }
      if (user) {
        return task.user.name === user.user.name;
      }
    });
  }
  return filteredArray;
}
