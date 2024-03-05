import React, { useCallback } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "framer-motion";
import "../scss/Carousel.scss";

const RoomSceneDeco54 = () => {
  //MODAL CAROUSEL

  const [openModal, SetOpenModal] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <motion.div
        className="embla"
        initial={{ y: 200, opcacity: 0 }}
        whileInView={{ y: 0, opcacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container" style={{ cursor: "zoom-in" }}>
            <div className="embla__slide">
              <img
                src="/src/assets/Room Scenes/Deco54/Light-Deco-Room-scene-1-1200x1200-1.webp"
                alt=""
                onClick={() => SetOpenModal(!openModal)}
              />
            </div>

            <div className="embla__slide">
              <img
                src="/src/assets/Room Scenes/Deco54/Metal-gray-room-scene-1200x1200-1.webp"
                alt=""
              />
            </div>

            <div className="embla__slide">
              <img
                src="/src/assets/Room Scenes/Deco54/Mimo-oak-room-scene-1200x1200-1.webp"
                alt=""
              />
            </div>

            <div className="embla__slide">
              <img
                src="/src/assets/Room Scenes/Deco54/Natural-deco-room-scene-1200x1200-1.webp"
                alt=""
              />
            </div>

            <div className="embla__slide">
              <img
                src="/src/assets/Room Scenes/Deco54/Room-Scene-1200x1200-1.webp"
                alt=""
              />
            </div>

            <div className="embla__slide">
              <img
                src="/src/assets/Room Scenes/Deco54/Sak-White-room-scene-1200x1200-1.webp"
                alt=""
              />
            </div>
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

      {/* MODAL CAROUSEL */}

      <AnimatePresence initial={false}>
        {openModal && (
          <motion.div
            className="modal-carousel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container" style={{ cursor: "zoom-in" }}>
                <div className="embla__slide">
                  <img
                    src="/src/assets/Room Scenes/Deco54/Light-Deco-Room-scene-1-1200x1200-1.webp"
                    alt=""
                    onClick={() => SetOpenModal(!openModal)}
                  />
                </div>

                <div className="embla__slide">
                  <img
                    src="/src/assets/Room Scenes/Deco54/Metal-gray-room-scene-1200x1200-1.webp"
                    alt=""
                  />
                </div>

                <div className="embla__slide">
                  <img
                    src="/src/assets/Room Scenes/Deco54/Mimo-oak-room-scene-1200x1200-1.webp"
                    alt=""
                  />
                </div>

                <div className="embla__slide">
                  <img
                    src="/src/assets/Room Scenes/Deco54/Natural-deco-room-scene-1200x1200-1.webp"
                    alt=""
                  />
                </div>

                <div className="embla__slide">
                  <img
                    src="/src/assets/Room Scenes/Deco54/Room-Scene-1200x1200-1.webp"
                    alt=""
                  />
                </div>

                <div className="embla__slide">
                  <img
                    src="/src/assets/Room Scenes/Deco54/Sak-White-room-scene-1200x1200-1.webp"
                    alt=""
                  />
                </div>
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
        )}
      </AnimatePresence>
    </>
  );
};
export default RoomSceneDeco54;
