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
    <motion.div className="embla"
    initial={{y:200, opcacity: 0}}
    whileInView={{y: 0, opcacity: 1}}
    transition={{duration: 0.5}}
    >
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <Link>
            <div className="embla__slide">
              <img src="src/assets/DECO54.png" alt="" />
            </div>
          </Link>
          <Link>
            <div className="embla__slide">
              <img src="src/assets/DECOTILE-1.png" alt="" />
            </div>
          </Link>
          <Link>
            <div className="embla__slide">
              <img src="src/assets/HYDROWOOD-1.png" alt="" />
            </div>
          </Link>
          <Link>
            <div className="embla__slide">
              <img src="src/assets/KEYS.png" alt="" />
            </div>
          </Link>
          <Link>
            <div className="embla__slide">
              <img src="src/assets/PROJECT.png" alt="" />
            </div>
          </Link>
          <Link>
            <div className="embla__slide">
              <img src="src/assets/QUICK48-1.png" alt="" />
            </div>
          </Link>
          <Link>
            <div className="embla__slide">
              <img src="src/assets/SPIRIT-XL-jpg.webp" alt="" />
            </div>
          </Link>
        </div>
      </div>

      <div className="buttons">
        <button className="embla__prev" onClick={scrollPrev}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="embla__next" onClick={scrollNext}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </motion.div>
  );
};
export default EmblaCarousel;


