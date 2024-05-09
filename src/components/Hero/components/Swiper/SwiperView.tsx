import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HeroItem from "../../../../types/heroItem";
import getHeroItems from "../../../../services/heroApi";


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
          <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <img src={item.imagePath} alt={item.title} />
            <button>{item.buttonContent}</button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperView;
