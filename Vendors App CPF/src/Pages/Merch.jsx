import Header from "../components/Header";
import MerchSidebar from "../Sidebars/MerchSidebar";
import Loader from "../components/Loader"
import { Suspense, Lazy } from "react";

function Merch() {
    return ( 
        <>
            <Suspense fallback={<Loader />}>
                <Header />
                <MerchSidebar />
            </Suspense>
        </>
     );
}

export default Merch;