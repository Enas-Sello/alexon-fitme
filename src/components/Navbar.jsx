import React from 'react';
import logo from '../assets/logo.png';
import Button from './Button';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { BiShoppingBag } from 'react-icons/bi';
const Navbar = () => {
  return (
    <div className="section__padding flex gap-1 justify-between items-center w-full h-16 ">
      <div>
        <Link className="flex items-center md:gap-2" to="/">
          <img src={logo} alt="logo" className="w-5 h-5 object-contain " />
          <p className="font-bold text-xl md:text-2xl">FitMe</p>
        </Link>
      </div>
      <div className=" flex justify-between gap-2 items-center">
        <div className="flex justify-between gap-3 items-center border border-gray-300 rounded-lg px-4 py-1">
          <input
            className="lg:w-[450px] font-medium text-xs md:text-base hidden md:block"
            type="text"
            placeholder="Enter item or restaurant you are looking for"
          />
          <CiSearch className="font-bold text-3xl text-gray-400 rotate-90" />
        </div>
        <Link to="CheckOut">
          <BiShoppingBag className="font-bold text-3xl hover:fill-secColor transition-all ease-in-out" />
        </Link>
        <Button
          class={
            ' bg-mainColor  text-white md:px-4 px-2 py-2 capitalize  hover:bg-secColor transition-all ease-in-out'
          }
          text={'Sigin in'}
        />
      </div>
    </div>
  );
};

export default Navbar;
