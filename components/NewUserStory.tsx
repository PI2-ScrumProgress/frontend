import React, { useState } from "react";
import { TextBox } from "./TextBox";
import { DropDownBox } from "./DropDownBox";
import { Description } from "./Description";
import { Button } from "./Button";
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
        storyPoints
      );

      console.log("Story created", data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-auto p-6 bg-white shadow-md rounded-md">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-700">
            Nueva historia de usuario
          </h2>
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
          text="Ingrese la descripción de la historia de usuario"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Description
          title="Criterios de aceptación:"
          text="Ingrese los criterios de aceptación de la historia de usuario"
          value={acceptanceCriteria}
          onChange={(e) => setCriteria(e.target.value)}
        />
        <div className="flex justify-center gap-x-10 p-5">
          <Button title="Cancelar" />
          <Button title="Crear HU" onClick={handleCreateStory} />
        </div>
      </div>
    </div>
  );
};

export { NewUserStory };
