import React, { useState } from "react";
import Header from "../components/Header";
import MerchSidebar from "../Sidebars/MerchSidebar";
import Loader from "../components/Loader";
import useEmblaCarousel from "embla-carousel-react";
import { Suspense } from "react";
import "../scss/Carousel.scss"
function Merch() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPdf, setCurrentPdf] = useState(null);
  const [emblaRef] = useEmblaCarousel();
  const openModal = (pdf) => {
    setCurrentPdf(pdf);
    setModalOpen(true);
  };
  const closeModal = () => {
    setCurrentPdf(null);
    setModalOpen(false);
  };
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <MerchSidebar />
        <div>
          <h3>Sell Sheets</h3>
        </div>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {/* Slide 1 */}
            <div
              className="embla__slide"
              onClick={() =>
                openModal("/src/assets/sellsheets/DECOtile-Bifold.pdf")
              }
            >
              <img src="/src/assets/portadas/DECOTILE-1.png" alt="Slide 1" />
            </div>
            {/* Slide 2 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/EVOLVE-1.png" alt="Slide 2" />
            </div>
            {/* Slide 3 */}
            <div
              className="embla__slide"
              onClick={() =>
                openModal(
                  "/src/assets/sellsheets/Diptico-New-Sell-Sheet-HYDROWOOD-WEB-1.pdf"
                )
              }
            >
              <img src="/src/assets/portadas/HYDROWOOD-1.png" alt="Slide 3" />
            </div>
            {/* Slide 4 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/KEYS.png" alt="Slide 4" />
            </div>
            {/* Slide 5 */}
            <div
              className="embla__slide"
              onClick={() =>
                openModal("/src/assets/sellsheets/Project-Bifold.pdf")
              }
            >
              <img src="/src/assets/portadas/PROJECT.png" alt="Slide 5" />
            </div>
            {/* Slide 6 */}
            <div
              className="embla__slide"
              onClick={() =>
                openModal("/src/assets/sellsheets/Quick-48-Bifold.pdf")
              }
            >
              <img src="/src/assets/portadas/QUICK48-1.png" alt="Slide 6" />
            </div>
            {/* Slide 7 */}
            <div
              className="embla__slide"
              onClick={() =>
                openModal("/src/assets/sellsheets/Spirit-Bifold.pdf")
              }
            >
              <img src="\src\assets\portadas\SPIRIT-XL.jpg" alt="Slide 7" />
            </div>
            {/* Slide 8 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/SUPREME-1.png" alt="Slide 8" />
            </div>
            {/* Slide 9 */}
            <div
              className="embla__slide"
              onClick={() =>
                openModal("/src/assets/sellsheets/deco54-Bifold.pdf")
              }
            >
              <img src="/src/assets/portadas/DECO54.png" alt="Slide 9" />
            </div>
          </div>
        </div>
        <div>
          <h3>Technical Data</h3>
        </div>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {/* Slide 1 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/DECOTILE-1.png" alt="Slide 1" />
            </div>
            {/* Slide 2 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/EVOLVE-1.png" alt="Slide 2" />
            </div>
            {/* Slide 3 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/HYDROWOOD-1.png" alt="Slide 3" />
            </div>
            {/* Slide 4 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/KEYS.png" alt="Slide 4" />
            </div>
            {/* Slide 5 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/PROJECT.png" alt="Slide 5" />
            </div>
            {/* Slide 6 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/QUICK48-1.png" alt="Slide 6" />
            </div>
            {/* Slide 7 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="\src\assets\portadas\SPIRIT-XL.jpg" alt="Slide 7" />
            </div>
            {/* Slide 8 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/SUPREME-1.png" alt="Slide 8" />
            </div>
            {/* Slide 9 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/DECO54.png" alt="Slide 9" />
            </div>
          </div>
        </div>
        <div>
          <h3>Legal Obligation</h3>
        </div>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {/* Slide 1 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/DECOTILE-1.png" alt="Slide 1" />
            </div>
            {/* Slide 2 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/EVOLVE-1.png" alt="Slide 2" />
            </div>
            {/* Slide 3 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/HYDROWOOD-1.png" alt="Slide 3" />
            </div>
            {/* Slide 4 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/KEYS.png" alt="Slide 4" />
            </div>
            {/* Slide 5 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/PROJECT.png" alt="Slide 5" />
            </div>
            {/* Slide 6 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/QUICK48-1.png" alt="Slide 6" />
            </div>
            {/* Slide 7 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="\src\assets\portadas\SPIRIT-XL.jpg" alt="Slide 7" />
            </div>
            {/* Slide 8 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/SUPREME-1.png" alt="Slide 8" />
            </div>
            {/* Slide 9 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/DECO54.png" alt="Slide 9" />
            </div>
          </div>
        </div>
        <div>
          <h3>Installation Manual</h3>
        </div>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {/* Slide 1 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/DECOTILE-1.png" alt="Slide 1" />
            </div>
            {/* Slide 2 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/EVOLVE-1.png" alt="Slide 2" />
            </div>
            {/* Slide 3 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/HYDROWOOD-1.png" alt="Slide 3" />
            </div>
            {/* Slide 4 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/KEYS.png" alt="Slide 4" />
            </div>
            {/* Slide 5 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/PROJECT.png" alt="Slide 5" />
            </div>
            {/* Slide 6 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/QUICK48-1.png" alt="Slide 6" />
            </div>
            {/* Slide 7 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="\src\assets\portadas\SPIRIT-XL.jpg" alt="Slide 7" />
            </div>
            {/* Slide 8 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/SUPREME-1.png" alt="Slide 8" />
            </div>
            {/* Slide 9 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/DECO54.png" alt="Slide 9" />
            </div>
          </div>
        </div>
        <div>
          <h3>Warranty Sheets</h3>
        </div>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {/* Slide 1 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/DECOTILE-1.png" alt="Slide 1" />
            </div>
            {/* Slide 2 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/EVOLVE-1.png" alt="Slide 2" />
            </div>
            {/* Slide 3 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/HYDROWOOD-1.png" alt="Slide 3" />
            </div>
            {/* Slide 4 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/KEYS.png" alt="Slide 4" />
            </div>
            {/* Slide 5 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/PROJECT.png" alt="Slide 5" />
            </div>
            {/* Slide 6 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/QUICK48-1.png" alt="Slide 6" />
            </div>
            {/* Slide 7 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="\src\assets\portadas\SPIRIT-XL.jpg" alt="Slide 7" />
            </div>
            {/* Slide 8 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/SUPREME-1.png" alt="Slide 8" />
            </div>
            {/* Slide 9 */}
            <div className="embla__slide" onClick={() => openModal("")}>
              <img src="/src/assets/portadas/DECO54.png" alt="Slide 9" />
            </div>
          </div>
        </div>
        {/* Modal */}
        {modalOpen && (
          <div className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">PDF</h5>
                  <button type="button" className="close" onClick={closeModal}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <iframe
                    src={currentPdf}
                    style={{ width: "100%", height: "500px" }}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Suspense>
    </>
  );
}
export default Merch;