import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Adopcion from "./Pages/Adopcion";
import Perdida from "./Pages/Perdida";
import Cuidadores from "./Pages/Cuidadores";
import Perfil from "./Pages/Perfil";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/adopcion" element={<Adopcion/>} />
        <Route path="/perdida" element={<Perdida/>} />
        <Route path="/cuidadores" element={<Cuidadores/>} />
        <Route path="/perfil" element={<Perfil/>} />
      </Routes>
    </BrowserRouter>
  );
}