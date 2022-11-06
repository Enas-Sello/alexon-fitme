import React from 'react';

const Input = ({ placeholder, type, w, font, xsSize, mdSize }) => {
  return (
    <input
      className={`lg:w-${w} font-${font} text-${xsSize} md:text-${mdSize}`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
