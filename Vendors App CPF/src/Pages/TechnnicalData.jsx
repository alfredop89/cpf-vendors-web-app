import TechSidebar from "../Sidebars/TechSidebar";
import Header from "../components/Header";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader";

function TechnnicalData() {
  return (
    <>
      <Suspense fallback={<Loader />}>
      <Header />
      <TechSidebar />
      </Suspense>
    </>
  );
}

export default TechnnicalData;
