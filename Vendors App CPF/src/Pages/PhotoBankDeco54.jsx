import React from "react";
import "../scss/PhotoBankDeco54.scss";
import Header from "../components/Header";
import PhotoBankSidebar from "../Sidebars/PhotoBankSidebar";
import EmblaCarousel from "../components/EmblaCarousel";
import ProductData from "/src/ProductData.json";
import { motion } from "framer-motion";

function PhotoBankDeco54() {


  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);



  const deco54 = ProductData.filter(
    (prod) =>
      prod.Categories === "Deco54 Collection, Get Inspired, Vinyl Flooring"
  );
  console.log(deco54);

  return (
    <>
      <Header />
      <PhotoBankSidebar />
      {deco54.map((prod) => {
        return (
          <motion.div
            className="embla"
            initial={{ y: 200, opcacity: 0 }}
            whileInView={{ y: 0, opcacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                <Link>
                  <div className="embla__slide">
                    <img src="src/assets/DECO54.png" alt="" />
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
      })}
    </>
  );
}
export default PhotoBankDeco54;
