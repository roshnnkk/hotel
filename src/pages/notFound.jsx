import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../assets/images/Error404.png";
const NotFound = () => {
  return (
    <div className="flex flex-col bg-amber-200 items-center justify-center min-h-screen bg-gray-200">
      <img src={errorImg} alt="404 Error" className="mb-4 w-1/2" />
      <p className="text-xs md:text-xl mb-4">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
