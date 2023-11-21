import React, { useRef, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { IoSend } from "react-icons/io5";

const PublicacionPerdidas = ({ onClose }) => {
  const ref = useRef();
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [location, setLocation] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClose();
    }
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (selectedPhotos.length + files.length <= 4) {
      setSelectedPhotos([...selectedPhotos, ...files]);
    } else {
      alert("Solo puedes adjuntar hasta 4 fotos.");
    }
  };

  const handleRemovePhoto = (index) => {
    const newPhotos = [...selectedPhotos];
    newPhotos.splice(index, 1);
    setSelectedPhotos(newPhotos);
  };

  const handleLocationChange = (event) => {
    setSearchLocation(event.target.value);
    // Aquí podrías implementar la lógica de búsqueda de ubicación en base a `searchLocation`
    // y mostrar los resultados en una lista desplegable o similar.
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClose, selectedPhotos]);

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-[#262531] rounded-xl shadow-xl overflow-hidden z-10">
      <div ref={ref} className="p-6">
        <div className="flex items-center justify-between w-full mb-4">
          <div className="text-[#835ca8] font-bold text-lg">
            Nueva Publicación de Pérdida
          </div>
          <button
            className="text-[#835ca8] cursor-pointer"
            onClick={onClose}
          >
            <MdClose size={24} />
          </button>
          
        </div>
        <div className="w-full border-b border-[#4d4078] mb-4"></div>
        <div className="flex items-center mb-4">
          <div className="bg-[#4d4078] w-24 h-24 rounded-full mr-6"></div>
          <div className="text-[#835ca8] font-bold">
            Nombre del Usuario
          </div>
        </div>

        {/* Barra de búsqueda de geolocalización */}
        <input
          type="text"
          value={searchLocation}
          onChange={handleLocationChange}
          placeholder="Buscar ubicación..."
          className="w-full bg-[#4d4078] text-[#1fccd7] pr-20 pl-20 pb-2 rounded-md mb-2 outline-none resize-none text-left"
          style={{ paddingTop: '1rem', paddingLeft: '1rem' }}
        />
        <textarea
          className="w-full bg-[#4d4078] text-[#1fccd7] pr-20 pl-20 pb-20 rounded-md mb-4 outline-none resize-none text-left"
          placeholder="Describe la pérdida..."
          style={{ paddingTop: '1rem', paddingLeft: '1rem' }}
        ></textarea>
        <div className="flex justify-between">
          <label htmlFor="file-input">
            <div className="bg-[#4d4078] text-[#262531] px-6 py-4 mx-2 rounded-full cursor-pointer">
              <IoMdPhotos />
            </div>
          </label>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
            multiple
          />
          <button className="bg-[#4d4078] text-[#262531] px-6 py-4 rounded-full">
            <IoSend />
          </button>
        </div>
        <div className="flex mt-4">
          {selectedPhotos.map((photo, index) => (
            <div key={index} className="relative mr-2">
              <img
                src={URL.createObjectURL(photo)}
                alt={`Preview-${index}`}
                className="w-16 h-16 object-cover rounded-md"
              />
              <button
                className="absolute top-0 left-0 text-[#835ca8] cursor-pointer"
                onClick={() => handleRemovePhoto(index)}
              >
                <MdClose size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicacionPerdidas;
