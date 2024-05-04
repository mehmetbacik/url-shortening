import React from "react";
import { SwiperView } from "./components/Swiper";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container mx-auto text-center">
        <SwiperView />
      </div>
    </section>
  );
};

export default Hero;
