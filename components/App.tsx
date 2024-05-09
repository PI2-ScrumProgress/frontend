import React, { useState } from "react";

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

  // Supongamos que esta es la lista de usuarios que puedes asignar
  const users = [
    { id: 1, name: "Usuario 1" },
    { id: 2, name: "Usuario 2" },
    { id: 3, name: "Usuario 3" },
  ];

  const [userSearch, setUserSearch] = useState("");
  const [selectedUsers, setSelectedUsers] = useState(data.map(() => ""));

  const handleSelectUser = (index: number, userId: string) => {
    const updatedUsers = [...selectedUsers];
    updatedUsers[index] = userId;
    setSelectedUsers(updatedUsers);
  };

  const handleSearchChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUserSearch(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(userSearch.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 bg-gray-100">
      <div className="flex justify-between items-center py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Crear nuevo elemento
        </button>
        <input
          type="text"
          placeholder="Buscar usuario..."
          className="px-4 py-2 rounded"
          value={userSearch}
          onChange={handleSearchChange}
        />
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
                <select
                  className="border px-4 py-2 rounded"
                  value={selectedUsers[index]}
                  onChange={(e) => handleSelectUser(index, e.target.value)}
                >
                  <option value="">Seleccionar usuario</option>
                  {filteredUsers.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
