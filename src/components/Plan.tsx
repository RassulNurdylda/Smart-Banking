import React from "react";

const Plan = () => {
  return (
    <div className="lg:mt-14 ">
      <div className="lg:flex lg:items-center lg:justify-center">
        <div className="text-center ">
          <p className="text-2xl lg:text-4xl text-blue-500 font-bold leading-normal pt-5">
            An exceptional service, at the right price.
          </p>
          <p className="text-base lg:text-xl text-gray-700 font-normal leading-normal lg:mt-2 pt-5">
            Start with our free plan and switch to premium as you grow
          </p>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:place-items-center lg:p-28">
        <div className="border border-gray-300 rounded-3xl lg:w-[430px] text-center">
          <p className="capitalize lg:pt-12 text-xl lg:text-3xl pt-5">FREE</p>
          <p className="lg:pt-8 text-2xl lg:text-4xl pt-3">$0/m</p>
          <p className="lg:pt-8 text-base lg:text-xl text-gray-700 pt-3">
            Manage your business with a simple and efficient account
          </p>
          <div className="lg:pt-8 pt-3">
            <button
              type="button"
              className="text-dark bg-blue-100 font-normal rounded-2xl text-base lg:text-lg px-16 py-2 text-center mr-3 md:mr-0 "
            >
              Get Started
            </button>
          </div>

          <img src="/Card.png" className="lg:pt-5" />
          <ul className="text-left lg:pb-10 pl-14">
            <li className="text-base lg:text-lg pt-1">
              10 free local transfer
            </li>
            <li className="text-base lg:text-lg pt-1">
              10 free local transfer
            </li>
            <li className="text-base lg:text-lg pt-1">Multi-user access</li>
            <li className="text-base lg:text-lg pt-1">Prepaid debit cards</li>
            <li className="text-base lg:text-lg pt-1">Virtual cards</li>
            <li className="text-base lg:text-lg pt-1 text-gray-400">
              Priority 24/7 support
            </li>
            <li className="text-lg pt-1 text-gray-400">
              Exchange 24 currencies
            </li>
            <li className="text-lg pt-1 text-gray-400">
              Free payment to other Draft accounts
            </li>
          </ul>
        </div>
        <div className="border border-gray-300 rounded-3xl lg:w-[430px] text-center">
          <p className="capitalize lg:pt-12 text-xl lg:text-3xl pt-5">PREMIUM</p>
          <p className="lg:pt-8 text-2xl lg:text-4xl pt-3">$8/m</p>
          <p className="lg:pt-8 text-base lg:text-xl text-gray-700 pt-3">
            Priority support and multi-user access to maximize your
            productivity.
          </p>
          <div className="lg:pt-8 pt-3">
            <button
              type="button"
              className="text-dark bg-blue-100 font-normal rounded-2xl text-base lg:text-lg px-16 py-2 text-center mr-3 md:mr-0 "
            >
              Get Started
            </button>
          </div>

          <img src="/Card.png" className="lg:pt-5" />
          <ul className="text-left lg:pb-10 pl-14">
            <li className="text-base lg:text-lg pt-1">
              10 free local transfer
            </li>
            <li className="text-base lg:text-lg pt-1">
              10 free local transfer
            </li>
            <li className="text-base lg:text-lg pt-1">Multi-user access</li>
            <li className="text-base lg:text-lg pt-1">Prepaid debit cards</li>
            <li className="text-base lg:text-lg pt-1">Virtual cards</li>
            <li className="text-base lg:text-lg pt-1 text-blue-900">
              Priority 24/7 support
            </li>
            <li className="text-base lg:text-lg pt-1 text-blue-900">
              Exchange 24 currencies
            </li>
            <li className="text-base lg:text-lg pt-1 text-blue-900">
              Free payment to other Draft accounts
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Plan;
