import React from 'react';

const Button = ( prop  ) =>
{
  console.log(prop)
  return (
    <button
      className={prop.class}
    >
    {prop.text}
    </button>
  );
};

export default Button;
