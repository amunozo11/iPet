import React from "react";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";
import PublicacionEsqueleto from "./PublicacionEsqueleto";

const Adopcion = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Searchbar />
        <div className="flex-1 p-4 grid grid-cols-4 gap-4">
          {/* Cuadrícula de publicaciones esqueleto */}
          {Array.from({ length: 20 }, (_, index) => (
            <PublicacionEsqueleto key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Adopcion;
