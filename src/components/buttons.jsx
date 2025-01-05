import React from 'react';

const Buttons = ({ width, text }) => {
  return (
    <div>
      <button
        className="bg-[#f59e0b] text-white rounded text-xs sm:text-sm h-[35px] hover:scale-110 hover:shadow-md hover:shadow-amber-500/50 ease-out duration-300"
        style={{ width: width }}
        type="button"
      >
        {text}
      </button>
    </div>
  );
};

export default Buttons;
