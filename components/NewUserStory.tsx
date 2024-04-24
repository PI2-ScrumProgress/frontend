import React, { useState } from "react";
import { createStory } from "@/api/backlog";

const NewUserStory = () => {

  const [projectId, setProjectId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Alta");
  const [acceptanceCriteria, setCriteria] = useState("");
  const [storyPoints, setPoints] = useState(0);


  const handleCreateStory = async () => {
    try {
      setProjectId("1");
      const data = await createStory(

        projectId,
        title,
        description,
        priority,
        acceptanceCriteria,
        storyPoints,

      );

      console.log("Story created", data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 max-w-2xl w-full bg-white shadow-md rounded-md">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-700">
            Nueva Historia de Usuario
          </h2>
        </div>
        <form>
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="title" className="block text-sm text-gray-600">
                Título*
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Título de la tarea"
                onChange={(e) => setTitle(e.target.value)}
                className="px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="priority" className="block text-sm text-gray-600">
                Prioridad
              </label>
              <select
                name="priority"
                id="priority"
                onChange={(e) => setPriority(e.target.value)}
                className="px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
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
              onChange={(e) => setDescription(e.target.value)}
              className="px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="acceptanceCriteria"
              className="block text-sm text-gray-600"
            >
              Criterios de aceptación
            </label>
            <textarea
              name="acceptanceCriteria"
              id="acceptanceCriteria"
              rows={4}
              placeholder="Criterios de aceptación"
              onChange={(e) => setCriteria(e.target.value)}
              className="px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
            ></textarea>
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
              className="px-6 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600 focus:outline-none"
            >
              Crear Tarea
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { NewUserStory };
