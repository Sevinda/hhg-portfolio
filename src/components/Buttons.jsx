import React from "react";

const Buttons = ({ buttonType, text }) => {
  return buttonType === "teal" ? (
    <button className="px-[24px] py-[8px] bg-[#30B0C7] rounded-[8px] font-bold hover:outline hover:outline-1 hover:bg-transparent transition-all">
      {text}
    </button>
  ) : (
    <button className="px-[24px] py-[8px] outline outline-1 rounded-[8px] font-bold hover:outline-none hover:bg-[#30B0C7] transition-all">
      {text}
    </button>
  );
};

export default Buttons;
