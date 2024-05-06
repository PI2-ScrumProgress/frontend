import React from "react";

function App() {
  const data = [
    { title: "Tarea 1", type: "Tarea", status: "Completada", date: "XX/XX/XX" },
    { title: "Tarea 2", type: "Tarea", status: "Nuevo", date: "XX/XX/XX" },
    {
      title: "Historia de usuario 1",
      type: "Historia",
      status: "Activa",
      date: "XX/XX/XX",
    },
    { title: "Tarea 3", type: "Tarea", status: "Nuevo", date: "XX/XX/XX" },
    {
      title: "Historia de usuario 2",
      type: "Historia",
      status: "Nuevo",
      date: "XX/XX/XX",
    },
  ];

  return (
    <div className="container mx-auto px-4 bg-gray-100 ">
      <div className="flex justify-between items-center py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Crear nuevo elemento
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Filtrar
        </button>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Título</th>
            <th className="px-4 py-2">Tipo</th>
            <th className="px-4 py-2">Estado</th>
            <th className="px-4 py-2">Fecha límite</th>
            <th className="px-4 py-2">Asignado a</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className="text-center" key={index}>
              <td className="border px-4 py-2">{item.title}</td>
              <td className="border px-4 py-2">{item.type}</td>
              <td className="border px-4 py-2">{item.status}</td>
              <td className="border px-4 py-2">{item.date}</td>
              <td className="border px-4 py-2">
                <div className="flex justify-center">
                  {/* Placeholder for user icons */}
                  <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #
                  </span>
                  <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #
                  </span>
                  <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
