import React from "react";
import Header from "../components/Header";
import PhotoBankSidebar from "../Sidebars/PhotoBankSidebar";
import Deco54Carousel from "../RoomScenesCarousels/Deco54Carousel";

function PhotoBankDeco54() {
  return (
    <>
      <Header />
      <PhotoBankSidebar />
      <div className="photobank-container">
        <h2>Room Scenes - Deco54</h2>
        <Deco54Carousel />
      </div>
    </>
  );
}

export default PhotoBankDeco54;
