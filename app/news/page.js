import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import NewsHome from "@/components/news/NewsHome";
import NewsLayout from "@/components/news/NewsLayout";

const page = () => {
  return (
    <div className="bg-softWhite">
      <Navbar />
      <NewsLayout img="news_bg.webp" title={"Shippers News"} />
      <div className="px-2 py-6 text-textPrimary max-w-screen-2xl mx-auto">
        <NewsHome />
      </div>
      <Footer />
    </div>
  );
};

export default page;
