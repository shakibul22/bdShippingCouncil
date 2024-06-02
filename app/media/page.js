import Footer from "@/components/footer/Footer";
import PhotoGalleryLayout from "@/components/mediaGallery/PhotoGalleryLayout";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="bg-softWhite">
      <Navbar />
      <div className="subRoutebg">
        <div className="bg-[url('/img/media_bg.webp')] subRoutebanner">
          <div className="subRouteblack">
            <h2 className="subRouteTitle animate__animated animate__fadeInUp">
              Photo Gallery
            </h2>
          </div>
        </div>
      </div>
      <PhotoGalleryLayout />
      <Footer />
    </div>
  );
};

export default page;
