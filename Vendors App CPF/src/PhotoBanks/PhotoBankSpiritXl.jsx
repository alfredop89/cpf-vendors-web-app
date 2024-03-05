import React from "react";
import Header from "../components/Header";
import PhotoBankSidebar from "../Sidebars/PhotoBankSidebar";
import SpiritXlCarousel from "../RoomScenesCarousels/SpiritXlCarousel"

function PhotoBankSpiritXl() {
  return (
    <>
      <Header />
      <PhotoBankSidebar />
      <div className="photobank-container">
        <h2>Room Scenes - Spirit XL</h2>
        <SpiritXlCarousel />
      </div>
    </>
  );
}

export default PhotoBankSpiritXl;
