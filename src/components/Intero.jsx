import React from 'react';
import shape from '../assets/Union.png';
import apple from '../assets/apple.png';
import banana from '../assets/bananna.png';
import Slide from './Slide';
const Intero = () => {
  return (
    <div className="relative section__padding w-full h-full">
      <div className="hidden lg:block absolute top-40 -left-64">
        <img src={shape} alt="" />
      </div>
      <div className="flex flex-col lg:flex-row ml-20 justify-between w-full">
        <div className="flex-1 mr-10">
          <div className="flex flex-col justify-center lg:leading-snug	 font-medium text-3xl lg:text-6xl">
            <h5 className="">
              Premium <span className="text-secColor">quality </span>
            </h5>
            <div className="flex items-center gap-1 lg:gap-4">
              <h5>Food for your</h5>
              <div className="hidden md:block bg-yellow-100 py-1 px-4 lg:py-4 lg:px-8 rounded-full">
                <img
                  src={banana}
                  alt="banana"
                  className=" object-contain animationY md:w-5 md:h-5 "
                />
              </div>
            </div>
            <h5 className="text-secColor"> healthy </h5>
            <div className="flex items-center  gap-1 lg:gap-4">
              <div className="hidden md:block  bg-red-100 py-1 px-4 lg:py-4 lg:px-8 rounded-full ">
                <img
                  src={apple}
                  alt=""
                  className=" object-contain animationX md:w-5 md:h-5"
                />
              </div>
              <h5 className="text-secColor"> & Daily Life </h5>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-base font-normal text-lightGray lg:w-[700px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-5 my-5">
              <input
                type="text"
                placeholder="Enter your delivery location"
                className="border-2  py-3 px-5 rounded-lg w-full md:w-1/2"
              />
              <button className="bg-mainColor py-3 px-5 rounded-lg text-white">
                Get Started
              </button>
            </div>
            <div className="flex flex-col gap-5 md:gap-10">
              <h4 className="font-medium">Popular cities in India</h4>
              <div>
                <ul className="flex flex-col md:flex-row  md:items-center gap-1 md:gap-5">
                  <li>Hyderabad</li>
                  <li>Chennai</li>
                  <li>Mumbai</li>
                  <li>Bangalore</li>
                  <li>Delhi</li>
                  <li>Kolkata</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Slide />
      </div>
    </div>
  );
};

export default Intero;
