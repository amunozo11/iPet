import React from "react";
import Sidebar from "./Sidebar.jsx";
import SearchBar from "./SearchBar.jsx";
import PublicacionEsqueleto from "./Publicaciones_Esqueletos.jsx";

const Adopcion = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <SearchBar />
        <div className="flex-1 p-4 grid grid-cols-4 gap-4">
          {Array.from({ length: 20 }, (_, index) => (
            <PublicacionEsqueleto key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Adopcion;
