import React, { useRef, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";
import SolicitudesAmistad from "./EjemploSolicitudesAmistad";

const Notificacion = ({ notifications, friendRequests, onCloseNotification, onAcceptRequest, onRejectRequest }) => {
  const ref = useRef();
  const [showFriendRequests, setShowFriendRequests] = useState(false);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onCloseNotification();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onCloseNotification]);

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-[#262531] rounded-xl shadow-xl z-10">
      <div ref={ref} className="p-6">
        <nav>
          <div className="flex items-center justify-between w-full">
            <button
              className={`text-[#835ca8] font-bold text-md rounded-tl-xl rounded-tr-xl p-1 ${!showFriendRequests ? 'bg-[#4d4078] text-white' : ''}`}
              onClick={() => setShowFriendRequests(false)}
            >
              Notificaciones
            </button>

            <button
              className={`text-[#835ca8] font-bold text-md rounded-tl-xl rounded-tr-xl p-1 ${showFriendRequests ? 'bg-[#4d4078] text-white' : ''}`}
              onClick={() => setShowFriendRequests(true)}
            >
              Solicitudes de Amistad
            </button>

          </div>
        </nav>

        <div className="w-full border-b border-[#4d4078] mb-4 "></div>

        {showFriendRequests ? (
          <SolicitudesAmistad
            friendRequests={friendRequests}
            onAccept={onAcceptRequest}
            onReject={onRejectRequest}
          />
        ) : (
          
          notifications.map((notification) => (
            <div
                key={notification.id}
                className=" flex items-center bg-[#4d4078] p-4 pl-4 rounded-3xl mb-4 overflow-auto "
              >
                <div className="bg-[#835ca8] w-12 h-12 rounded-full fixed"></div>
                <div className="text-[#835ca8] font-bold px-12" style={{ textAlign: "left" }}>
                  <div>{notification.user}</div>
                  <div className="text-[#835ca8] font-light px-1">
                    {notification.content}
                  </div>
                </div>
                <button
                  className="text-[#835ca8] cursor-pointer ml-2"
                  onClick={() => onCloseNotification(notification.id)}
                >
                  <MdClose size={24} />
                </button>
              </div>

            
          ))
        )}
      </div>
    </div>
  );
};

Notificacion.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  friendRequests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCloseNotification: PropTypes.func.isRequired,
  onAcceptRequest: PropTypes.func.isRequired,
  onRejectRequest: PropTypes.func.isRequired,
};

export default Notificacion;
