import React from "react";

const Card = () => {
  return (
    <div className="lg:flex lg:mt-14">
      <div className="lg:w-1/2 lg:pt-24 lg:pl-60 lg:block lg:space-x-0 lg:justify-items-end pl-24 pt-5">
        <p className=" text-4xl text-blue-500 font-bold w-[15ch] leading-normal ">
          One card for all your payments
        </p>
        <p className=" text-xl text-gray-400 font-normal w-[35ch] leading-normal lg:mt-5 ">
          Get 3% back on everything you buy with the Draft card. Register today
          and enjoy every aspect of your business.
        </p>
      </div>
      <div className="lg:w-1/2 lg:pt-0 lg:pr-12">
        <img src="/Card.png" className="inline-block"/>
      </div>
    </div>
  );
};

export default Card;
