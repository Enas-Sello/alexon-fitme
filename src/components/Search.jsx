import React from 'react';
import { TbArrowsCross } from 'react-icons/tb';
const Search = () => {
  return (
    <div className="w-full h-52 bg-secColor">
      <div className="w-full py-20 flex items-center justify-center gap-3 ">
        <p className="text-white font-semibold sm:text-lg lg:text-2xl">
          Search by Restaurant
        </p>
        <TbArrowsCross
          className="fill-white text-white 
        "
        />
        <input
          type="text"
          placeholder="Enter item or restaurant you are looking for"
          className="
          lg:w-[774px] bg-transparent placeholder:text-white placeholder:opacity-75 px-4 py-2 border border-white rounded-xl placeholder:text-sm"
        />
        <button className="bg-mainColor text-white rounded-xl px-4 py-3 font-semibold text-sm">
          Search Now
        </button>
      </div>
    </div>
  );
};

export default Search;
