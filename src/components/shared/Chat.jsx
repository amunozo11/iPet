import React, { useState } from "react";
import { MdSend, MdClose, MdPhoto } from "react-icons/md";

const Chat = () => {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [messageInput, setMessageInput] = useState("");
  const [chatClosed, setChatClosed] = useState(false);

  const handleFriendSelect = (friend) => {
    setSelectedFriend(friend);
    setChatClosed(false);
  };

  const handleCloseChat = () => {
    setSelectedFriend(null);
    setChatClosed(true);
  };

  const handleSendMessage = () => {
    // lógica para enviar el mensaje
    console.log(`Mensaje enviado a ${selectedFriend}: ${messageInput}`);
    // Limpia el campo de entrada después de enviar el mensaje
    setMessageInput("");
  };

  const handleFileUpload = () => {
    // lógica para subir archivos/fotos
    console.log(`Subir foto a ${selectedFriend}`);
  };

  return (
    <div className="rounded-xl p-4 h-screen flex flex-col fixed ml-auto w-80">
      {/* Cuadro de amigos */}
      <div className="bg-[#292d55] p-4 rounded-lg shadow-lg flex-1 overflow-y-auto mb-2">
        <h2 className="text-xl text-white mb-4">Amigos</h2>
        <div className="flex flex-col">
          {/* Lista de amigos */}
          <div
            className={`cursor-pointer mb-2 ${
              selectedFriend === "amigo1" ? "bg-[#4d4078]" : ""
            }`}
            onClick={() => handleFriendSelect("amigo1")}
          >
            Amigo 1
          </div>
          <div
            className={`cursor-pointer mb-2 ${
              selectedFriend === "amigo2" ? "bg-[#4d4078]" : ""
            }`}
            onClick={() => handleFriendSelect("amigo2")}
          >
            Amigo 2
          </div>
          {/* ... agregar  ... */}
        </div>
      </div>

      {/* Cuadro de conversación */}
      <div className="bg-[#292d55] p-4 rounded-lg shadow-lg flex-1 overflow-y-auto mt-1">
        {selectedFriend && !chatClosed ? (
          <>
            <div className="flex items-center justify-between mb-3 pl-4">
              <h2 className="text-xl text-white">{selectedFriend}</h2>
              <button
                className="text-white hover:text-[#835ca8]"
                onClick={handleCloseChat}
              >
                <MdClose size={20} />
              </button>
            </div>
            <div className="flex flex-col h-40 overflow-y-auto">
              {/* Mensajes de la conversación */}
              <div className="flex items-start mb-2">
                <div className="bg-[#835ca8] text-white rounded-md p-2">
                  ¡Hola! ¿Cómo estás, {selectedFriend}?
                </div>
              </div>
              {/* ... agregar  ... */}
            </div>
            {/* Área de entrada de mensajes */}
            <div className="flex mt-5">
              <input
                type="text"
                placeholder={`Chatear con ${selectedFriend}...`}
                className="flex-grow rounded-full p-2 border-none outline-none text-sm"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
              <button
                className="bg-[#4d4078] text-white p-2 rounded-md mx-2"
                onClick={handleFileUpload}
              >
                <MdPhoto size={18} />
              </button>
              <button
                className="bg-[#4d4078] text-white p-2 rounded-r-md"
                onClick={handleSendMessage}
              >
                <MdSend size={18} />
              </button>
            </div>
          </>
        ) : (
          <div className="text-xl text-white text-center">
            {chatClosed ? "Chats" : "Chats"}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
