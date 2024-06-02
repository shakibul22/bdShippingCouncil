import ChairmanLayout from "@/components/chairman/ChairmanLayout";
import ChairmanMessage from "@/components/chairman/ChairmanMessage";
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
              Message from Chairman
            </h2>
          </div>
        </div>
      </div>
      <ChairmanLayout />
      <ChairmanMessage />
      <Footer />
    </div>
  );
};

export default page;
