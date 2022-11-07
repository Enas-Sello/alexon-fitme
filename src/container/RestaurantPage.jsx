import React from 'react';
import Button from '../components/Button';
import Cart from '../components/Cart';
import Restaurant from '../assets/Restaurant.png';
import restaurantpage from '../assets/restaurantpage..png';
import percent from '../assets/persent.png';
import { AiFillStar } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { ImStarEmpty } from 'react-icons/im';
import { Link } from 'react-router-dom';
const RestaurantPage = () => {
  return (
    <div className=" w-full h-full flex flex-col mt-10 ">
      <div className="bg-mainColor h-72  flex  items-center justify-start gap-10 p-10">
        <div>
          <img
            src={Restaurant}
            alt="Restaurant"
            className=" object-cover w-full hidden md:block"
          />
        </div>
        <div className="flex flex-col justify-between item-center gap-10">
          <h4 className="text-white font-semibold text-3xl">
            LunchBox - Meals and Thalis
          </h4>
          <p className="text-white font-normal text-base -my-5 opacity-80">
            North Indian, Punjabi
          </p>
          <div className="flex items-center justify-between w-full">
            <div className="border-none md:border-r-2 pr-6">
              <div className="flex items-center">
                <AiFillStar className="fill-green-500" />
                <p className="text-white">4.0</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-white">100+</p>
                <p className="text-white">ratings</p>
              </div>
            </div>
            <div className="flex-col border-none md:border-r-2 pr-6">
              <p className="text-white">30 mins</p>
              <p className="text-white">Delivery Time</p>
            </div>
            <div className="flex-col">
              <p className="text-white">₹200</p>
              <p className="text-white">Cost for two</p>
            </div>
          </div>
        </div>
        <div className=" hidden lg:block border-2 border-dashed border-secColor w-2/4 h-[184px] p-7 rounded-lg">
          <p className=" font-medium text-2xl text-secColor">offers</p>
          <div className="flex items-center gap-2 my-6">
            <img src={percent} alt="offer" className=" object-contain" />
            <p className="text-white text-base w-full">
              50% off up to ₹100 | Use code TRYNEW
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={percent} alt="offer" className=" object-contain" />
            <p className="text-white text-base w-full">
              50% off up to ₹100 | Use code TRYNEW
            </p>
          </div>
        </div>
      </div>
      {/* Recommended */}
      <div className="text-black relative h-full border-2">
        <div className=" absolute -top-5 left-20 md:left-[32%] ">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex justify-between gap-3  shadow items-center  rounded-lg px-10 py-3 bg-white">
              <input
                type='text'
                placeholder='Search for dish'
                className='font-medium text-xs md:text-base'
              />
              <CiSearch className="font-bold w-5 stroke-slate-500 fill-gray-500 rotate-90" />
            </div>
            <button className="flex gap-1 shadow items-center bg-white px-5 py-2 rounded-lg">
              <ImStarEmpty className="fill-black" />
              Favourite
            </button>
          </div>
        </div>
        <div className=" section__padding section__margin flex flex-col md:flex-row justify-between w-full">
          <div className="border rounded-lg md:border-none mb-2 hidden lg:flex">
            <div className="flex flex-col justify-center items-center ">
              <Link
                to={''}
                className="active:text-secColor text-secColor text-base font-medium mb-2"
              >
                Recommended
              </Link>
              <Link to={''} className=" text-base font-medium mb-2 ">
                Breakfast Box
              </Link>
              <Link to={''} className=" text-base font-medium mb-2 ">
                Lunch Box
              </Link>
              <Link to={''} className=" text-base font-medium mb-2 ">
                Combo Box
              </Link>
              <Link to={''} className=" text-base font-medium mb-2 ">
                Biriyani Box
              </Link>
            </div>
            {/* info */}
            <div className='hidden md:block absolute top-28 left-56 after:content-[""] bg-gray-400 w-[.2px] h-[480px] '></div>
          </div>
          <div className="  border rounded-lg md:border-none mb-2 flex ">
            <div className="flex flex-col md:flex-row md:items-start justify-center md:justify-between gap-5 mx-10">
              <div className="flex-1">
                <h4 className=" font-medium text-xl">
                  Brunch for 2 - Veg (Save upto Rs.45)
                </h4>
                <p className="font-medium text-base">₹599</p>
                <p className="text-base font-normal text-lightGray md:w-3/4">
                  Brunch: One meal to rule them all! Grab this mega saver combo
                  with your choice of 2 veg wraps, Aloo Paratha (2 pcs), chole
                  and Curd lunchbox and 2 choco lava cakes. This is just bliss
                  on a plate!
                </p>
              </div>
              <div className="flex flex-col justify-center items-center p-1">
                <img src={restaurantpage} alt="" />
                <Button
                  class={
                    'text-green-400 shadow-lg p-3  -mt-8 bg-white font-medium text-base'
                  }
                  text={'Add +'}
                />
              </div>
            </div>
          </div>
          <Cart />
        </div>
      </div>
    </div>
  );
};
export default RestaurantPage;
