import Footer from "@/components/footer/Footer";
import CondolenceLayout from "@/components/mediaGallery/CondolenceLayout";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="bg-softWhite">
      <Navbar />
      <div className="subRoutebg">
        <div className="bg-[url('/img/condolence_bg.webp')] subRoutebanner">
          <div className="subRouteblack">
            <h2 className="subRouteTitle animate__animated animate__fadeInUp">
              Condolence
            </h2>
          </div>
        </div>
      </div>
      <CondolenceLayout />
      <Footer />
    </div>
  );
};

export default page;
