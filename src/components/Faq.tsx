import React from "react";

const Faq = () => {
  return (
    <div className="lg:flex items-center justify-center flex-col">
      <div className="text-center md:pt-10">
        <p className="text-4xl text-blue-500 font-bold leading-normal">
          Frequently asked questions
        </p>
        <p className="text-xl text-gray-400 font-normal w-[47ch] leading-normal lg:mt-5 ">
          If you are not sure whether Draft is suitable is for you or not, do
          not worry. We are here to explain everything you might want to know
        </p>
      </div>
      <div className="w-full sm:w-10/12 md:w-1/2 my-1 p-10">
        <ul className="flex flex-col">
          <li className="bg-white my-2 shadow-lg" x-data="accordion(1)">
            <h2 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer">
              <span>
                What is the difference between Draft and a traditional bank
                account?
              </span>
              <svg
                className="fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500"
                viewBox="0 0 20 20"
              >
                <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10" />
              </svg>
            </h2>
            <div
              x-ref="tab"
              className="border-l-2 border-purple-600 overflow-hidden max-h-0 duration-500 transition-all"
            >
              <p className="p-3 text-gray-900">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis accusamus, laborum quia magnam quo ab porro expedita
                dicta nemo atque necessitatibus fugiat, hic dolore voluptatibus
                impedit. Reprehenderit asperiores numquam obcaecati!
              </p>
            </div>
          </li>
          <li className="bg-white my-2 shadow-lg" x-data="accordion(1)">
            <h2 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer">
              <span>Who can open a Draft account?</span>
              <svg
                className="fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500"
                viewBox="0 0 20 20"
              >
                <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10" />
              </svg>
            </h2>
            <div
              x-ref="tab"
              className="border-l-2 border-purple-600 overflow-hidden max-h-0 duration-500 transition-all"
            >
              <p className="p-3 text-gray-900">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis accusamus, laborum quia magnam quo ab porro expedita
                dicta nemo atque necessitatibus fugiat, hic dolore voluptatibus
                impedit. Reprehenderit asperiores numquam obcaecati!
              </p>
            </div>
          </li>
          <li className="bg-white my-2 shadow-lg" x-data="accordion(1)">
            <h2 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer">
              <span>What if I withdraw money abroad?</span>
              <svg
                className="fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500"
                viewBox="0 0 20 20"
              >
                <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10" />
              </svg>
            </h2>
            <div
              x-ref="tab"
              className="border-l-2 border-purple-600 overflow-hidden max-h-0 duration-500 transition-all"
            >
              <p className="p-3 text-gray-900">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis accusamus, laborum quia magnam quo ab porro expedita
                dicta nemo atque necessitatibus fugiat, hic dolore voluptatibus
                impedit. Reprehenderit asperiores numquam obcaecati!
              </p>
            </div>
          </li>
          <li className="bg-white my-2 shadow-lg" x-data="accordion(1)">
            <h2 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer">
              <span>
                Can I cancel my subscrption or switch to another plan anytime?
              </span>
              <svg
                className="fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500"
                viewBox="0 0 20 20"
              >
                <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10" />
              </svg>
            </h2>
            <div
              x-ref="tab"
              className="border-l-2 border-purple-600 overflow-hidden max-h-0 duration-500 transition-all"
            >
              <p className="p-3 text-gray-900">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis accusamus, laborum quia magnam quo ab porro expedita
                dicta nemo atque necessitatibus fugiat, hic dolore voluptatibus
                impedit. Reprehenderit asperiores numquam obcaecati!
              </p>
            </div>
          </li>
          <li className="bg-white my-2 shadow-lg" x-data="accordion(1)">
            <h2 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer">
              <span>What happens if I withdraw more than $250?</span>
              <svg
                className="fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500"
                viewBox="0 0 20 20"
              >
                <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10" />
              </svg>
            </h2>
            <div
              x-ref="tab"
              className="border-l-2 border-purple-600 overflow-hidden max-h-0 duration-500 transition-all"
            >
              <p className="p-3 text-gray-900">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis accusamus, laborum quia magnam quo ab porro expedita
                dicta nemo atque necessitatibus fugiat, hic dolore voluptatibus
                impedit. Reprehenderit asperiores numquam obcaecati!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Faq;
