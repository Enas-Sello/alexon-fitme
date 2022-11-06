import React from 'react';
import { menu } from '../data';
const Recommend = () => {
  return (
    <div className="section__padding section__margin flex justify-center items-center gap-5 lg:gap-8">
      {menu.map((item) => (
        <div className="flex flex-col items-center ">
          <img
            src={item.img}
            alt={item.title}
            className="w-20 h-20 md:w-40 md:h-40  object-contain"
          />
          <p className="font-medium text-xs md:text-base mt-2">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Recommend;
