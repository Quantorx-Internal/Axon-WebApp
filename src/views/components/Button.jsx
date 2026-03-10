import React from 'react';

function Button({ text, variant = "primary", className = "", onClick }) {
  const baseClasses = "flex items-center justify-center font-roboto font-[600] rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer ";

  const variants = {
    primary: "bg-[#026FE3] text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:shadow-blue-500/50 hover:scale-105",
    white: "bg-white text-[#026FE3] shadow-lg hover:shadow-xl hover:scale-105",
    whiteFlat: "bg-white text-[#026FE3] hover:bg-gray-100",
    transparent: "bg-transparent border-solid border-[1.5px] border-sky-500 text-[#036FE2] hover:bg-gray-100 hover:scale-105"
  };

  const combinedClasses = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

  return (
    <button className={combinedClasses} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;