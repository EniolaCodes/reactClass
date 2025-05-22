import React from "react";

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="bg-green-400 flex items-center justify-center px-4 py-8 text-white text-2xl"
    >
      {children}
    </button>
  );
}

export default Button;
