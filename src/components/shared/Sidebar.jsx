import React from "react";
import { GiDogHouse } from "react-icons/gi";
import { PiDogFill } from "react-icons/pi";
import { IoIosHelpBuoy } from "react-icons/io";
import { RiMentalHealthLine } from "react-icons/ri";
import { BiChat } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div
      className="bg-[#262531] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl 
  rounded-br-xl z-50 -left-full"
    >
      <div>
        <ul className="pl-4">
          <li>
            <img src="/iPet_85.png" className="my-5"></img>
          </li>

          <li className="bg-[#675378] p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-[#1fccd7] p-4 flex justify-center rounded-xl text-white"
            >
              <GiDogHouse className="text-2xl" />
            </a>
          </li>

          <li className="hover:bg-[#675378] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#1fccd7] p-4 flex justify-center rounded-xl text-[#1fccd7] group-hover:text-white
              transition-colors"
            >
              <PiDogFill className="text-2xl" />
            </a>
          </li>

          <li className="hover:bg-[#675378] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#1fccd7] p-4 flex justify-center rounded-xl text-[#1fccd7] group-hover:text-white
              transition-colors"
            >
              <IoIosHelpBuoy className="text-2xl" />
            </a>
          </li>

          <li className="hover:bg-[#675378] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#1fccd7] p-4 flex justify-center rounded-xl text-[#1fccd7] group-hover:text-white
              transition-colors"
            >
              <RiMentalHealthLine className="text-2xl" />
            </a>
          </li>

          <li className="hover:bg-[#675378] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#1fccd7] p-4 flex justify-center rounded-xl text-[#1fccd7] group-hover:text-white
              transition-colors"
            >
              <IoNotificationsOutline className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-[#675378] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#1fccd7] p-4 flex justify-center rounded-xl text-[#1fccd7] group-hover:text-white
            transition-colors"
            >
              <FaUserCircle className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
