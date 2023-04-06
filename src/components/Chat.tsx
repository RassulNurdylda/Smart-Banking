import React from "react";

const Chat = () => {
  return (
    <div className="lg:flex lg:mt-14 mt-12">
      <div className="lg:w-1/2 lg:pt-24 lg:pl-60 lg:block lg:space-x-0 lg:justify-items-end pl-16">
        <p className=" text-4xl text-blue-500 font-bold w-[15ch] leading-normal ">
          We support you in 5 different languages
        </p>
        <p className=" text-xl text-gray-400 font-normal w-[35ch] leading-normal lg:mt-5 mt-5">
          Our support team in here to help you in 5 languages - English, French,
          Spanish,Polish and German.
        </p>
        <img src="/Profile.png" className="lg:mt-5 mt-5 pl-16"/>
      </div>
      <div className="lg:w-1/2 lg:pt-20 lg:pr-12 pt-12">
        <img src="/Chat.png" className="inline-block" />
      </div>
    </div>
  );
};

export default Chat;
