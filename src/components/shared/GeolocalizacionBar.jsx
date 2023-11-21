import React, { useState } from "react";
import axios from "axios";
import { MdLocationOn, MdClose } from "react-icons/md";

const GeolocalizacionBar = ({ onLocationChange }) => {
  const [ubicacion, setUbicacion] = useState("");
  const [resultadosUbicacion, setResultadosUbicacion] = useState([]);
  const [formActivo, setFormActivo] = useState(false);

  const handleUbicacionChange = async (query) => {
    setUbicacion(query);

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=TU_CLAVE_DE_API`
      );

      setResultadosUbicacion(response.data.results);
      onLocationChange(response.data.results);
    } catch (error) {
      console.error("Error al buscar la ubicación:", error.message);
    }
  };

  const handleClickLocationIcon = () => {
    setFormActivo(!formActivo);
  };

  return (
    <div className={`lg:col-span-2 pb-2 relative form-container ${formActivo ? "form-activo" : ""}`}>
      <div className="pd pl-4 pt-2">
        <div className={`relative icon-container ${formActivo ? "form-activo" : ""}`}>
          <input
            type="text"
            placeholder="Buscar ubicación..."
            value={ubicacion}
            onChange={(e) => handleUbicacionChange(e.target.value)}
            className="bg-[#262531] text-white p-3 rounded-full mt-2 outline-none"
          />
          <button
            onClick={handleClickLocationIcon}
            className="absolute left-2 top-2 py-2 cursor-pointer"
          >
          </button>
        </div>
        {formActivo && (
          <div className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer">
            <MdClose onClick={handleClickLocationIcon} className="text-[#1fccd7] text-2xl hover:text-white transition-colors" />
          </div>
        )}
        <ul className="text-white">
          {resultadosUbicacion.map((resultado, index) => (
            <li key={index}>{resultado.formatted_address}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GeolocalizacionBar;
