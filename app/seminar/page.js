import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import SeminarLayout from "@/components/seminar/SeminarLayout";
import UpcomingSeminarLayout from "@/components/seminar/UpcomingSeminarLayout";
import React from "react";

const page = () => {
  return (
    <div className="bg-softWhite">
      <Navbar />
      <div className="subRoutebg">
        <div className="bg-[url('/img/seminar_bg.webp')] subRoutebanner">
          <div className="subRouteblack">
            <h2 className="subRouteTitle animate__animated animate__fadeInUp">
              Upcoming Seminar Workshop
            </h2>
          </div>
        </div>
      </div>
      <SeminarLayout />
      <UpcomingSeminarLayout />
      <Footer />
    </div>
  );
};

export default page;
