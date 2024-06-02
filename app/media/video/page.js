import Footer from "@/components/footer/Footer";
import VideoGalleryLayout from "@/components/mediaGallery/VideoGalleryLayout";
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
              Video Gallery
            </h2>
          </div>
        </div>
      </div>
      <VideoGalleryLayout />
      <Footer />
    </div>
  );
};

export default page;
