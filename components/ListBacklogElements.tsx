import React, { useState, useEffect } from "react";
import {
  getBacklogElements,
  BacklogElement,
} from "@/api/backlog/getBacklogElement";
import { getUsers, User } from "@/api/user/user";

function App() {
  const [backlogElements, setBacklogElements] = useState<BacklogElement[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [userSearch, setUserSearch] = useState<string>("");
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  useEffect(() => {
    getBacklogElements()
      .then((elements) => {
        setBacklogElements(elements);
        setSelectedUsers(Array(elements.length).fill(""));
      })
      .catch((error) => {
        console.error("Error al obtener elementos del backlog:", error);
      });

    getUsers()
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => {
        console.error("Error al obtener usuarios:", error);
      });
  }, []);

  const handleSelectUser = (index: number, userId: string) => {
    const updatedUsers = [...selectedUsers];
    updatedUsers[index] = userId;
    setSelectedUsers(updatedUsers);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserSearch(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(userSearch.toLowerCase())
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
            <th className="px-4 py-2">Asignado a</th>
          </tr>
        </thead>
        <tbody>
          {backlogElements.map((item, index) => (
            <tr className="text-center" key={index}>
              <td className="border px-4 py-2">{item.title}</td>
              <td className="border px-4 py-2">{item.elementType}</td>
              <td className="border px-4 py-2">{item.status}</td>
              <td className="border px-4 py-2">
                <select
                  className="border px-4 py-2 rounded"
                  value={selectedUsers[index]}
                  onChange={(e) => handleSelectUser(index, e.target.value)}
                >
                  <option value="">Seleccionar usuario</option>
                  {filteredUsers.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.username}
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
