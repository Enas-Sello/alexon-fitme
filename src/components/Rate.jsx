import React from 'react';

const Rate = ({ rate }) => {
  return (
    <div className="flex items-center justify-center gap-1 ">
      <rate.icon
        className={`w-4 h-4 opacity-75
          ${rate.number >= 4 ? 'fill-green-500' : 'fill-secColor'}`}
      />
      <p className="text-sm md:text-base font-medium">{rate.number}</p>
    </div>
  );
};

export default Rate;
