export default function CreateTaskForm() {
  return (
    <section className="min-w-96 mt-4 mx-2 md:mt-10 p-4 shadow-md bg-white rounded-md">
      <h1 className="font-semibold text-xl mb-4">Nueva Tarea</h1>
      <form action="" className="flex flex-col gap-y-3">
        <fieldset>
          <input
            id="title"
            name="title"
            placeholder="Título"
            className="w-full p-2 border-2 rounded-md focus:outline-teal-200"
          />
          <span className="bg-pink-500 text-white px-1 text-sm">
            Error de campo
          </span>
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
          <span className="bg-pink-500 text-white px-1 text-sm">
            Error de campo
          </span>
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
          <span className="bg-pink-500 text-white px-1 text-sm">
            Error de campo
          </span>
        </fieldset>

        <fieldset>
          <select
            id="owner"
            name="owner"
            className="w-full p-2 border-2 rounded-md bg-white focus:outline-teal-200"
          >
            <option value="">Asignar..</option>
            <option value="1">Member 1</option>
            <option value="2">Member 2</option>
            <option value="3">Member 3</option>
          </select>
          <span className="bg-pink-500 text-white px-1 text-sm">
            Error de campo
          </span>
        </fieldset>

        <fieldset>
          <textarea
            id="description"
            name="description"
            placeholder="Escribe una descripcion de tu tarea"
            className="w-full p-2 border-2 rounded-md focus:outline-teal-200 max-h-16 resize-none"
          />
          <span className="bg-pink-500 text-white px-1 text-sm">
            Error de campo
          </span>
        </fieldset>

        <button className="w-full py-1 border-2 font-medium  border-teal-400 rounded-xl hover:bg-teal-400 hover:text-white">
          Crear
        </button>
      </form>
    </section>
  );
}
