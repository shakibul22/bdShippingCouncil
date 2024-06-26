import Footer from "@/components/footer/Footer";
import MemberTabs from "@/components/member/MemberTabs";
import ApplicationLayout from "@/components/member/application/ApplicationLayout";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="bg-softWhite">
      <Navbar />
      <div className="subRoutebg">
        <div className="bg-[url('/img/application_bg.webp')] subRoutebanner">
          <div className="subRouteblack">
            <h2 className="subRouteTitle animate__animated animate__fadeInUp">
              Application Procedure
            </h2>
          </div>
        </div>
      </div>
      <MemberTabs />
      <ApplicationLayout />
      <Footer />
    </div>
  );
};

export default page;
