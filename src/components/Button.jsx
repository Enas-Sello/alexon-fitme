import React from 'react';

const Button = ({ bgColor, color, p, mdpx, text,px,py }) => {
  return (
    <button
      className={` bg-${bgColor} rounded-lg text-${color} px-${px} py-${py} capitalize`}
    >
      {text}
    </button>
  );
};

export default Button;
