import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "../scss/MainCarousel.scss";

// import required modules
import { EffectCoverflow } from "swiper/modules";

export default function App() {
  return (
    <>
      <motion.div
        className="main-carousel-container"
        initial={{ y: 500, opcacity: 0 }}
        whileInView={{ y: 0, opcacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Swiper
        className = "MySwiper"
          effect={"coverflow"}
          grabCursor={false}
          modules={[EffectCoverflow]}
          loop={false}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            940: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
            340: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            }
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/photo-bank">
              <img src="/src/assets/Mockup1.jpg" alt="" />
              <span>Photo Bank</span>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/technnical-data">
              <img src="/src/assets/Mockup.jpg" alt="" />
              <span>Technnical Data</span>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/merch">
              <img src="/src/assets/D54 - Light Oak 1.jpg" alt="" />
              <span>Merch</span>
            </Link>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </>
  );
}
