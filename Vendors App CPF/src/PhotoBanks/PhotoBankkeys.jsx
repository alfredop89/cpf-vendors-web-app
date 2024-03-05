import React from "react";
import Header from "../components/Header";
import PhotoBankSidebar from "../Sidebars/PhotoBankSidebar";
import KeysCarousel from "../RoomScenesCarousels/KeysCarousel";
import KeysCarouselInstallation from "../RoomScenesCarousels/KeysCarouselInstallation"
import Footer from "../components/Footer"

function PhotoBankDeco54() {
  return (
    <>
      <Header />
      <PhotoBankSidebar />
      <div className="photobank-container">
        <h2>Room Scenes - Keys</h2>
        <KeysCarousel />
        <h2>Installation</h2>
        <KeysCarouselInstallation />
      </div>
      <Footer />
    </>
  );
}

export default PhotoBankDeco54;
