import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import UsefulLinkLayout from "@/components/usefulLink/UsefulLinkLayout";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <UsefulLinkLayout />
      <Footer />
    </div>
  );
};

export default page;
