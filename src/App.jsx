import React, { useState } from "react";
import "./components/shared/style.css";
import { CgMenuRound } from "react-icons/cg";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdPets } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { PiDogFill } from "react-icons/pi";
import { IoIosHelpBuoy } from "react-icons/io";
//Componentes
import Sidebar from "./components/shared/Sidebar";

function App() {
  const [formActivo, setFormActivo] = useState(false);

  const toggleForm = () => {
    setFormActivo(!formActivo);
  };

  return (
    <div
      className={`bg-[#675378] w-full min-h-screen ${
        formActivo ? "form-activo" : ""
      }`}
    >
      <Sidebar />
      {/* Menu movil */}
      <nav
        className="bg-[#262531] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-4 px-8 
      flex items-center justify-between rounded-tl-xl rounded-tr-xl"
      >
        <button className="hover:bg-[#675378] p-2 rounded-t-xl rounded-b-xl group transition-colors">
          <a
            href="#"
            className="group-hover:bg-[#1fccd7] p-1 flex justify-center rounded-xl text-gray-400 group-hover:text-white
              transition-colors"
          >
            <RiMentalHealthLine />
          </a>
        </button>

        <button className="hover:bg-[#675378] p-2 rounded-t-xl rounded-b-xl group transition-colors">
          <a
            href="#"
            className="group-hover:bg-[#1fccd7] p-1 flex justify-center rounded-xl text-gray-400 group-hover:text-white
              transition-colors"
          >
            <PiDogFill />
          </a>
        </button>

        <button className="hover:bg-[#675378] p-2 rounded-t-xl rounded-b-xl group transition-colors">
          <a
            href="#"
            className="group-hover:bg-[#1fccd7] p-1 flex justify-center rounded-xl text-gray-400 group-hover:text-white
              transition-colors"
          >
            <MdPets />
          </a>
        </button>

        <button className="hover:bg-[#675378] p-2 rounded-t-xl rounded-b-xl group transition-colors">
          <a
            href="#"
            className="group-hover:bg-[#1fccd7] p-1 flex justify-center rounded-xl text-gray-400 group-hover:text-white
              transition-colors"
          >
            <IoIosHelpBuoy />
          </a>
        </button>

        <button className="hover:bg-[#675378] p-2 rounded-t-xl rounded-b-xl group transition-colors">
          <a
            href="#"
            className="group-hover:bg-[#1fccd7] p-1 flex justify-center rounded-xl text-gray-400 group-hover:text-white
              transition-colors"
          >
            <CgMenuRound />
          </a>
        </button>
      </nav>
      <main className="lg:pl-28 grid grid-cols1 lg:grid-cols-8 p-4">
        <div className="lg:col-span-6">
          <header>
            {/*Title and search*/}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div className="pd pl-6 pt-2">
                <h1 className="text-2xl text-gray-300">Hola, User.</h1>
                <p className="text-gray-500">DIA MES AÑO</p>
              </div>

              <form onClick={toggleForm}>
                <div className="relative w-full pd pr-6">
                  <BiSearchAlt2 className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1fccd7]" />
                  <input
                    type="text"
                    className="bg-[#262531] w-full py-5 pl-10 pr-4 rounded-full text-[#1fccd7] outline-none"
                    placeholder="Buscar en iPet..."
                  />
                </div>
              </form>
            </div>
          </header>
          {/* Content */}
          <div className="bg-[#675378] rounded-t-xl rounded-b-xl w-full h-auto sm:w-80 md:w-full relative p-4 flex items-center gap-1">
            <div className="bg-[#292d55] rounded-t-xl rounded-b-xl w-full h-auto sm:w-80 sm:h-auto md:w-full md:h-auto relative flex flex-col items-start p-4">
              <div className="flex flex-row items-center justify-center">
                <div className="bg-[#835ca8] rounded-full w-16 h-16 mb-2 self-start sm:mr-4 md:mr-4 md:w-20 md:h-20"></div>
                <div className="flex flex-col">
                  <div className="flex flex-grow bg-[#262531] py-2 pl-4 pr-40 rounded-lg text-[#1fccd7] outline-none">
                    <input
                      type="text"
                      className="flex flex-grow bg-[#262531] py-2 pl-4 pr-40 rounded-lg text-[#1fccd7] outline-none"
                      placeholder="Publicar en iPet..."
                    />
                  </div>
                </div>
              </div>
              <div></div>
              <hr className="border-t border-[#835ca8] w-full my-4" />
              <div className="flex justify-center w-full">
                <button className="bg-[#4d4078] text-[#835ca8] px-3 py-1 rounded mb-2 self-center sm:mx-2 md:mx-2 w-full sm:w-auto md:w-auto">
                  Adopción
                </button>
                <button className="bg-[#4d4078] text-[#835ca8] px-3 py-1 rounded mb-2 self-center sm:mx-2 md:mx-2 w-full sm:w-auto md:w-auto">
                  Perdidas
                </button>
                <button className="bg-[#4d4078] text-[#835ca8] px-3 py-1 rounded mb-2 self-center sm:mx-2 md:mx-2 w-full sm:w-auto md:w-auto">
                  Cuidadores
                </button>
                <button className="bg-[#4d4078] text-[#835ca8] px-3 py-1 rounded mb-2 self-center sm:mx-2 md:mx-2 w-full sm:w-auto md:w-auto">
                  Agregar Foto
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 fixed lg:static right-0"></div>
      </main>
    </div>
  );
}

export default App;
