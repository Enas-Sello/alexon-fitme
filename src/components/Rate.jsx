import React from 'react';

const Rate = ({ rate }) => {
  return (
    <div className="flex items-center justify-center gap-1 ">
      <rate.icon
        className={`w-5 h-5 opacity-75
          ${rate.number >= 4 ? 'fill-green-500' : 'fill-secColor'}`}
      />
      <p className=" text-base font-medium">{rate.number}</p>
    </div>
  );
};

export default Rate;
