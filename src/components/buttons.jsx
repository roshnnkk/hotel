import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const Buttons = ({ width, text, onClick, type }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleClick = () => {
    if (
      text === "Book now" ||
      text === "Choose Room" ||
      text === "Submit Form"
    ) {
      if (isLoggedIn) {
        toast.success("Navigating to the reservation form...");
        navigate("/reserveForm");
      } else {
        toast.error("Please login first to proceed.");
        navigate("/login", { state: { from: window.location.pathname } });
      }
    } else {
      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <div>
      <button
        className="bg-[#f59e0b] text-white mb-2 rounded text-xs sm:text-sm h-[35px] hover:scale-110 hover:shadow-md hover:shadow-amber-500/50 ease-out duration-300"
        style={{ width: width }}
        type={type}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Buttons;
