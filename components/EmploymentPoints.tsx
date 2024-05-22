import { User, getUsers, getUsersOrderedByPoints } from "@/api/user/user";
import React, { use, useEffect, useState } from "react";
import { Button } from "./Button";
import { useRouter } from "next/navigation";

const EmploymentPoints = () => {
  const router = useRouter();

  const handleBacklogClick = () => {
    router.push("/backlog");
  };

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsersOrderedByPoints()
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => {
        console.error("Error al obtener usuarios:", error);
      });
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between py-4">
        <h2 className="text-2xl font-bold mb-4">Puntajes de Empleados</h2>
        <Button title="Ver backlog" onClick={handleBacklogClick} />
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Empleado
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tareas Completadas
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Puntaje
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {user.completedTasks}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{user.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { EmploymentPoints };
