import React from 'react';
import Cart from '../components/Cart';
import { MdPlace } from 'react-icons/md';
import { AiOutlineCalendar } from 'react-icons/ai';
import Button from '../components/Button';
const CheckOut = () => {
  return (
    <div className="w-full h-full section__padding ">
      <h2 className="font-semibold text-2xl w-full border-b-2 pb-2 mb-10">
        Secure Checkout
      </h2>
      <div className="w-full h-full flex flex-col lg:flex-row justify-between ">
        <div className="flex-1 mb-2">
          {/* adress */}
          <div className="flex flex-col">
            <div className=" font-semibold text-2xl flex items-center gap-2">
              <MdPlace className="fill-secColor w-6 h-8" />
              <h3>Delivery address</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col bg-secColor py-2 px-4 lg:py-4 lg:px-8 rounded-lg">
                <MdPlace className="fill-white w-6 h-8" />
                <p className="text-white w-72">
                  Dno. 12-34-12, XYC Apartments, DOOR Colony, Hyderabad,
                  Telangana
                </p>
              </div>
              <div className="flex flex-col border-2 border-dashed border-secColor py-2 px-4 lg:py-4 lg:px-8 rounded-lg">
                <MdPlace className="fill-black w-6 h-8" />
                <p className="text-black w-72">
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
            <div className='mr-3'>
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
                    class={
                      'text-secColor py-3 px-6 rounded-lg border-2 border-secColor'
                    }
                    text={'3-Days/Week'}
                  />
                  <Button
                    class={
                      'text-black py-3 px-6 rounded-lg border-2 border-black'
                    }
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
        <div className="">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
