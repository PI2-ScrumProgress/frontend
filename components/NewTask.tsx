import React from "react";

const NewTask = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 max-w-md w-full bg-white shadow-md rounded-md">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-700">Nueva Tarea</h2>
        </div>
        <form>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="title" className="block text-sm text-gray-600">
                Título*
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Título de la tarea"
                className="px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="priority" className="block text-sm text-gray-600">
                Prioridad
              </label>
              <select
                name="priority"
                id="priority"
                className="px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja">Baja</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm text-gray-600"
            >
              Descripción
            </label>
            <textarea
              name="description"
              id="description"
              rows={4}
              placeholder="Añadir descripción"
              className="px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="due-date" className="block text-sm text-gray-600">
              Fecha límite
            </label>
            <input
              type="date"
              name="due-date"
              id="due-date"
              className="px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="px-6 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Crear Tarea
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { NewTask };