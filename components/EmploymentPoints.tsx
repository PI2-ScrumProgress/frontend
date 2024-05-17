import React from "react";

const empleados = [
  { nombre: "Empleado 1", tareas: 5, puntaje: 75 },
  { nombre: "Empleado 2", tareas: 3, puntaje: 45 },
  { nombre: "Empleado 3", tareas: 8, puntaje: 120 },
];

const EmploymentPoints = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Puntajes de Empleados</h2>
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
          {empleados.map((empleado, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{empleado.nombre}</td>
              <td className="px-6 py-4 whitespace-nowrap">{empleado.tareas}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {empleado.puntaje}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { EmploymentPoints };
