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

        <div className="grid mt-2 w-full place-items-center">
          <div className="grid w-2xl place-items-center rounded-md bg-gradient-to-bl from-[#e7e6d5] via-[#f0b418] to-[#da6687] p-[2px]">
            <input
              type="text"
              placeholder="Enter your Email"
              className="flex h-full w-full items-center justify-center rounded-md bg-white p-3 focus:outline-0"
            />
          </div>
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
