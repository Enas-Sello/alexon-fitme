import React from 'react';
import { TbArrowsCross } from 'react-icons/tb';
import Button from './Button';
import Input from './Input';
const Search = () => {
  return (
    <div className="w-full h-52 bg-secColor section__margin p-1">
      <div className="w-full py-20 flex items-center justify-center gap-3 ">
        <p className="text-white md:font-semibold text-sm md:text-xl sm:max-w-min">
          Search by Restaurant
        </p>
        <TbArrowsCross className="fill-white text-white w-5 h-5" />
        <input
          type="text"
          placeholder="Enter item or restaurant you are looking for"
          className="
          lg:w-[774px] bg-transparent placeholder:text-white placeholder:opacity-50 px-4 py-2 border border-white rounded-lg placeholder:text-sm"
        />
        {/* <Input
          placeholder={'Enter item or restaurant you are looking for'}
          type={'text'}
          w={'774px'}
          font={'medium'}
          xsSize={'xs'}
          mdSize={'base'}
        /> */}
        <Button
          bgColor={'mainColor'}
          color={'white'}
          mdpx={'4'}
          p={'2'}
          text={'Search Now'}
          size={'sm'}
        />

        {/* <button className="bg-mainColor text-white rounded-lg px-4 py-3 font-semibold text-sm">
          Search Now
        </button> */}
      </div>
    </div>
  );
};

export default Search;
