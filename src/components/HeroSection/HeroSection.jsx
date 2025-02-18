import React from "react";

const HeroSection = () => {
  return (
    <div className="px-4 py-10 mx-auto max-w-7xl">
      <div className="mt-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">Unlock Your English</h1>
        <h1 className="text-3xl sm:text-4xl font-bold mt-4">Potential</h1>
        <h1 className="text-base sm:text-lg font-semibold mt-4">
          Explore High Quality English Courses and Resources
        </h1>

        <div className="grid mt-4 w-full place-items-center">
          <div className="w-full max-w-lg place-items-center rounded-md bg-gradient-to-bl from-[#e7e6d5] via-[#f0b418] to-[#da6687] p-[2px]">
            <input
              type="text"
              placeholder="Enter your Email"
              className="w-full rounded-md bg-white p-3 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button className="px-8 sm:px-16 py-2 bg-gray-300 rounded-md font-bold shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;