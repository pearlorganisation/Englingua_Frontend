import React from "react";
import Card from "./Card";

const ImageSection = ({ imageSrc, bgColor, textWidth, text }) => (
  <div className={`w-full relative ${bgColor} h-[400px] rounded-xl`}>
    <img
      src={imageSrc}
      alt=""
      className="w-full h-full rounded-xl object-cover"
    />
    <div
      className={`absolute bottom-2 left-5 ${textWidth} text-black bg-opacity-50 bg-white p-4 text-center`}
    >
      {text}
    </div>
  </div>
);

const OurApps = () => {
  return (
    <>
      <div>
        <h1 className="flex items-center justify-center text-2xl font-semibold mt-8">
          Our Apps
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-[60%_auto] lg:grid-cols-[70%_auto] gap-4 px-12 mt-8">
          <ImageSection
            imageSrc="https://media.istockphoto.com/id/613241758/photo/young-woman-working-on-a-laptop.jpg?s=612x612&w=0&k=20&c=B3WbJ7VFEr77G0T698I0WMkM5LOV-pMrLCljEEJGh-o="
            bgColor="bg-amber-600"
            textWidth="w-[20%]"
            text="Learn More"
          />
          <ImageSection
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLC4IvdHZVin2XWn6v_6_7aD__RMfBjFd-A&s"
            bgColor="bg-cyan-600"
            textWidth="w-[30%]"
            text="Learn More"
          />
        </div>

        <Card />
      </div>

      <div>
        <h1 className="flex items-center justify-center text-2xl font-semibold mt-8">
          Our Apps
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] lg:grid-cols-[30%_70%] gap-10 px-12 mt-8">
          <div className="rounded-xl object-cover bg-[#F5F5F5]">
            <img
              src="https://media.istockphoto.com/id/613241758/photo/young-woman-working-on-a-laptop.jpg?s=612x612&w=0&k=20&c=B3WbJ7VFEr77G0T698I0WMkM5LOV-pMrLCljEEJGh-o="
              className="rounded-t-xl object-cover pb-4 "
            />
            <p className="rounded-b-xl bg-[#F5F5F5] px-2 pb-4 text-start">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              ipsa quam ipsam accusamus expedita aut iusto nihil quibusdam
              laboriosam eligendi, veritatis, doloribus earum neque est minus
              voluptatibus aliquam laudantium? Omnis!
            </p>
          </div>

          <ImageSection
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxLC4IvdHZVin2XWn6v_6_7aD__RMfBjFd-A&s"
            bgColor="bg-cyan-600"
            textWidth="w-[40%]"
          />
      
        </div>
      </div>
      <div className="flex flex-row justify-center gap-10 px-10 py-4">
        <div className="w-[50%] h-[300px] bg-[#FF937D] rounded-md">
          <img src="https://media.istockphoto.com/id/1415007091/photo/businesspeople-making-deal-accomplish-meeting-handshake-feel-satisfied.jpg?s=612x612&w=0&k=20&c=6avrKK9J4Jhj1isAPuB7m-Mnfxl3E8bGZn1hssmMS4I=" alt="" className="w-[300px] h-[300px] absolute right-180 rounded-md" />
        </div>
        <div className="w-[50%] h-[300px] bg-[#32DAC7]  rounded-md px-2 py-2">jbgvjbn</div>
      </div>




      <div className="flex flex-col w-full items-center justify-center bg-[#F1DBE6] h-[300px] gap-4">
        <div>Jadi guru bahasa Inggris</div>
        <div>EF English First membuka lowongan pekerjaan ESL di Indonesia
        dan Tiongkok.</div>
<button className="rounded-full bg-[#ffff] px-3 py-2">Pelajari lebih lanjut</button>

      </div>
    </>
  );
};

export default OurApps;
