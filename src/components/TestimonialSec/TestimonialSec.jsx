import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { SiComma } from "react-icons/si";
import { AiTwotoneLike } from "react-icons/ai";

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
    <div className="mt-8 bg-[#D9DEEF]">
      <h1 className="text-center text-xl sm:text-2xl font-semibold mb-6">Testimonials</h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: false }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 1, spaceBetween: 25 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Single Slide with all content */}
        <SwiperSlide>
          <div className="flex flex-row sm:flex-row items-center w-full justify-center gap-6">
            {/* Left Image */}
            <div className="mt-50 relative flex items-end">
              <img
                src="https://cdn-clibi.nitrocdn.com/OmAxDmvnEDrIbyCCcgEheUGaGtzJEYJA/assets/images/optimized/rev-a00617e/wpstackable.com/wp-content/uploads/2022/03/leilani-angel-K84vnnzxmTQ-unsplash-scaled.jpg"
                alt="Client 1"
                className="w-24 md:w-[250px] md:h-[350px] sm:h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#E683B8] to-transparent"></div>
            </div>

            {/* Testimonial Card */}
            <div className="text-center items-center flex flex-col md:flex-row">
              <img
                src="https://www.uipi.com/wp-content/uploads/2021/06/Testimonial-3.png"
                alt="Client 2"
                className=" w-32 h-60 md:w-[350px] md:h-[550px] bottom-0" 
              />
              <div className="w-[350px] flex flex-col self-center px-4 mt-20">
                <p className="text-sm sm:text-base text-[000000] italic mb-4">
                  "This service was amazing! It completely changed my workflow. Highly recommended."
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aperiam? Sequi vel officia iure
                  molestiae officiis quos harum minus doloribus tempore fugiat. Doloribus dicta saepe ullam
                  explicabo esse in cumque!
                </p>
                <div className="flex flex-col self-center py-6">
                  <span className="text-4xl text-[#000000] font-bold mt-2">Carolyn Willms</span>
                  <p className="text-[#000000]">Global Accountability Officer</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex items-end mt-50">
              <img
                src="https://www.cloudways.com/wp-content/uploads/2020/01/testimonial-edward.png"
                alt="Client 3"
                className=" w-20 md:w-[250px] h-[200px] sm:h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#E683B8] to-transparent"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col sm:flex-row items-center md:justify-center gap-6">
            {/* Left Image */}
            <div className="mt-50 relative flex items-end">
              <img
                src="https://cdn-clibi.nitrocdn.com/OmAxDmvnEDrIbyCCcgEheUGaGtzJEYJA/assets/images/optimized/rev-a00617e/wpstackable.com/wp-content/uploads/2022/03/leilani-angel-K84vnnzxmTQ-unsplash-scaled.jpg"
                alt="Client 1"
                className="w-[250px] h-[350px] sm:h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#E683B8] to-transparent"></div>
            </div>
            <div className="flex items-center gap-0">

</div>

<img src="" alt="" />
            {/* Testimonial Card */}
            <div className="text-center items-center flex flex-row">
              
              <img
                src="https://www.uipi.com/wp-content/uploads/2021/06/Testimonial-3.png"
                alt="Client 2"
                className=" md:w-[350px] md:h-[550px] md:bottom-0"
              />
              <div className="w-[350px] flex flex-col self-center md:px-4 md:mt-20">
              <div className="inline-flex  absolute top-10 right-100">
  <SiComma style={{ transform: "rotate(180deg)" }} className="text-[#C2CBE2] text-[50px] font-bold -mr-1"/>
  <SiComma style={{ transform: "rotate(180deg)" }} className="text-[#C2CBE2] text-[50px] font-bold"/>

<AiTwotoneLike />
  <p>Testimonials</p>
</div>
                <p className="text-3xl sm:text-base text-[000000] bold mb-4">
                  "This service was amazing! It completely changed my workflow. Highly recommended."
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, aperiam? Sequi vel officia iure
                  molestiae officiis quos harum minus doloribus tempore fugiat. Doloribus dicta saepe ullam
                  explicabo esse in cumque!
                </p>
                <div className="flex flex-col self-center md:py-6">
                  <span className="text-4xl text-[#000000] font-bold mt-2">Carolyn Willms</span>
                  <p className="text-[#000000]">Global Accountability Officer</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex items-end mt-50">
              <img
                src="https://www.cloudways.com/wp-content/uploads/2020/01/testimonial-edward.png"
                alt="Client 3"
                className="w-[250px] h-[200px] sm:h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#E683B8] to-transparent"></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Next Button */}
      <div className="flex justify-between mt-4 px-4">
        <button
          ref={prevRef}
          className="px-6 py-2 bg-[#1A3C80] text-white font-bold prevEl rounded hover:bg-[#D86A9A]"
        >
          Prev
        </button>
        <button
          ref={nextRef}
          className="px-6 py-2 bg-[#1A3C80] text-white font-bold rounded hover:bg-[#D86A9A]"
        >
          Next
        </button>
      </div>

 


    </div>


</>
  );
};

export default Testimonials;
