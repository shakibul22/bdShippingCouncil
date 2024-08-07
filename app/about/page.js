import AboutLayout from "@/components/about/AboutLayout";
import BreifLayout from "@/components/about/BreifLayout";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

import React from "react";

const page = () => {
  return (
    <div className="bg-softWhite">
      <Navbar />
      <div className="subRoutebg">
        <div className="bg-[url('/img/about_bg.webp')] subRoutebanner">
          <div className="subRouteblack">
            <h2 className="subRouteTitle animate__animated animate__fadeInUp">
              Brief About SCB
            </h2>
          </div>
        </div>
      </div>
      <AboutLayout />
      <BreifLayout />
      <Footer />
    </div>
  );
};

export default page;
