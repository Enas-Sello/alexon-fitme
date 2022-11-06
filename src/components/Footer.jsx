import React from 'react';
import logowhite from '../assets/logowhite.png';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className=" section__padding bg-secondaryColor h-64 flex flex-col items-center justify-center">
      <div className="flex  w-full justify-between items-center">
        <div>
          <img src={logowhite} alt="logo" className="w-full object-cover " />
        </div>
        <div className="flex gap-14  font-medium text-base">
          <p className="text-white">About us</p>
          <p className="text-white">Delivery</p>
          <p className="text-white">Help & Support</p>
          <p className="text-white">T&C</p>
        </div>
        <div>
          <p className="font-medium text-base text-white">
            Contact: +91 1234567899
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 mt-5">
        <Link to="" className="cursor-pointer">
          <FiFacebook className="  stroke-white w-6 h-6 " />
        </Link>
        <Link to="" className="cursor-pointer">
          <FiTwitter className="  stroke-white w-6 h-6 " />
        </Link>
        <Link to="" className="cursor-pointer">
          <FiInstagram className="  stroke-white w-6 h-6 " />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
