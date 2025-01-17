import React from "react";
import { useLocation } from "react-router-dom";
import background from "../assets/images/DeluxeRoom.jpg";
const MoreInfo = () => {
  const location = useLocation();
  const { room, imagePath } = location.state || {};

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div
      className="bg-cover bg-center w-screen min-h-screen bg-scroll flex items-center justify-center -z-10"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="text-white p-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <img
            src={imagePath}
            alt={room.name}
            className="rounded-lg shadow-lg w-full sm:w-2/3 mb-2 md:w-2/5"
          />

          <div className="w-fit  font-custom md:w-1/2 lg:w-2/3 max-w-lg ml-5 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">{room.title}</h2>
            <h4 className="text-lg mb-4">{room.name}</h4>
            <p className="text-sm mb-6">{room.caption}</p>
            <p className="text-sm">{room.more}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
