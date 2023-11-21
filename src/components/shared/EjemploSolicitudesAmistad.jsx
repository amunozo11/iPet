import React from "react";
import SolicitudesAmistad from "./SolicitudesAmistad";

const EjemploSolicitudesAmistad = () => {
  const friendRequests = [
    {
      id: 1,
      user: "Usuario1",
    },
    {
      id: 2,
      user: "Usuario2",
    },
    {
      id: 3,
      user: "Usuario3",
    },
  ];

  const handleAccept = (requestId) => {
    console.log(`Solicitud aceptada: ${requestId}`);
    // Lógica para aceptar la solicitud, puedes implementarla según tus necesidades
  };

  const handleReject = (requestId) => {
    console.log(`Solicitud rechazada: ${requestId}`);
    // Lógica para rechazar la solicitud, puedes implementarla según tus necesidades
  };

  return (
    <SolicitudesAmistad
      friendRequests={friendRequests}
      onAccept={handleAccept}
      onReject={handleReject}
    />
  );
};

export default EjemploSolicitudesAmistad;