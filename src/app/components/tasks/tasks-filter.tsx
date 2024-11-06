"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function TasksFilter() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChangeTasksFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    const selectedValue = event.target.value;

    if (selectedValue) {
      params.set("owner", selectedValue);
    } else {
      params.delete("owner");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleChangePriority = (event: ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    const selectedValue = event.target.value;

    if (selectedValue) {
      params.set("priority", selectedValue);
    } else {
      params.delete("priority");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleChangeSearch = useDebouncedCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      const inputValue = event.target.value;

      if (inputValue) {
        params.set("search", inputValue);
      } else {
        params.delete("search");
      }
      replace(`${pathname}?${params.toString()}`);
    },
    500
  );

  return (
    <section className="flex flex-col gap-y-2">
      <fieldset className="flex gap-x-2">
        <input
          name="tasks"
          type="radio"
          value="all"
          defaultChecked
          onChange={handleChangeTasksFilter}
        />
        <label>Todas</label>

        <input
          name="tasks"
          type="radio"
          value="mine"
          onChange={handleChangeTasksFilter}
        />
        <label>Mis Tareas</label>
      </fieldset>

      <input
        placeholder="Buscar..."
        className="p-2 border-2 rounded-md focus:outline-teal-200"
        onChange={handleChangeSearch}
      />
      <select
        className="p-2 border-2 rounded-md bg-white focus:outline-teal-200"
        name="priority"
        onChange={handleChangePriority}
      >
        <option value="">Prioridad</option>
        <option value="low">Baja</option>
        <option value="medium">Media</option>
        <option value="high">Alta</option>
      </select>
    </section>
  );
}
