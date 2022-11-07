import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Cart = () => {
  return (
    <div className=" border p-2 rounded-lg md:border-none flex-2 w-full font-medium">
      <div className="flex justify-between px-10 items-center mb-5">
        <h5 className=" text-2xl">cart</h5>
        <p className="text-base">2 items</p>
      </div>
      <div className="flex flex-col px-10 gap-5 mb-5">
        <p>
          from <span className=" text-secColor">linch box</span>
        </p>
        <div className="flex justify-between items-center">
          <div>
            <h5>Brunch for 2 - Veg</h5> <p className=" text-lightGray">₹599</p>
          </div>
          <div>icon 1 icon</div>
        </div>
      </div>
      <div className="flex flex-col px-10 gap-5 mb-5">
        <p>
          from <span className=" text-secColor">linch box</span>
        </p>
        <div className="flex justify-between items-center">
          <div>
            <h5>Brunch for 2 - Veg</h5> <p className=" text-lightGray">₹599</p>
          </div>
          <div>icon 1 icon</div>
        </div>
      </div>
      <div className="flex justify-between items-center text-2xl px-10">
        <p>Subtotal</p>
        <p>₹799</p>
      </div>
      <p className="text-sm font-normal text-lightGray px-10">
        Extra charges may apply
      </p>
      <Link to="/CheckOut">
        <Button
          class={'bg-secColor w-full py-3 mt-5 text-white text-2xl'}
          text={'Checkout'}
        />
      </Link>
    </div>
  );
};

export default Cart;
