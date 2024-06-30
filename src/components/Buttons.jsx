import React from "react";

const Buttons = ({ buttonType, text }) => {
  return buttonType === "teal" ? (
    <button className="px-[24px] py-[8px] bg-[#30B0C7] rounded-[8px] font-bold hover:scale-105 transition-all">
      {text}
    </button>
  ) : (
    <button className="px-[24px] py-[8px] outline outline-1 rounded-[8px] font-bold hover:scale-105 transition-all">
      {text}
    </button>
  );
};

export default Buttons;
