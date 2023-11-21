import React, { useState, useRef, useEffect } from "react";
import { BiSearchAlt2, BiX } from "react-icons/bi";

const SearchBar = () => {
  const [formActivo, setFormActivo] = useState(false);
  const [query, setQuery] = useState("");
  const [busquedasRecientes, setBusquedasRecientes] = useState([
    "Gatos",
    "Perros",
    "Aves",
    "Adopción",
    "ds",
    "sda",
    "dasd",
  ]);
  const [filtroAnimal, setFiltroAnimal] = useState("");
  const [filtroPublicacion, setFiltroPublicacion] = useState("");
  const [filtrosVisibles, setFiltrosVisibles] = useState(false);

  const formRef = useRef(null);

  const toggleForm = () => {
    setFormActivo(!formActivo);
  };

  const handleSearch = () => {
    if (query.trim() !== "") {
      setBusquedasRecientes([query, ...busquedasRecientes.slice(0, 4)]);
      setQuery("");
    }
  };

  const handleClearRecentSearches = () => {
    setBusquedasRecientes([]);
  };

  const handleClickRecentSearch = (recent) => {
    console.log("Buscar:", recent);
  };

  const handleFilterAnimalChange = (e) => {
    setFiltroAnimal(e.target.value);
  };

  const handleFilterPublicacionChange = (e) => {
    setFiltroPublicacion(e.target.value);
  };

  const handleToggleFiltros = () => {
    setFiltrosVisibles(!filtrosVisibles);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target) && formActivo) {
        setFormActivo(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [formRef, formActivo]);

  return (
    <div className={`form-container relative w-1/2 lg:w-full lg:max-w-sm pd pr-10 transition-all duration-300 ease-in-out ${formActivo ? "form-activo" : ""}`}>
      <form ref={formRef}>
        <div className="input-container flex items-center bg-[#262531] rounded-full p-2" onClick={toggleForm}>
          {formActivo ? null : <BiSearchAlt2 className="search-icon text-[#835ca8] text-2xl ml-4" />}
          <input
            type="text"
            className={`bg-transparent w-full py-2 pl-2 pr-4 rounded-full text-[#4d4078] outline-none transition-all duration-300 ease-in-out ${formActivo ? "ml-0" : "ml-8"}`}
            placeholder="Buscar en iPet..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
        </div>
        {formActivo && (
          <div className="bg-[#262531] rounded-md mt-2 p-2 absolute left-0 w-full z-50">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-[#4d4078] text-sm">Búsquedas recientes:</h3>
              <BiX onClick={handleClearRecentSearches} className="cursor-pointer text-[#4d4078] hover:text-white" />
            </div>
            {busquedasRecientes.length > 0 ? (
              <ul>
                {busquedasRecientes.map((recent, index) => (
                  <li key={index} className="flex items-center justify-between pl-3 cursor-pointer text-gray-300 hover:text-white">
                    <span onClick={() => handleClickRecentSearch(recent)}>{recent}</span>
                    <BiX onClick={() => setBusquedasRecientes(busquedasRecientes.filter((item) => item !== recent))} className="cursor-pointer text-[#4d4078] hover:text-white" />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-300">No hay búsquedas recientes.</p>
            )}
            
            <hr className="border-t border-[#4d4078] w-full my-4" />

            {/* Nuevas categorías de filtro */}
            <div className="pl-4">
              <div className="flex items-center mb-2">
                <input type="checkbox" checked={filtrosVisibles} onChange={handleToggleFiltros} className="mr-2" />
                <span className="text-[#4d4078] text-sm fixed">Mostrar filtros</span>
              </div>
              {filtrosVisibles && (
                <>
                  <h3 className="text-[#4d4078] text-sm mb-2 ">Filtrar por:</h3>
                  <div className="flex flex-row">
                    <label className="inline-flex items-center mr-4">
                      <input type="radio" value="Perro" checked={filtroAnimal === "Perro"} onChange={handleFilterAnimalChange} />
                      <span className="ml-1">Perro</span>
                    </label>
                    <label className="inline-flex items-center mr-4">
                      <input type="radio" value="Gato" checked={filtroAnimal === "Gato"} onChange={handleFilterAnimalChange} />
                      <span className="ml-1">Gato</span>
                    </label>
                    <label className="inline-flex items-center mr-4">
                      <input type="radio" value="Ave" checked={filtroAnimal === "Ave"} onChange={handleFilterAnimalChange} />
                      <span className="ml-1">Ave</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" value="Conejo" checked={filtroAnimal === "Conejo"} onChange={handleFilterAnimalChange} />
                      <span className="ml-1">Conejo</span>
                    </label>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-[#4d4078] text-sm mb-2">Tipo de publicación:</h3>
                    <label className="inline-flex items-center mr-4">
                      <input type="radio" value="Adopción" checked={filtroPublicacion === "Adopción"} onChange={handleFilterPublicacionChange} />
                      <span className="ml-1">Adopción</span>
                    </label>
                    <label className="inline-flex items-center mr-4">
                      <input type="radio" value="Perdida" checked={filtroPublicacion === "Perdida"} onChange={handleFilterPublicacionChange} />
                      <span className="ml-1">Perdida</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" value="Cuidadores" checked={filtroPublicacion === "Cuidadores"} onChange={handleFilterPublicacionChange} />
                      <span className="ml-1">Cuidadores</span>
                    </label>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
