import React, { useRef, useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import PropTypes from "prop-types";

const EditPerfil = ({
  nombre,
  apellido,
  fechaNacimiento,
  fotoPerfil,
  onEditNombre,
  onEditApellido,
  onEditFechaNacimiento,
  onEditFotoPerfil,
  onCancel,
  onSave,
}) => {
  const [editandoNombre, setEditandoNombre] = useState(false);
  const [editandoApellido, setEditandoApellido] = useState(false);
  const [editandoFechaNacimiento, setEditandoFechaNacimiento] = useState(false);
  const [fileSelected, setFileSelected] = useState();
  const [updatedImage, setUpdatedImage] = useState();

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const imagenMostrar = URL.createObjectURL(file);

    setFileSelected(file);
    setUpdatedImage(imagenMostrar);
  };

  const modalRef = useRef();

  const handleNombreEdit = () => {
    setEditandoNombre(!editandoNombre);
  };

  const handleApellidoEdit = () => {
    setEditandoApellido(!editandoApellido);
  };

  const handleFechaNacimientoEdit = () => {
    setEditandoFechaNacimiento(!editandoFechaNacimiento);
  };

  const handleFotoPerfilEdit = (e) => {
    const nuevaFoto = e.target.files[0];
    onEditFotoPerfil(nuevaFoto);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onCancel();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, onCancel]);

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-[#262531] rounded-xl shadow-xl z-10">
      <div className="p-6">
        <div className="text-[#835ca8] font-bold text-md mb-4">
          Editar Perfil
        </div>
        <div className="w-full border-b border-[#4d4078] mb-4 "></div>

        <div className="flex items-center mb-4">
          <div className="text-[#835ca8] font-bold w-24">Nombre:</div>
          <div className="flex items-center">
            <input
              type={editandoNombre ? "text" : "hidden"}
              defaultValue={nombre}
              readOnly={!editandoNombre}
              className={`bg-[#4d4078] text-white p-2 rounded-md mr-2 ${
                editandoNombre ? "border-[#835ca8] border-2" : ""
              }`}
            />
            <div
              className={`text-[#835ca8] cursor-pointer ${
                editandoNombre ? "hidden" : ""
              }`}
              onClick={handleNombreEdit}
            >
              {nombre}
              <MdEdit size={20} />
            </div>
            <button
              className={`text-[#835ca8] cursor-pointer ${
                editandoNombre ? "" : "hidden"
              }`}
              onClick={handleNombreEdit}
            >
              <MdEdit size={20} />
            </button>
          </div>
        </div>

        <div className="w-full border-b border-[#4d4078] mb-4 "></div>

        <div className="flex items-center mb-4">
          <div className="text-[#835ca8] font-bold w-24">Apellido:</div>
          <div className="flex items-center">
            <input
              type={editandoApellido ? "text" : "hidden"}
              defaultValue={apellido}
              readOnly={!editandoApellido}
              className={`bg-[#4d4078] text-white p-2 rounded-md mr-2 ${
                editandoApellido ? "border-[#835ca8] border-2" : ""
              }`}
            />
            <div
              className={`text-[#835ca8] cursor-pointer ${
                editandoApellido ? "hidden" : ""
              }`}
              onClick={handleApellidoEdit}
            >
              {apellido}
              <MdEdit size={20} />
            </div>
            <button
              className={`text-[#835ca8] cursor-pointer ${
                editandoApellido ? "" : "hidden"
              }`}
              onClick={handleApellidoEdit}
            >
              <MdEdit size={20} />
            </button>
          </div>
        </div>

        <div className="w-full border-b border-[#4d4078] mb-4 "></div>

        <div className="flex items-center mb-4">
          <div className="text-[#835ca8] font-bold w-24">Fecha de nacimiento:</div>
          <div className="flex items-center">
            <input
              type={editandoFechaNacimiento ? "text" : "hidden"}
              defaultValue={fechaNacimiento}
              readOnly={!editandoFechaNacimiento}
              className={`bg-[#4d4078] text-white p-2 rounded-md mr-2 ${
                editandoFechaNacimiento ? "border-[#835ca8] border-2" : ""
              }`}
            />
            <div
              className={`text-[#835ca8] cursor-pointer ${
                editandoFechaNacimiento ? "hidden" : ""
              }`}
              onClick={handleFechaNacimientoEdit}
            >
              {fechaNacimiento}
              <MdEdit size={20} />
            </div>
            <button
              className={`text-[#835ca8] cursor-pointer ${
                editandoFechaNacimiento ? "" : "hidden"
              }`}
              onClick={handleFechaNacimientoEdit}
            >
              <MdEdit size={20} />
            </button>
          </div>
        </div>

        <div className="w-full border-b border-[#4d4078] mb-4 "></div>

        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex w-full py-2">
            <div className="text-[#835ca8] font-bold flex items-center justify-center pr-4">Foto de Perfil:</div>
            <img
              src={updatedImage || fotoPerfil}
              alt="..."
              className="w-32 h-32 p-2 border border-[#4d4078] rounded-full"
            />
          </div>
          <label htmlFor="imagen">
          <div>
          <div className="w-32 h-8 rounded-full bg-blue-400 flex items-center justify-center">
              Seleccionar foto
            </div>
          </div>
            
          </label>
          <input
            type="file"
            accept="image/*"
            id="imagen"
            onChange={handleChange}
            className="text-[#835ca8] text-[12px] cursor-pointer hidden"
          />
        </div>

        <div className="w-full border-b border-[#4d4078] mb-4 "></div>

        <div className="flex justify-end">
          <button
            className="bg-[#4d4078] text-white p-2 rounded-md mr-2"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            className="bg-[#835ca8] text-white p-2 rounded-md"
            onClick={onSave}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

EditPerfil.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  fechaNacimiento: PropTypes.string.isRequired,
  fotoPerfil: PropTypes.string.isRequired,
  onEditNombre: PropTypes.func.isRequired,
  onEditApellido: PropTypes.func.isRequired,
  onEditFechaNacimiento: PropTypes.func.isRequired,
  onEditFotoPerfil: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditPerfil;
