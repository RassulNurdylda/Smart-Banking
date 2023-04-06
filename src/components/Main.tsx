import React from "react";

const Main = () => {
  return (
    <div className="bg-slate-400">
      <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </div>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-accent font-medium rounded-xl text-sm px-10 py-2.5 text-center mr-3 md:mr-0 "
            >
              Sign Up
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-transparent dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Feature
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="p-10 lg:flex ">
        <div className="text-white lg:pl-56 lg:pt-14 w-full lg:w-1/2">
          <h5 className="text-6xl font-bold w-[14ch] leading-relaxed">
            Smart Banking for freelancers
          </h5>
          <p className="text-xl font-normal w-[37ch] pt-8">
            Draft is a revolutionary mobile app built to help you manage your
            business easily and save your money.
          </p>
          <div className="flex md:order-2 pt-8">
            <button
              type="button"
              className="text-white bg-dark font-normal rounded-2xl text-lg px-20 py-4 text-center mr-3 md:mr-0 "
            >
              Register Now
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pr-32 pr-10">
          <img src="/Phone.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
