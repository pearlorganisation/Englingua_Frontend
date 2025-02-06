import React from "react";
import Card from "./Card";

const OurApps = () => {
  return (
    <div>
      <h1 className="flex items-center justify-center text-2xl font-semibold mt-8">
        {" "}
        Our Apps{" "}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-[60%_auto] lg:grid-cols-[60%_auto] gap-4 px-12 mt-8">
        <div className="w-full relative bg-amber-600 h-[400px] rounded-xl">
          <div className="absolute bottom-2 left-5 w-[50%] bg-black bg-opacity-50 text-white p-4 text-center">
            Fixed Bottom Text
          </div>
        </div>

        <div className="w-full bg-cyan-600 h-[400px] rounded-xl"></div>
      </div>

      <Card />
    </div>
  );
};

export default OurApps;
