"use client";
import { TaskCreateAction } from "@/app/lib/task-action";
import { UserFromDB } from "@/app/models/definitions";
import { useActionState } from "react";

export default function TaskCreateForm({
  users,
}: {
  users: UserFromDB[] | null;
}) {
  const [actionResult, formAction, isPending] = useActionState(
    TaskCreateAction,
    undefined
  );

  return (
    <section className="min-w-96 mt-4 mx-2 md:mt-10 p-4 shadow-md bg-white rounded-md">
      <h1 className="font-semibold text-xl mb-4">Nueva Tarea</h1>
      <form action={formAction} className="flex flex-col gap-y-3">
        <fieldset>
          <input
            id="title"
            name="title"
            placeholder="Título"
            className="w-full p-2 border-2 rounded-md focus:outline-teal-200"
          />
          {actionResult?.errors?.title?.map((error, index) => {
            return (
              <span key={error + index} className="block text-sm text-red-500">
                {error}
              </span>
            );
          })}
        </fieldset>

        <fieldset>
          <select
            id="status"
            name="status"
            className="w-full p-2 border-2 rounded-md bg-white focus:outline-teal-200"
          >
            <option value="">Estado</option>
            <option value="new">Nuevo</option>
            <option value="in_progress">En Progreso</option>
            <option value="finished">Terminado</option>
          </select>
          {actionResult?.errors?.status?.map((error, index) => {
            return (
              <span key={error + index} className="block text-sm text-red-500">
                {error}
              </span>
            );
          })}
        </fieldset>

        <fieldset>
          <select
            id="priority"
            name="priority"
            className="w-full p-2 border-2 rounded-md bg-white focus:outline-teal-200"
          >
            <option value="">Prioridad</option>
            <option value="low">Baja</option>
            <option value="medium">Media</option>
            <option value="high">Alta</option>
          </select>
          {actionResult?.errors?.priority?.map((error, index) => {
            return (
              <span key={error + index} className="block text-sm text-red-500">
                {error}
              </span>
            );
          })}
        </fieldset>

        <fieldset>
          <select
            id="userId"
            name="userId"
            className="w-full p-2 border-2 rounded-md bg-white focus:outline-teal-200"
          >
            <option value="">Asignar..</option>;
            {users?.map((user, index) => {
              return (
                <option key={index + user.name} value={user.id}>
                  {user.name}
                </option>
              );
            })}
          </select>
          {actionResult?.errors?.userId?.map((error, index) => {
            return (
              <span key={error + index} className="block text-sm text-red-500">
                {error}
              </span>
            );
          })}
        </fieldset>

        <fieldset>
          <textarea
            id="description"
            name="description"
            placeholder="Escribe una descripcion de tu tarea"
            className="w-full p-2 border-2 rounded-md focus:outline-teal-200 max-h-16 resize-none"
          />
          {actionResult?.errors?.description?.map((error, index) => {
            return (
              <span key={error + index} className="block text-sm text-red-500">
                {error}
              </span>
            );
          })}
        </fieldset>

        <button
          aria-disabled={isPending}
          className="w-full py-1 border-2 font-medium  border-teal-400 rounded-xl hover:bg-teal-400 hover:text-white"
        >
          Crear
        </button>
      </form>
    </section>
  );
}
