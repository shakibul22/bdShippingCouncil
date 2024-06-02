import ContactUsLayout from "@/components/contactUs/ContactUsLayout";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <ContactUsLayout />
      <Footer />
    </div>
  );
};

export default page;
