import React, { useState } from "react";
import Notificaciones from "./Notificacion";

const EjemploNotificaciones = () => {
  const [notificaciones, setNotificaciones] = useState([
    {
      id: 1,
      user: "Usuario1",
      content: "Esta es la primera notificación.",
    },
    {
      id: 2,
      user: "Usuario2",
      content: "Segunda notificación con un contenido más largo para probar.",
    },
    {
      id: 3,
      user: "Usuario3",
      content: "Otra notificación para mostrar.",
    },
  ]);

  const handleCloseNotification = (notificationId) => {
    // Filtra las notificaciones para quitar la que se cerró
    const updatedNotificaciones = notificaciones.filter(
      (notification) => notification.id !== notificationId
    );
    setNotificaciones(updatedNotificaciones);
  };

  return (
    <div>
      <Notificaciones
        notifications={notificaciones}
        onCloseNotification={handleCloseNotification}
      />
    </div>
  );
};

export default EjemploNotificaciones;
