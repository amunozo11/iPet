import React, { useState, useEffect } from "react";
import Sidebar from "../components/shared/Sidebar.jsx";
import SearchBar from "../components/shared/SearchBar.jsx";
import PublicacionEsqueleto from "../components/shared/Publicaciones_Esqueletos.jsx";
import Chat from "../components/shared/Chat"; // Asegúrate de importar el componente Chat
import GeolocalizacionBar from "../components/shared/GeolocalizacionBar.jsx";

const Adopcion = () => {
  const [formActivo, setFormActivo] = useState(false); // Necesitarás definir estos estados
  const [busquedasRecientes, setBusquedasRecientes] = useState([]);
  const [loadingSkeletons, setLoadingSkeletons] = useState(Array.from({ length: 20 }));
  // Necesitarás definir las funciones handleSearch y handleClickRecentSearch

  const handleSearch = (query) => {
    if (query.trim() !== "") {
      setBusquedasRecientes([query, ...busquedasRecientes.slice(0, 4)]);
    }
  };

  const handleClickRecentSearch = (query) => {
    console.log("Buscar:", query);
  };

  return (
    <div className={`bg-[#675378] w-full min-h-screen ${formActivo ? "form-activo" : ""}`}>
      <Sidebar />
      <nav className="bg-[#262531] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl"></nav>
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8 p-4">
        <div className="lg:col-span-6">
          <header>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div className="pd pl-6 pt-2">
                <h1 className="text-2xl text-bg-[262531]">Hola, User.</h1>
                <p className="text-bg-[262531]">DIA MES AÑO</p>
              </div>
              <GeolocalizacionBar />
              <SearchBar
                onSearch={handleSearch} // Asegúrate de definir esta función
                onRecentSearchClick={handleClickRecentSearch} // Asegúrate de definir esta función
                recentSearches={busquedasRecientes}
              />
            </div>
          </header>

          {/* PUBLICACIONES */}
          <div className="flex-1 p-2 grid grid-cols-3">
            {loadingSkeletons.map((_, index) => (
              <PublicacionEsqueleto key={index} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="pd-top-55">
            <Chat />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Adopcion;
