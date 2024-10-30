"use client";
import { TaskCreateAction } from "@/app/lib/task-action";
import { useActionState } from "react";

export default function TaskCreateForm() {
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
            <option value="inProgress">En Progreso</option>
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
            id="user_id"
            name="user_id"
            className="w-full p-2 border-2 rounded-md bg-white focus:outline-teal-200"
          >
            <option value="">Asignar..</option>
            <option value="1">Member 1</option>
            <option value="2">Member 2</option>
            <option value="3">Member 3</option>
          </select>
          {actionResult?.errors?.user_id?.map((error, index) => {
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
