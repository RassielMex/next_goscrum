import { FaUser } from "react-icons/fa";
import clsx from "clsx";
import {
  TaskPriority,
  TaskStatus,
  TaskWithUser,
} from "@/app/models/definitions";

export default function TaskCard({ task }: { task: TaskWithUser }) {
  //console.log(task);
  return (
    <div className="bg-white p-2 rounded shadow min-w-28">
      <h4 className="text-lg font-medium">{task.title}</h4>
      <hr className="mb-2" />
      <div className="flex gap-x-1">
        <FaUser className="w-4" />
        <p className="italic">{task.user.name}</p>
      </div>
      <TextLimiter text={task.description} />
      <StatusBadge status={task.status} />
      <PriorityBadge priority={task.priority} />
    </div>
  );
}

function StatusBadge({ status }: { status: TaskStatus }) {
  let statusText;

  switch (status) {
    case "new":
      statusText = "Nuevo";
      break;
    case "in_progress":
      statusText = "En Progreso";
      break;
    case "finished":
      statusText = "Finalizado";
      break;
    default:
      statusText = "";
      break;
  }

  return (
    <button
      className={clsx(
        "px-2 py-1 mr-1 mb-1 text-white rounded-md text-sm",
        status === "new" && "bg-blue-500",
        status === "in_progress" && "bg-green-500 text-xs lg:text-sm  ",
        status === "finished" && "bg-gray-600"
      )}
    >
      {statusText}
    </button>
  );
}

function PriorityBadge({ priority }: { priority: TaskPriority }) {
  let priorityText;

  switch (priority) {
    case "low":
      priorityText = "Bajo";
      break;
    case "medium":
      priorityText = "Medio";
      break;
    case "high":
      priorityText = "Alto";
      break;
    default:
      priorityText = "";
      break;
  }

  return (
    <button
      className={clsx(
        "px-2 py-1 mr-1 mb-1 text-white rounded-md text-sm",
        priority === "low" && "bg-yellow-500",
        priority === "medium" && "bg-orange-600",
        priority === "high" && "bg-red-700"
      )}
    >
      {priorityText}
    </button>
  );
}

function TextLimiter({ text }: { text: string }) {
  const shorterText = text.length > 25 ? text.slice(0, 25) + "..." : text;
  return (
    <>
      {text.length < 25 ? (
        <p className="">{text}</p>
      ) : (
        <>
          <p className="hidden lg:block">{text}</p>
          <p className="block lg:hidden">{shorterText}</p>
        </>
      )}
    </>
  );
}
