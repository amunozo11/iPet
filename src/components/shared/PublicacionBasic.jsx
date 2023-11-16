import React, { useRef, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { IoSend } from "react-icons/io5";

const PublicacionBasic = ({ onClose }) => {
  const ref = useRef();
  const [selectedPhotos, setSelectedPhotos] = useState([]);

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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClose, selectedPhotos]);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-filter backdrop-blur-md">
      <div ref={ref} className="bg-[#262531] pr-20 pl-20 pt-10 pb-10 rounded-xl shadow-xl relative flex flex-col items-start">
        <div className="flex items-center mb-6">
          <div className="bg-[#4d4078] w-24 h-24 rounded-full mr-6"></div>
          <div className="text-[#835ca8] font-bold text-lg">
            Nombre
          </div>
        </div>
        <textarea
          className="w-full bg-[#4d4078] text-[#1fccd7] pr-20 pl-20 pb-20 rounded-md mb-4 outline-none resize-none text-left"
          placeholder="Escribe tu publicación..."
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
        <button
          className="absolute top-0 right-0 m-4 text-[#835ca8] cursor-pointer"
          onClick={onClose}
        >
          <MdClose size={24} />
        </button>
      </div>
    </div>
  );
};

export default PublicacionBasic;
