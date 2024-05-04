import { TextBox } from "@/components/TextBox";
import { Button } from "./Button";
import Image from "next/image";
import React, { useState } from "react";
import { login } from "@/api/auth";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const data = await login(email, password);
      console.log("Login success", localStorage.getItem("accessToken"));
    } catch (error) {
      console.error(error);
    }
  };
  /**lo bonito y bueno de dios de acá pa abajo */
  return (
    <div className="flex items-center flex-col h-screen bg-gray-100">
      <div className="flex items-center flex-col gap-4 p-6 bg-white shadow-md rounded-md">
        <Image
          className="rounded-full"
          src={"/images/Logo.jpg"}
          height={160}
          width={160}
          alt="Logo"
        />
        <span className="font-bold">Iniciar Sesión</span>
        <div>
          <TextBox title="Correo:" text="Ingrese su correo" />
          <TextBox title="Contraseña:" text="Ingrese su contraseña" />
        </div>
        <Button title="Iniciar sesión" />
      </div>
    </div>
  );
};

export { Login };
