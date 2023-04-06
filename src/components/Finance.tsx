import React from "react";

const Finance = () => {
  return (
    <div className="lg:flex lg:mt-14">
      <div className="lg:w-1/2 lg:pt-0 lg:pl-48">
        <img src="/Cards.png" className="inline-block" />
      </div>
      <div className="lg:w-1/2 lg:pt-16 lg:pl-20 lg:block lg:space-x-0 lg:justify-items-end pl-16">
        <p className=" text-4xl text-blue-500 font-bold w-[12ch] leading-normal ">
          Manage your finances like a pro in no time
        </p>
        <p className=" text-xl text-gray-400 font-normal w-[35ch] leading-normal lg:mt-5 ">
          With Draft, book keeping, banking, and invoices are all in one place.
          You will always know where you stand.
        </p>
        <div className="flex md:order-2 pt-8">
          <button
            type="button"
            className="text-white bg-dark font-normal rounded-2xl text-lg px-16 py-2 text-center mr-3 md:mr-0 "
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Finance;
