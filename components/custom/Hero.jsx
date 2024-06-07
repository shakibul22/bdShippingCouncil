"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const Hero = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/home/latestNews`
        );
        setLatestNews(res.data);
      } catch (err) {
        console.error("Failed to fetch latest news:", err);
      }
    };

    fetchLatestNews();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % latestNews.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + latestNews.length) % latestNews.length
    );
  };

  return (
    <div className="relative w-full bg-transparent opacity-100 h-screen sm:h-[70vh] md:h-[45vh] lg:h-screen 3xl:h-screen bg-[url('https://res.cloudinary.com/dgohi0iqm/image/upload/v1717481512/istockphoto-1317779371-1024x1024_1_migxdp.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 flex items-center justify-end">
        {/* Outer Circle Background */}
        <div className="absolute bg-white bg-opacity-20 w-[150px] h-[150px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[400px] lg:h-[400px] top-[40%] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full z-10 flex items-center justify-center">
          {/* Middle Circle Background */}
          <div className="bg-white bg-opacity-30 w-[100px] h-[100px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[300px] lg:h-[300px] rounded-full flex items-center justify-center">
            {/* Inner Circle Background */}
            <div className="bg-white w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] lg:w-[150px] lg:h-[150px] bg-opacity-40 rounded-full"></div>
          </div>
        </div>

        {/* Text Box */}
        <div className="relative rounded-lg bg-gradient-to-r from-gray-900 to-gray-0 bg-opacity-70 p-3 sm:p-6 right-6 w-[200px] lg:w-full sm:right-16 md:right-24 lg:right-[22%] top-4 sm:top-8 md:top-12 lg:top-16 text-white text-start max-w-sm sm:max-w-md md:max-w-lg z-20">
          <h1 className="text-sm sm:text-xl md:text-2xl font-bold uppercase">
            Latest News
          </h1>
          {latestNews.length > 0 && (
            <p className="mt-2 sm:mt-4 text-xs lg:text-sm">
              {latestNews[currentIndex].news}
            </p>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-[25%] sm:bottom-[20%] md:bottom-[28%] left-[54%] transform -translate-x-1/2 flex space-x-4 z-20">
        <button
          className="bg-primaryColor text-white p-2 rounded-full text-lg sm:text-xl btn hover:bg-btn h-8 sm:h-10 w-8 sm:w-10 flex items-center justify-center"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <button
          className="bg-primaryColor text-white p-2 rounded-full text-lg sm:text-xl btn hover:bg-btn h-8 sm:h-10 w-8 sm:w-10 flex items-center justify-center"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Hero;
