import TechSidebar from "../Sidebars/TechSidebar";
import Header from "../components/Header";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader";
import "../scss/TechnnicalData.scss"

function TechnnicalData() {
  return (
    <>
      <Suspense fallback={<Loader />}>
      <Header />

      <div className="technnical-data-container">
          <h1>CPF Technnical Data</h1>
        </div>
      <TechSidebar />
      </Suspense>


    </>
  );
}

export default TechnnicalData;
