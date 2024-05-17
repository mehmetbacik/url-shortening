import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HeroItem from "../../../../types/heroItem";
import getHeroItems from "../../../../services/heroService";

const SwiperView: React.FC = () => {
  const [heroItems, setHeroItems] = useState<HeroItem[]>([]);

  useEffect(() => {
    const fetchHeroItems = async () => {
      try {
        const items = await getHeroItems();
        setHeroItems(items);
      } catch (error) {
        console.error("Error fetching hero items:", error);
      }
    };

    fetchHeroItems();
  }, []);

  return (
    <Swiper className="mySwiper">
      {heroItems.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center justify-between gap-8">
            <div className="flex flex-col gap-4 items-start slide-content w-1/2">
              <span>{item.title}</span>
              <p>{item.description}</p>
              <button className="px-6 py-3">{item.buttonContent}</button>
            </div>
            <div className="w-1/2">
              <img src={item.imagePath} alt={item.title} />
              </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperView;
