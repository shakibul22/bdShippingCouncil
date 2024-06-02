import ChairProfile from "@/components/chairman/ChairProfile";
import ChairmanLayout from "@/components/chairman/ChairmanLayout";
import ChairmanSpeech from "@/components/chairman/ChairmanSpeech";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

import React from "react";

const page = () => {
  return (
    <div className="bg-softWhite">
      <Navbar />
      <div className="subRoutebg">
        <div className="bg-[url('/img/chairman_bg.webp')] subRoutebanner">
          <div className="subRouteblack">
            <h2 className="subRouteTitle animate__animated animate__fadeInUp">
              Chairman’s Speech
            </h2>
          </div>
        </div>
      </div>
      <ChairmanLayout />
      <ChairmanSpeech />
      <Footer />
    </div>
  );
};

export default page;
