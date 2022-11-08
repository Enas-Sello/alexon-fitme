import React, { useState } from 'react';
import Button from '../components/Button';
import { MdPlace } from 'react-icons/md';
import { AiOutlineCalendar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const CheckOut = () => {
  // counter
  const [counter, setCounter] = useState(1);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
 const decrease = () => {
   if (counter > 1) setCounter((count) => count - 1);
 };
  // counter

  const [active, setActive] = useState(true);

  const handelActiveToggle = () => {
    setActive(!active);
  };

  console.log(active);

  return (
    <div className="w-full h-full section__padding ">
      <h2 className="font-semibold text-2xl w-full border-b-2 pb-2 mb-10">
        Secure Checkout
      </h2>
      <div className="w-full h-full flex flex-col lg:flex-row justify-between ">
        <div className="w-3/4 h-full mb-2">
          {/* adress */}
          <div className="flex flex-col">
            <div className=" font-semibold text-2xl flex items-center gap-2">
              <MdPlace className="fill-secColor w-6 h-8" />
              <h3>Delivery address</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div
                className={
                  active
                    ? 'flex flex-col bg-secColor py-2 px-4 lg:py-4 lg:px-8 rounded-lg'
                    : 'flex flex-col border-2 border-dashed border-secColor py-2 px-4 lg:py-4 lg:px-8 rounded-lg'
                }
                onClick={handelActiveToggle}
              >
                <MdPlace
                  className={
                    active ? 'fill-white w-6 h-8' : ' fill-black w-6 h-8'
                  }
                />
                <p className={active ? 'text-white w-72' : ' text-black w-72'}>
                  Dno. 12-34-12, XYC Apartments, DOOR Colony, Hyderabad,
                  Telangana
                </p>
              </div>
              <div
                className={
                  !active
                    ? 'flex flex-col bg-secColor py-2 px-4 lg:py-4 lg:px-8 rounded-lg'
                    : 'flex flex-col border-2 border-dashed border-secColor py-2 px-4 lg:py-4 lg:px-8 rounded-lg'
                }
                onClick={handelActiveToggle}
              >
                <MdPlace
                  className={
                    !active ? 'fill-white w-6 h-8' : ' fill-black w-6 h-8'
                  }
                />
                <p className={!active ? 'text-white w-72' : ' text-black w-72'}>
                  Dno. 12-34-12, XYC Apartments, DOOR Colony, Hyderabad,
                  Telangana
                </p>
              </div>
            </div>
          </div>
          {/* order */}

          <div className="mt-10 ">
            <div className=" font-semibold text-2xl flex  items-center gap-2 mb-10">
              <MdPlace className="fill-secColor w-6 h-8" />
              <h3>Type of Order</h3>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex items-center bg-secColor py-3 px-6 rounded-lg gap-2">
                <AiOutlineCalendar className="fill-white w-6 h-6" />
                <p className="text-white font-medium ">Subscription</p>
              </div>
              <div className="flex items-center  border-2 border-dashed border-secColor py-3 px-6 rounded-lg gap-2">
                <AiOutlineCalendar className="fill-black w-6 h-6" />
                <p className="text-black font-medium ">Schedule Order</p>
              </div>
              <div className="flex items-center  border-2 border-dashed border-secColor py-3 px-6 rounded-lg gap-2">
                <AiOutlineCalendar className="fill-black w-6 h-6" />
                <p className="text-black font-medium ">Order Now</p>
              </div>
            </div>
          </div>
          {/* subscription */}
          <div className="mt-10 flex flex-col md:flex-row justify-between mr-8">
            <div className="mr-3">
              {' '}
              <div className=" font-semibold text-base mb-10">
                <h3>Type of subscription ?</h3>
              </div>
              <div className="flex flex-col md:flex-row  gap-10 ">
                <h5 className="border-b-2 p-3 border-secColor text-secColor">
                  Monthly
                </h5>
                <h5 className="border-b-2 p-3 border-black">Weekly</h5>
                <h5 className="border-b-2 p-3 border-black">Custom</h5>
              </div>
              {/* deliver */}
              <div className="mt-10">
                <h5>What time do you want us to deliver?</h5>
              </div>
            </div>
            <div>
              {/* plan */}
              <div className="flex flex-col">
                <h5>What’s the plan?</h5>
                <div className="flex gap-8">
                  <Button
                    class={'text-secColor py-3 px-6  border-2 border-secColor'}
                    text={'3-Days/Week'}
                  />
                  <Button
                    class={'text-black py-3 px-6 border-2 border-black'}
                    text={'5-Days/Week'}
                  />
                </div>
              </div>
              {/* form */}
              <div className="mt-10 font-medium">
                <h3>Any Note for us?</h3>
                <input
                  type="text"
                  placeholder="Type you note here"
                  className=" w-80 h-28 p-2 border-2 border-gray-400 rounded-lg mt-8"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 h-full">
          {/* <Cart /> */}
          <div className=" border p-2 rounded-lg md:border-none flex-col h-full w-full font-medium">
            <div className="flex justify-between px-10 items-center mb-5">
              <h5 className=" text-2xl">cart</h5>
              <p className="text-base">2 items</p>
            </div>
            <div className="flex flex-col px-10 gap-5 mb-5">
              <p>
                from <span className=" text-secColor">linch box</span>
              </p>
              <div className="cart__div">
                <div>
                  <h5>Brunch for 2 - Veg</h5>{' '}
                  <p className=" text-lightGray">₹599</p>
                </div>
                <div className="cart__div">
                  <button onClick={decrease}>
                    <AiOutlineMinus />
                  </button>
                  <p className="m-1">{counter}</p>
                  <button onClick={increase}>
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-10 gap-5 mb-5">
              <p>
                from <span className=" text-secColor">linch box</span>
              </p>
              <div className="cart__div">
                <div>
                  <h5>Brunch for 2 - Veg</h5>{' '}
                  <p className=" text-lightGray">₹599</p>
                </div>
                <div className="cart__div">
                  <AiOutlineMinus />
                  <p className="m-1">1</p>
                  <AiOutlinePlus />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 px-10">
              <p className="cart__p">Bill details</p>
              <div className="cart__div ">
                <p className="cart__p">Item Total</p>
                <p className="cart__p">₹799.00</p>
              </div>
              <div className="cart__div ">
                <p className="cart__p w-36">
                  Delivery Fee | 12.9 kms Custom Delivery time
                </p>
                <p className="cart__p">₹131.00</p>
              </div>
              <div className="cart__div ">
                <p className="cart__p">Taxes and Charges</p>
                <p className="cart__p">₹2.0</p>
              </div>
            </div>
            <h4 className="text-center w-full text-sm my-5 px-10">
              Monthly + 3 Days/Week plan + 16:30 Delivery time
            </h4>
            <div className="flex flex-col gap-3">
              <div className="cart__div">
                <p className="cart__p ">Total</p>
                <p className="cart__p ">₹11,400.00</p>
              </div>
              <div className="cart__div">
                <p className="cart__p ">Discount</p>
                <p className="cart__p ">₹4000.00</p>
              </div>
            </div>
            <div className="cart__div text-2xl font-medium my-8">
              <h5>Total</h5>
              <h5>₹7,400.00</h5>
            </div>
            <Link to="/CheckOut">
              <Button
                class={
                  'bg-secColor w-full py-3 mt-5 text-white text-base font-medium'
                }
                text={'Proceed To Payment'}
              />
            </Link>
          </div>
          {/* <Cart /> */}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
