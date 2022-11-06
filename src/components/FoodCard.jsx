import React from 'react';
import Rate from './Rate';

const FoodCard = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-wrap gap-10">
      {data?.map((item, i) => (
        <div key={i} className=" p-3">
          <img
            src={item.img}
            alt={item.title}
            className="w-60 h-60 rounded-xl"
          />
          <h3 className="font-medium text-lg md:text-xl w-[180px] h-[60px] md:w-60 mt-5">
            {item.title}
          </h3>
          <div className="mt-5">
            <div className="flex justify-between items-center my-4">
              <p className="text-gray-400 text-base">{item.place}</p>
              {item?.rate?.map((rate) => (
                <Rate rate={rate} />
              ))}
            </div>
            <div className="flex justify-between items-center ">
              <div className="flex items-center gap-1">
                {item.distance.map((x) => (
                  <>
                    <x.icon className="w-5 h-5 opacity-75 fill-secColor" />
                    <p className=" text-base font-medium">{x.time}</p>
                  </>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {item?.amount ? (
                  item?.amount?.map((x) => (
                    <>
                      <x.icon className="w-5 h-5 opacity-75 fill-secColor" />
                      <p className=" text-base font-medium">{x.people}</p>
                    </>
                  ))
                ) : (
                  <>
                    {item?.price?.map((x) => (
                      <>
                        <x.icon className="w-5 h-5 opacity-75 fill-secColor stroke-secColor" />
                        <p className=" text-base font-medium">{x.cash}</p>
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
