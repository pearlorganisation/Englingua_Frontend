import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="mt-8">
        <h1 className="text-3xl font-bold text-center">Unlock Your English</h1>
        <h1 className="text-3xl font-bold text-center mt-4">Potential</h1>

        <h1 className="text-base font-semibold text-center mt-4">
          Explore High Quality English Courses and Resources
        </h1>

        {/* <input
          type="text"
          placeholder="Enter your Email"
          className="mt-4 bg-gradient-to-r from-[#FFB75E] to-[#ec0db5] border-2"
        /> */}

        {/* <div className="relative mt-4 w-[20%] mx-auto">
          <input
            type="text"
            placeholder="Enter your Email"
            className="relative z-10 w-1/2 p-2 border border-transparent bg-white rounded-md outline-none focus:ring-2 focus:ring-offset-2"
          />
          <div className=" absolute inset-0 rounded-md p-[1px] bg-gradient-to-r from-[#FFB75E] to-[#ec0db5]">
            <div className="h-full w-full bg-white rounded-md"></div>
          </div>
        </div> */}

        <div className="relative mt-6 w-[25%] mx-auto">
          <div className="absolute inset-0 rounded-md p-[1px] bg-gradient-to-r from-[#FFB75E] to-[#ec0db5] z-0">
            <div className="h-full w-full bg-white rounded-md"></div>
          </div>
          <input
            type="text"
            placeholder="Enter your Email"
            className="relative w-full h-8 p-2 border border-orange-400 bg-white rounded-sm outline-none text-gray-500 z-10"
          />
        </div>

        <div className="flex flex-row justify-center mt-4 items-center">
          <button className="px-16 py-2 bg-gray-300 rounded-md font-bold shadow-[50px_24px_42px_10px_#d8d8d8]">
            {" "}
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
