import Footer from "@/components/footer/Footer";
import MemberTabs from "@/components/member/MemberTabs";
import BenefitLayout from "@/components/member/benefits/BenefitLayout";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="bg-softWhite">
      <Navbar />
      <div className="subRoutebg">
        <div className="bg-[url('/img/benefits_bg.webp')] subRoutebanner">
          <div className="subRouteblack">
            <h2 className="subRouteTitle animate__animated animate__fadeInUp">
              Benefit of being a Member
            </h2>
          </div>
        </div>
      </div>
      <MemberTabs />
      <BenefitLayout />
      <Footer />
    </div>
  );
};

export default page;
