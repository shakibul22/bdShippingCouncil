import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import NewsCoverage from "@/components/news/NewsCoverage";
import NewsLayout from "@/components/news/NewsLayout";
import React from "react";

const page = () => {
  return (
    <div className="bg-softWhite">
      <Navbar />
      <NewsLayout img="news_bg.webp" title={"SCB News Coverage"} />
      <div className="px-2 py-6 text-textPrimary max-w-screen-2xl mx-auto">
        <NewsCoverage />
      </div>
      <Footer />
    </div>
  );
};

export default page;
