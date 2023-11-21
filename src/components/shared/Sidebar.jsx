  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import { GiDogHouse } from "react-icons/gi";
  import { PiDogFill } from "react-icons/pi";
  import { IoIosHelpBuoy } from "react-icons/io";
  import { RiMentalHealthLine } from "react-icons/ri";
  import { IoNotificationsOutline } from "react-icons/io5";
  import { FaUserCircle } from "react-icons/fa";
  import Notificacion from "./EjemploNotificaciones";

  const Sidebar = () => {
    const [activeButton, setActiveButton] = useState("/");
    const [showNotifications, setShowNotifications] = useState(false);

    const handleNotificationsClick = () => {
      setShowNotifications(!showNotifications);
    };

    const handleButtonClick = (path) => {
      setActiveButton(path);
      setShowNotifications(false);
    };

    const closeNotificaciones = () => {
      setShowNotifications(false);
    };

    return (
      <div className="bg-[#262531] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 -left-full">
        <div>
          <ul className="pl-4">
            <li>
              <img src="/iPet_85.png" className="my-5" alt="iPet Logo" />
            </li>

            <li className={`p-4 rounded-tl-xl rounded-bl-xl ${activeButton === "/" ? "bg-[#675378]" : ""}`}>
              <Link
                to="/inicio"
                className={`p-4 flex justify-center rounded-xl ${activeButton === "/" ? "bg-[#1fccd7] text-white" : "text-[#1fccd7]"} transition-colors`}
                onClick={() => handleButtonClick("/")}
              >
                <GiDogHouse className="text-2xl" />
              </Link>
            </li>

            <li className={`hover:bg-[#675378] p-4 rounded-tl-xl rounded-bl-xl group transition-colors ${activeButton === "/adopcion" ? "bg-[#1fccd7]" : ""}`}>
              <Link
                to="/adopcion"
                className={`group-hover:bg-[#1fccd7] p-4 flex justify-center rounded-xl text-[#1fccd7] group-hover:text-white transition-colors ${
                  activeButton === "/adopcion" ? "text-white" : "text-[#1fccd7]"
                }`}
                onClick={() => handleButtonClick("/adopcion")}
              >
                <PiDogFill className="text-2xl" />
              </Link>
            </li>

            <li className={`hover:bg-[#675378] p-4 rounded-tl-xl rounded-bl-xl group transition-colors ${activeButton === "/perdida" ? "bg-[#1fccd7]" : ""}`}>
              <Link
                to="/perdida"
                className={`group-hover:bg-[#1fccd7] p-4 flex justify-center rounded-xl text-[#1fccd7] group-hover:text-white transition-colors ${
                  activeButton === "/perdida" ? "text-white" : "text-[#1fccd7]"
                }`}
                onClick={() => handleButtonClick("/perdida")}
              >
                <IoIosHelpBuoy className="text-2xl" />
              </Link>
            </li>

            <li className={`hover:bg-[#675378] p-4 rounded-tl-xl rounded-bl-xl group transition-colors ${activeButton === "/cuidadores" ? "bg-[#1fccd7]" : ""}`}>
              <Link
                to="/cuidadores"
                className={`group-hover:bg-[#1fccd7] p-4 flex justify-center rounded-xl text-[#1fccd7] group-hover:text-white transition-colors ${
                  activeButton === "/cuidadores" ? "text-white" : "text-[#1fccd7]"
                }`}
                onClick={() => handleButtonClick("/cuidadores")}
              >
                <RiMentalHealthLine className="text-2xl" />
              </Link>
            </li>

            <li className={`hover:bg-[#675378] p-4 rounded-tl-xl rounded-bl-xl group transition-colors`}>
              <button
                className={`group-hover:bg-[#1fccd7] p-4 flex justify-center rounded-xl text-[#1fccd7] group-hover:text-white transition-colors `}
                onClick={handleNotificationsClick}
              >
                <IoNotificationsOutline className="text-2xl" />
              </button>
              {showNotifications && <Notificacion onClose={closeNotificaciones} />}
          </li>

          </ul>
        </div>

        <div>
          <ul className="pl-4">
            <li className={`hover:bg-[#675378] p-4 rounded-tl-xl rounded-bl-xl group transition-colors ${activeButton === "/perfil" ? "bg-[#1fccd7]" : ""}`}>
              <Link
                to="/perfil"
                className={`group-hover:bg-[#1fccd7] p-4 flex justify-center rounded-xl text-[#1fccd7] group-hover:text-white transition-colors ${
                  activeButton === "/perfil" ? "text-white" : "text-[#1fccd7]"
                }`}
                onClick={() => handleButtonClick("/perfil")}
              >
                <FaUserCircle className="text-2xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Sidebar;
