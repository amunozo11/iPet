import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaRegHeart, FaRegComment, FaPaperPlane } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const PublicacionEsqueleto = ({ id }) => {
  const [showComments, setShowComments] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]); // Lista de comentarios

  const controls = useAnimation();

  const handleToggleComments = () => {
    setShowComments((prev) => !prev);
  };

  const handleLike = async () => {
    // Simulación de solicitud al servidor (reemplazar con tu lógica real)
    if (!liked) {
      // Puedes enviar el "Me gusta" al servidor aquí

      // Animación de "pop"
      controls.start({ scale: 1.2 });
      await controls.start({ scale: 1, transition: { duration: 0.2 } });
      setLikesCount((count) => count + 1);
    }
    setLiked(!liked);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    // Aquí puedes enviar el comentario al servidor si es necesario
    // También puedes actualizar el estado de los comentarios para mostrar el comentario ingresado
    setComments((prevComments) => [...prevComments, comment]);
    setComment("");
  };

  useEffect(() => {
    controls.start({ scale: 1 });
  }, [liked]);

  return (
    <div className="bg-[#675378] pr-4 pl-4 pb-5 rounded-t-xl rounded-b-xl w-full h-auto sm:w-full md:w-full relative flex flex-col sm:flex-row items-center gap-4">
      <div className="bg-[#292d55] rounded-t-xl rounded-b-xl w-full h-auto sm:w-80 md:w-full md:h-auto relative flex flex-col items-start p-4">
        {/* Foto y nombre */}
        <div className="flex items-center mb-2">
          <div className="w-12 h-12 bg-[#262531] rounded-full mr-2"></div>
          <div className="w-24 h-4 bg-[#262531] rounded-full"></div>
        </div>
        {/* Hora */}
        <div className="w-16 h-4 bg-[#262531] rounded-full mb-2"></div>
        {/* Foto */}
        <div className="w-full h-36 bg-[#262531] rounded-xl mb-2"></div>
        {/* Me gusta y comentario */}
        <div className="flex items-center justify-center w-full">
          <motion.button
            className={`bg-[#4d4078] text-[#835ca8] flex-1 py-2 rounded-full mx-1 flex items-center justify-center ${
              liked ? "bg-[#835ca8] text-[#292d55]" : ""
            }`}
            onClick={handleLike}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            animate={controls}
          >
            <FaRegHeart className="mr-2 text-lg" />
            {liked ? "No me gusta" : "Me gusta"}
          </motion.button>
          <button
            className="bg-[#4d4078] text-[#835ca8] flex-1 py-2 rounded-full mx-1 flex items-center justify-center"
            onClick={handleToggleComments}
          >
            <FaRegComment className="mr-2 text-lg" />
            Comentar
          </button>
        </div>
        {showComments && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start w-full"
          >
            {/* Línea de separación */}
            <hr className="border-t border-[#4d4078] w-full my-4" />
            {/* Esqueleto de comentarios */}
            <div className="flex flex-col items-start w-full">
              {/* Muestra los comentarios existentes */}
              {comments.map((comment, index) => (
                <div key={index} className="flex items-start mb-2">
                  {/* Foto del usuario (puedes reemplazarlo con la imagen del usuario) */}
                  <div className="w-10 h-10 bg-[#262531] rounded-full mr-2 mt-4"></div>
                  {/* Contenedor para el nombre y comentario */}
                  <div className="flex flex-col">
                    {/* Nombre del usuario (puedes reemplazarlo con el nombre del usuario) */}
                    <div className="text-[#835ca8] mb-1">Nombre del Usuario</div>
                    {/* Comentario */}
                    <div className="bg-[#4d4078] w-full h-8 rounded-md px-2">
                      {comment}
                    </div>
                  </div>
                </div>
              ))}
              {/* Nuevo comentario */}
              <div className="flex items-center mt-2 w-full">
                {/* Foto del usuario (puedes reemplazarlo con la imagen del usuario) */}
                <div className="w-10 h-10 bg-[#262531] rounded-full mr-2"></div>
                {/* Cuadro de texto para el nuevo comentario */}
                <div className="flex-1 rounded-full flex items-center justify-center">
                  <input
                    type="text"
                    value={comment}
                    onChange={handleCommentChange}
                    className="flex-1 bg-[#262531] w-full py-2 px-3 rounded-full text-[#835ca8] outline-none"
                    placeholder="Añade un comentario..."
                    style={{ width: '100%' }} // Agrega esta línea
                  />
                </div>
                {/* Botón de enviar comentario */}
                <button
                  className="bg-[#4d4078] text-[#835ca8] py-2 px-4 rounded-full ml-2"
                  onClick={handleCommentSubmit}
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </motion.div>
        )}
        <button className="absolute top-0 right-0 m-4 text-[#835ca8] cursor-pointer">
          <MdClose size={24} />
        </button>
      </div>
    </div>
  );
};

export default PublicacionEsqueleto;
