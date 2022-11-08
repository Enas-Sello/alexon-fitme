import React from 'react';
import Rate from './Rate';
import { Link } from 'react-router-dom';

const FoodCard = ({ data }) => {
  console.log(data);
  return (
    <div className="flex sm:flex-col lg:flex-row flex-wrap gap-12 ">
      {data?.map((item, i) => (
        <div
          key={i}
          className="flex flex-col p-2 md:p-3 rounded-lg bg-lightGray hover:bg-gray-200 transition-all ease-in-out"
        >
          <img
            src={item.img}
            alt={item.title}
            className=" w-full h-60 rounded-lg object-contain md:m-9 lg:m-0 "
          />
          <h3 className="font-medium text-lg md:text-xl w-[180px] h-[60px] md:w-60 mt-5 ">
            {item.title}
          </h3>
          <div className="mt-5">
            <div className="flex justify-between items-center my-2 md:my-5">
              <p className="text-gray-400 text-base w-36 md:w-64 lg:w-full">
                {item.place}
              </p>
              {/*  */}
              {item?.rate?.map((rate) => (
                <Rate rate={rate} />
              ))}
            </div>
            <div className="flex justify-between items-center ">
              <div className="flex items-center gap-1">
                {/*  */}
                {item.distance.map((x) => (
                  <>
                    <x.icon className="w-5 h-5 opacity-75 fill-secColor" />
                    <p className="text-xs md:text-base font-medium">{x.time}</p>
                  </>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {/*  */}
                {item?.amount ? (
                  item?.amount?.map((x) => (
                    <>
                      <x.icon className="w-5 h-5 opacity-75 fill-secColor" />
                      <p className="text-xs md:text-base font-medium">
                        <Link to="RestaurantPage">{x.people}</Link>
                      </p>
                    </>
                  ))
                ) : (
                  <>
                    {/*  */}
                    {item?.price?.map((x) => (
                      <>
                        <x.icon className="w-5 h-5 opacity-75 fill-secColor stroke-secColor" />
                        <p className=" text-xs md:text-base font-medium">
                          {x.cash}
                        </p>
                      </>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
