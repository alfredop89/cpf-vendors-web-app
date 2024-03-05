import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import "../scss/Carousel.scss";

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <motion.div
      className="embla"
      initial={{ y: 200, opcacity: 0 }}
      whileInView={{ y: 0, opcacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">

          <Link to="/technnical-data">
            <div className="embla__slide">
              <img src="/src/assets/Mockup.jpg" alt="" style={{height: "300px"}} />
              <h4>Technnical Data</h4>
            </div>
          </Link>

          <Link to="/photo-bank">
            <div className="embla__slide">
              <img src="/src/assets/Mockup1.jpg" alt="" style={{height: "300px"}} />
              <h4>Photo Bank</h4>
            </div>
          </Link>

          <Link to="/merch">
            <div className="embla__slide">
              <img src="/src/assets/D54 - Light Oak 1.jpg" alt="" style={{height: "300px"}} />
              <h4>Merch</h4>
            </div>
          </Link>

        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button className="embla__next" onClick={scrollNext}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </motion.div>
  );
};
export default EmblaCarousel;
