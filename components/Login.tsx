import React from "react";
import { TextBox } from "@/components/TextBox";
import { Button } from "./Button";
import Image from "next/image";

const Login = () => {
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

/** const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 max-w-sm w-full bg-white shadow-md rounded-md">
        <div className="mb-4">
          <h2 className="text-center text-2xl font-bold">Iniciar Sesión</h2>
        </div>
        <form>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              className="px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm text-gray-600"
            >
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="px-4 py-2 w-full text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}; **/

export { Login };
