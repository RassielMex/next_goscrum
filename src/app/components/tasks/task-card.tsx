import { FaUser } from "react-icons/fa";
import clsx from "clsx";

type Status = "new" | "inProgress" | "finished";
type Priority = "low" | "medium" | "high";

type Props = {
  title: string;
  status: Status;
  priority: Priority;
  owner: string;
  description: string;
};

export default function TaskCard(task: Props) {
  console.log(task);
  return (
    <div className="bg-white p-2 rounded shadow min-w-28">
      <h4 className="text-lg font-medium">{task.title}</h4>
      <hr className="mb-2" />
      <div className="flex gap-x-1">
        <FaUser className="w-4" />
        <p className="italic">{task.owner}</p>
      </div>
      <TextLimiter text={task.description} />
      <StatusBadge status={task.status} />
      <PriorityBadge priority={task.priority} />
    </div>
  );
}

function StatusBadge({ status }: { status: Status }) {
  let statusText;

  switch (status) {
    case "new":
      statusText = "Nuevo";
      break;
    case "inProgress":
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
        status === "inProgress" && "bg-green-500",
        status === "finished" && "bg-gray-600"
      )}
    >
      {statusText}
    </button>
  );
}

function PriorityBadge({ priority }: { priority: Priority }) {
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
