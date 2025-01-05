import React from 'react';

const Buttons = ({ width, text }) => {
  return (
    <div>
      <button
        className="bg-[#f59e0b] rounded text-xs sm:text-sm h-[35px]"
        style={{ width: width }}
        type="button"
      >
        {text}
      </button>
    </div>
  );
};

export default Buttons;
