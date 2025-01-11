import React from "react";

const Buttons = ({ width, text ,onClick,type}) => {
  return (
    <div>
      <button
        className="bg-[#f59e0b] text-white rounded text-xs sm:text-sm h-[35px] hover:scale-110 hover:shadow-md hover:shadow-amber-500/50 ease-out duration-300"
        style={{ width: width }}
        type={type}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Buttons;
