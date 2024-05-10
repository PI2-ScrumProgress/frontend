import { TextBox } from "./TextBox";
import { DropDownBox } from "./DropDownBox";
import { Description } from "./Description";
import { DateBox } from "./DateBox";
import { Button } from "./Button";
import React, { useState } from "react";
import { createTask } from "@/api/backlog/newBacklogElement";

const NewTask = () => {
  const [projectId, setProjectId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Alta");
  const [dueDate, setDueDate] = useState("");

  const handleCreateTask = async () => {
    try {
      setProjectId("1");
      console.log(
        "Data de la tarea: ",
        projectId,
        title,
        description,
        priority,
        dueDate
      );
      const data = await createTask(
        projectId,
        title,
        description,
        priority,
        dueDate
      );
      console.log("Task created", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    /**lo bueno y bonito de dios**/
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-auto p-6 bg-white shadow-md rounded-md">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-700">Nueva Tarea</h2>
        </div>
        <div className="flex items-center">
          <TextBox
            title="Título:"
            text="Ingrese título de la tarea"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <DropDownBox
            title="Prioridad"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
        </div>
        <Description
          title="Descripción:"
          text="Ingrese la descripción de la tarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <DateBox
          title="Fecha límite:"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <div className="flex justify-center gap-x-10 p-5">
          <Button title="Cancelar" />
          <Button title="Crear tarea" onClick={handleCreateTask} />
        </div>
      </div>
    </div>
  );
};

export { NewTask };
