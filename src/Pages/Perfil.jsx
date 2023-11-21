import React, { useState } from "react";
import Sidebar from "../components/shared/Sidebar";
import Chat from "../components/shared/Chat";
import PublicacionEsqueleto from "../components/shared/Publicaciones_Esqueletos";
import { FaEdit, FaPowerOff } from "react-icons/fa";
import EditPerfil from "../components/shared/EditPerfil";

const Perfil = () => {
  const [isEditPerfilOpen, setIsEditPerfilOpen] = useState(false);

  const handleEditPerfilClick = () => {
    setIsEditPerfilOpen(true);
  };

  const handleEditPerfilClose = () => {
    setIsEditPerfilOpen(false);
  };
  // Supongamos que tienes un estado que almacena la información del usuario
  const usuario = {
    nombre: "Nombre del Usuario",
    fotoPerfil: "/ruta/fotoPerfil.jpg",
    publicaciones: [
      // Lista de publicaciones del usuario
      // Cada publicación podría tener su propia información
    ],
  };

  return (
    <div className="bg-[#675378] w-full min-h-screen">
      <Sidebar />
      <nav className="bg-[#262531] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl"></nav>
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8 p-4">
        <div className="lg:col-span-6">
          <div className="flex flex-col items-center mb-8">
            {/* Cuadrado vacío */}
            <div className="bg-white w-32 h-32 rounded-full"></div>

            {/* Foto de perfil en un círculo grande */}
            <div className="bg-[#1fccd7] mt-[-50px] rounded-full border-4 border-white overflow-hidden">
              <img
                src={usuario.fotoPerfil}
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Nombre del usuario */}
            <div className="text-white text-lg font-bold mt-4">{usuario.nombre}</div>

            {/* Línea */}
            <hr className="border-t border-white w-full my-4" />

            {/* Esqueleto de publicaciones */}
            {usuario.publicaciones.map((_, index) => (
              <PublicacionEsqueleto key={index} />
            ))}
          </div>
        </div>

        {/* Sección lateral para el chat */}
        <div className="lg:col-span-2">
          <div className="pd-top-55">
            <Chat />
          </div>
        </div>
      </main>

      {/* Header fijo en la parte inferior */}
      <div className="bg-red-500 text-white py-2 px-4 fixed bottom-0 left-0 w-full text-center">
        <button className="flex items-center justify-center ml-[500px]" onClick={() => { /* Lógica para cerrar sesión */ }}>
          <FaPowerOff className="px-12" />
          Cerrar Sesión
        </button>
      </div>

      {/* Circulo flotante con el icono de editar perfil */}
      <div className="bg-[#1fccd7] text-white rounded-full fixed bottom-8 right-8 p-8 cursor-pointer" onClick={handleEditPerfilClick}>
        <FaEdit />
      </div>

      {/* Ventana emergente EditPerfil */}
      {isEditPerfilOpen && (
        <EditPerfil
          nombre={usuario.nombre}
          fotoPerfil={usuario.fotoPerfil}
          onEditNombre={(nuevoNombre) => {
            // Lógica para editar el nombre
          }}
          onEditFechaNacimiento={(nuevaFechaNacimiento) => {
            // Lógica para editar la fecha de nacimiento
          }}
          onEditFotoPerfil={(nuevaFotoPerfil) => {
            // Lógica para editar la foto de perfil
          }}
          onCancel={handleEditPerfilClose}
          onSave={() => {
            // Lógica para guardar los cambios
            handleEditPerfilClose();
          }}
        />
      )}
    </div>
  );
};

export default Perfil;
