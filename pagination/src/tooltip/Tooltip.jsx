import React, { useState } from "react";

function Tooltip({text, children}) {
  let [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}

      <p className={`absolute border bg-gray-400 text-white text-[14px] p-2 rounded-2xl top-[-19px] transition-all ease-in-out duration-300 ${isVisible ? "opacity-100 translate-x-1" : "opacity-0"}`}>
        {text}
      </p>
    </div>
  );
}

export default Tooltip;
