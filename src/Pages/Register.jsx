import React, { useState } from "react";
import { Link } from "react-router-dom";
import Perfil from "./Perfil";

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleRegistro = () => {
    // Lógica para manejar el registro
    console.log("Registrar cuenta con:", nombre, apellido, correo, edad, telefono);
  };

  return (
    <div className="w-full h-full fixed bg-[#262531]" style={{ backgroundColor: "#262531" }}>
      <div className="flex flex-col items-center bg-[#262531]">
        <h1 className="text-4xl font-bold text-white">iPet</h1>
        <p className="mt-4 text-lg text-white">Crear Cuenta</p>
        <div className="bg-[#675378] p-6 rounded-md mt-4">
          <form>
            <div className="mb-4">
              <label htmlFor="nombre" className="block text-white text-sm font-bold">
                Nombre:
              </label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="apellido" className="block text-white text-sm font-bold">
                Apellido:
              </label>
              <input
                type="text"
                id="apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="correo" className="block text-white text-sm font-bold">
                Correo:
              </label>
              <input
                type="email"
                id="correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="edad" className="block text-white text-sm font-bold">
                Edad:
              </label>
              <input
                type="number"
                id="edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="telefono" className="block text-white text-sm font-bold">
                Teléfono:
              </label>
              <input
                type="tel"
                id="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              type="button"
              onClick={handleRegistro}
              className="bg-[#1fccd7] hover:bg-[#262531] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
            <Link to="/perfil">
                Crear Cuenta
            </Link>

            </button>
          </form>
          <p className="mt-4 text-white">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/" className="text-[#1fccd7]">
              Iniciar Sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registro;
