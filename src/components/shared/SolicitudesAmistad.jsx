import React from "react";
import PropTypes from "prop-types";

const SolicitudesAmistad = ({ friendRequests, onAccept, onReject }) => {
  return (
    <div className="overflow-y-auto overflow-x-hidden max-h-80">
      {friendRequests.map((request) => (
        <div key={request.id} className="flex items-center bg-[#4d4078] pl-1 p-1 rounded-3xl mb-4">
          <div className="bg-[#835ca8] w-12 h-12 rounded-full" style={{ flexShrink: 0 }}></div>
          <div className="text-[#835ca8] font-bold px-2" style={{ textAlign: "left" }}>
            <div>{request.user}</div>
          </div>
          <div className="flex ml-auto">
            <button
              className="text-[#835ca8] cursor-pointer ml-2  bg-emerald-600"
              onClick={() => onAccept(request.id)}
            >
              Accept
            </button>
            <button
              className="text-[#835ca8] cursor-pointer ml-2 bg-red-600"
              onClick={() => onReject(request.id)}
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

SolicitudesAmistad.propTypes = {
  friendRequests: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAccept: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired,
};



export default SolicitudesAmistad;