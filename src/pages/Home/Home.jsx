import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import OurApps from "../../components/OurApps";
import Testimonials from "../../components/TestimonialSec/TestimonialSec";

const Home = () => {
  return (
    <div>
      <HeroSection />

      <OurApps />
      <Testimonials/>
    </div>
  );
};

export default Home;
