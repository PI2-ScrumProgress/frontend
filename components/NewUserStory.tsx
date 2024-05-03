import React from "react";
import { TextBox } from "./TextBox";
import { DropDownBox } from "./DropDownBox";
import { Description } from "./Description";
import { DateBox } from "./DateBox";
import { Button } from "./Button";

const NewUserStory = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-auto p-6 bg-white shadow-md rounded-md">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-700">
            Nueva historia de usuario
          </h2>
        </div>
        <div className="flex items-center">
          <TextBox title="Título:" text="Ingrese título de la tarea" />
          <DropDownBox title="Prioridad" />
        </div>
        <Description
          title="Descripción:"
          text="Ingrese la descripción de la historia de usuario"
        />
        <DateBox title="Fecha límite:" />
        <div className="flex justify-center gap-x-10 p-5">
          <Button title="Cancelar" />
          <Button title="Crear HU" />
        </div>
      </div>
    </div>
  );
};

export { NewUserStory };
