import TaskCard from "./task-card";

export default function TasksList() {
  return (
    <div className="flex gap-x-2">
      <div className="flex flex-col w-1/3 gap-y-2">
        <TaskCard
          title="Titulo 1"
          owner="Usuario 1"
          status="new"
          priority="low"
          description="Esta es una descripcion más larga
        "
        />
        <TaskCard
          title="Titulo 1"
          owner="Usuario 1"
          status="new"
          priority="low"
          description="Esta es una descripcion
      "
        />
      </div>
      <div className="flex flex-col w-1/3 gap-y-2">
        <TaskCard
          title="Titulo 1"
          owner="Usuario 1"
          status="new"
          priority="low"
          description="Esta es una descripcion
        "
        />
      </div>
      <div className="flex flex-col w-1/3 gap-y-2">
        <TaskCard
          title="Titulo 1"
          owner="Usuario 1"
          status="new"
          priority="low"
          description="Esta es una descripcion
        "
        />
      </div>
    </div>
  );
}
