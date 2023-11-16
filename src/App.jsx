import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import Sidebar from "./components/shared/Sidebar";
import Chat from "./components/shared/chat";
import PublicacionBasic from "./components/shared/PublicacionBasic";
import SearchBar from "./components/shared/SearchBar"; // Reemplaza "path-to" con la ruta correcta

const App = () => {
  const [formActivo, setFormActivo] = useState(false);
  const [publicacionAbierta, setPublicacionAbierta] = useState(false);
  const [busquedasRecientes, setBusquedasRecientes] = useState([]);



  const handleSearch = (query) => {
    // Realizar la lógica de búsqueda aquí y actualizar las búsquedas recientes
    if (query.trim() !== "") {
      setBusquedasRecientes([query, ...busquedasRecientes.slice(0, 4)]);
    }
  };

  const handleClickRecentSearch = (query) => {
    // Realizar la acción correspondiente al hacer clic en una búsqueda reciente
    console.log("Buscar:", query);
  };

  const togglePublicacion = () => {
    setPublicacionAbierta(!publicacionAbierta);
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
      </nav>
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8 p-4">
        <div className="lg:col-span-6">
          <header>
            {/*Title and search*/}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div className="pd pl-6 pt-2">
                <h1 className="text-2xl text-bg-[262531]">Hola, User.</h1>
                <p className="text-bg-[262531]">DIA MES AÑO</p>
              </div>
              <SearchBar
                onSearch={handleSearch}
                onRecentSearchClick={handleClickRecentSearch}
                recentSearches={busquedasRecientes}
              />
            </div>
          </header>

          {/* Content */}
          <div className="bg-[#675378] rounded-t-xl rounded-b-xl w-full h-auto sm:w-full md:w-full relative p-4 flex flex-col sm:flex-row items-center gap-4">
            <div className="bg-[#675378] rounded-t-xl rounded-b-xl w-full h-auto sm:w-full md:w-full relative p-4 flex flex-col sm:flex-row items-center gap-4">
              <div className="bg-[#292d55] rounded-t-xl rounded-b-xl w-full h-auto sm:w-80 md:w-full md:h-auto relative flex flex-col items-start p-4">
                <div className="flex items-center justify-center w-full py-2">
                  <div className="absolute left-3 bg-[#262531] rounded-full sm:mr-4 md:mr-5 md:w-20 md:h-20"></div>

                  {/* Boton de publicacion basica*/}
                  <div className="flex items-center justify-center w-full">
                    <button
                      className="flex-1 bg-[#262531] py-3 px-20 rounded-full text-[#835ca8] outline-none relative"
                      style={{ textAlign: "left", fontSize: "20px" }}
                      onClick={togglePublicacion}
                    >
                      <span className="italic">Publicar en iPet...</span>
                    </button>
                  </div>
                </div>

                {/* Ventana emergente de PublicacionBasic */}
                {publicacionAbierta && <PublicacionBasic onClose={togglePublicacion} />}

                <hr className="border-t border-[#835ca8] w-full my-4" />

                <div className="flex items-center justify-center w-full">
                  <button className="bg-[#4d4078] text-[#835ca8] flex-1 py-2 rounded-full mx-1">Adopción</button>
                  <button className="bg-[#4d4078] text-[#835ca8] flex-1 py-2 rounded-full mx-1">Perdidas</button>
                  <button className="bg-[#4d4078] text-[#835ca8] flex-1 py-2 rounded-full mx-1">Cuidadores</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 fixed lg:static right-0">
          <div className="pd-top-50">
            {/* Chat */}
            <Chat />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
