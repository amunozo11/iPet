import React, { useState, useEffect } from "react";
import Sidebar from "../components/shared/Sidebar";
import Chat from "../components/shared/Chat"; // Cambié el nombre del componente a "Chat"
import PublicacionBasic from "../components/shared/PublicacionBasic";
import PublicacionAdopcion from "../components/shared/PublicacionAdopcion";
import SearchBar from "../components/shared/SearchBar";
import PublicacionPerdidas from "../components/shared/PublicacionPerdidas";
import PublicacionEsqueleto from "../components/shared/Publicaciones_Esqueletos"; // Corregí el nombre del componente
import PublicacionCuidadores from "../components/shared/PublicacionCuidadores";

const App = () => {
  const [formActivo, setFormActivo] = useState(false);
  const [publicacionAbierta, setPublicacionAbierta] = useState(false);
  const [busquedasRecientes, setBusquedasRecientes] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [tipoPublicacion, setTipoPublicacion] = useState(null);
  const [loadingSkeletons, setLoadingSkeletons] = useState([1, 2, 3, 4]); // Cantidad de esqueletos
  const [publicaciones, setPublicaciones] = useState([]);

  const handleSearch = (query) => {
    if (query.trim() !== "") {
      setBusquedasRecientes([query, ...busquedasRecientes.slice(0, 4)]);
    }
  };

  const handleClickRecentSearch = (query) => {
    console.log("Buscar:", query);
  };

  const togglePublicacion = (tipo) => {
    setTipoPublicacion(tipo);
    setPublicacionAbierta(true);
  };

  const handleClosePublicacion = () => {
    setPublicacionAbierta(false);
    setTipoPublicacion(null);
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      cargarMasPublicaciones();
    }
  };

  const cargarMasPublicaciones = async () => {
    // Simulación de solicitud al servidor (reemplazar con tu lógica real)
    const nuevasPublicaciones = await obtenerNuevasPublicaciones();
    setPublicaciones((prevPublicaciones) => [...prevPublicaciones, ...nuevasPublicaciones]);
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        cargarMasPublicaciones();
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
              <SearchBar
                onSearch={handleSearch}
                onRecentSearchClick={handleClickRecentSearch}
                recentSearches={busquedasRecientes}
              />
            </div>
          </header>

          {/* PUBLICACIONES */}
          <div className="bg-[#675378] rounded-t-xl rounded-b-xl w-full h-auto sm:w-full md:w-full relative p-4 flex flex-col sm:flex-row items-center gap-4">
            <div className="bg-[#292d55] rounded-t-xl rounded-b-xl w-full h-auto sm:w-80 md:w-full md:h-auto relative flex flex-col items-start p-4">
              <div className="flex items-center justify-center w-full py-2">
                <div className="absolute left-3 bg-[#262531] rounded-full sm:mr-4 md:mr-5 md:w-20 md:h-20"></div>
                <div
                  className="flex-1 bg-[#262531] py-3 px-20 rounded-full text-[#835ca8] outline-none relative"
                  style={{ textAlign: "left", fontSize: "20px" }}
                  onClick={() => togglePublicacion("Basica")}
                >
                  <span className="italic">Publicar en iPet...</span>
                </div>
              </div>
              {publicacionAbierta && tipoPublicacion === "Basica" && (
                <PublicacionBasic onClose={handleClosePublicacion} />
              )}
              <hr className="border-t border-[#835ca8] w-full my-4" />
              <div className="flex items-center justify-center w-full">
                <button
                  className="bg-[#4d4078] text-[#835ca8] flex-1 py-2 rounded-full mx-1"
                  onClick={() => togglePublicacion("Adopcion")}
                >
                  Adopción
                {publicacionAbierta && tipoPublicacion === "Adopcion" && (
                    <PublicacionAdopcion onClose={handleClosePublicacion} />
                )}
                </button>
                <button
                  className="bg-[#4d4078] text-[#835ca8] flex-1 py-2 rounded-full mx-1"
                  onClick={() => togglePublicacion("Perdidas")}
                >
                  Perdidas
                {publicacionAbierta && tipoPublicacion === "Perdidas" && (
                    <PublicacionPerdidas onClose={handleClosePublicacion} />
                )}
                </button>
                <button
                  className="bg-[#4d4078] text-[#835ca8] flex-1 py-2 rounded-full mx-1"
                  onClick={() => togglePublicacion("Cuidadores")}
                >
                  Cuidadores
                {publicacionAbierta && tipoPublicacion === "Cuidadores" && (
                    <PublicacionCuidadores onClose={handleClosePublicacion} />
                )}
                </button>
              </div>
            </div>
          </div>

          {/* Esqueletos de publicaciones */}
          {loadingSkeletons.map((_, index) => (
            <PublicacionEsqueleto key={index} showComments={showComments} setShowComments={setShowComments} />
          ))}
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

export default App;
