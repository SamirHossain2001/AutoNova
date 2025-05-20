import React, { use } from "react";
import CarCard from "./CarCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const promise = fetch("/listing.json").then((res) => res.json());

const MostSearched = () => {
  const allCars = use(promise);
  const topCars = allCars.slice(0, 8);

  return (
    <div className="container mx-auto my-20 px-20">
      <h1 className="font-bold text-4xl mb-10">Most Searched Cars</h1>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}>
        {topCars.map((car) => (
          <SwiperSlide key={car.id}>
            <CarCard car={car} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MostSearched;
