export default function TasksFilter() {
  return (
    <section className="flex flex-col gap-y-2">
      <fieldset className="flex gap-x-2">
        <input name="tasks" type="radio" value="all" />
        <label>Todas</label>

        <input name="tasks" type="radio" value="mine" />
        <label>Mis Tareas</label>
      </fieldset>

      <input
        placeholder="Buscar..."
        className="p-2 border-2 rounded-md focus:outline-teal-200"
      />
      <select className="p-2 border-2 rounded-md bg-white focus:outline-teal-200">
        <option value="">Prioridad</option>
        <option value="low">Baja</option>
        <option value="medium">Media</option>
        <option value="high">Alta</option>
      </select>
    </section>
  );
}
