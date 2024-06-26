import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import NewsLayout from "@/components/news/NewsLayout";
import NewsRecom from "@/components/news/NewsRecom";
import NewsRecomPort from "@/components/news/NewsRecomPort";

const page = () => {
  return (
    <div className="bg-softWhite">
      <Navbar />
      <NewsLayout img="news_bgr.webp" title={"SCB Port Recommendations"} />
      <div className="px-2 py-6 text-textPrimary max-w-screen-2xl mx-auto">
        <NewsRecomPort />
      </div>
      <Footer />
    </div>
  );
};

export default page;
