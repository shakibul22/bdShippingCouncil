import Officials from "@/components/about/Officials";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

import React from "react";

const page = () => {
  return (
    <div className="bg-softWhite">
      <Navbar />
      <div className="subRoutebg">
        <div className="bg-[url('/img/former_bg.webp')] subRoutebanner">
          <div className="subRouteblack">
            <h2 className="subRouteTitle animate__animated animate__fadeInUp">
              Office Bearers and Directors ({new Date().getFullYear() } & {new Date().getFullYear()+1})
            </h2>
          </div>
        </div>
      </div>

      <Officials />

      <Footer />
    </div>
  );
};

export default page;
