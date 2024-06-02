import Footer from "@/components/footer/Footer";
import MemberTabs from "@/components/member/MemberTabs";
import EligibilityLayout from "@/components/member/eligibility/EligibilityLayout";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="bg-softWhite">
      <Navbar />
      <div className="subRoutebg">
        <div className="bg-[url('/img/membership_bg.webp')] subRoutebanner">
          <div className="subRouteblack">
            <h2 className="subRouteTitle animate__animated animate__fadeInUp">
              Eligibility
            </h2>
          </div>
        </div>
      </div>
      <MemberTabs />
      <EligibilityLayout />
      <Footer />
    </div>
  );
};

export default page;
