import React from 'react';
import { TbArrowsCross } from 'react-icons/tb';
const Search = () => {
  return (
    <div className="w-full h-52 bg-secColor">
      <div className="w-full py-16 flex items-center justify-center ">
        <p className="text-white">Search by Restaurant</p>
        <TbArrowsCross className="fill-white" />
        <input
          type="text"
          placeholder="Enter item or restaurant you are looking for"
          className=""
        />
        <button>Search Now</button>
      </div>
    </div>
  );
};

export default Search;
