import React, { useState } from "react";
import { Link } from "react-router-dom";
import Register from "./Register";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica para manejar el inicio de sesión
    console.log("Iniciar sesión con:", email, password);
  };

  return (
    
    <div className="w-full h-full fixed bg-[#262531] p-12" style={{ backgroundColor: "#262531"}}>
        <div className="flex flex-col items-center mt-16 bg-[#262531]">
            <h1 className="text-4xl font-bold text-white">iPet</h1>
            <p className="mt-4 text-lg text-white">Iniciar Sesión</p>
            <div className="bg-[#675378] p-6 rounded-md mt-4">
                <form>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
                    Correo:
                    </label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-white text-sm font-bold mb-2">
                    Contraseña:
                    </label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                    />
                </div>
                <button
                    type="button"
                    onClick={handleLogin}
                    className="bg-[#1fccd7] hover:bg-[#262531] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Iniciar Sesión
                </button>
                </form>
                <p className="mt-4 text-white">
                ¿No tienes una cuenta?{" "}
                <Link to="/register" className="text-[#1fccd7]">
                    Registrarse
                </Link>
                </p>
            </div>
        </div>
    </div>
    
  );
};

export default Login;
