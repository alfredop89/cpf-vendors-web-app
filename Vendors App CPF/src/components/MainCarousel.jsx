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
import { EffectCards } from "swiper/modules";

export default function App() {
  return (
    <>
      <motion.div className="main-carousel-container"
        initial={{y: 500, opcacity: 0}}
        whileInView={{y: 0, opcacity: 1}}
        transition={{duration: 0.5}}
      
        >
        <Swiper
          effect={"cards"}
          grabCursor={false}
          modules={['coverflow']}
          loop={false}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/photo-bank">Photo Bank</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/technnical-data">Technnical Data</Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/merch">Merch</Link>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </>
  );
}
