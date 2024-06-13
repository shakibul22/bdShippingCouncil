import { useContext } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { context } from "../Context/context";

const Hero = () => {
  const { latestNews, currentIndex, setCurrentIndex, direction, setDirection } =
    useContext(context);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % latestNews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + latestNews.length) % latestNews.length
    );
  };

  return (
    <div className="relative w-full h-screen sm:h-[70vh] md:h-[45vh] lg:h-screen 3xl:h-screen ">
      <figure className="relative w-full h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dgohi0iqm/image/upload/v1718215045/banner_qnj9ow.gif')",
          }}
        ></div>

        {/* Overlay color */}
        <div className="absolute inset-0 bg-primaryColor/40 bg-opacity-10"></div>
      </figure>

      <div className="flex  justify-between">
        <div class=" absolute top-[25%] left-[38%] lg:left-[48%]  3xl:left-[50%] lg:top-[30%] 3xl:top-[35%]">
          <svg
            className="absolute top-1"
            width="134"
            height="34"
            viewBox="0 0 134 34"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2" cy="17" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="17" r="1.66667" fill="#ffffff" />
            <circle cx="32" cy="17" r="1.66667" fill="#ffffff" />
            <circle cx="47" cy="17" r="1.66667" fill="#ffffff" />
            <circle cx="62" cy="17" r="1.66667" fill="#ffffff" />
            <circle cx="77" cy="17" r="1.66667" fill="#ffffff" />
          </svg>
          <svg
            className="absolute top-5"
            width="134"
            height="34"
            viewBox="0 0 134 34"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2" cy="17" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="17" r="1.66667" fill="#ffffff" />
            <circle cx="32" cy="17" r="1.66667" fill="#ffffff" />
            <circle cx="47" cy="17" r="1.66667" fill="#ffffff" />
            <circle cx="62" cy="17" r="1.66667" fill="#ffffff" />
            <circle cx="77" cy="17" r="1.66667" fill="#ffffff" />
          </svg>
        </div>
        <div class=" absolute top-[24%] left-[25%] lg:left-[44%] 3xl:left-[47.5%] 3xl:top-[37.5%] lg:top-[33%]">
          <svg
            class="absolute left-1"
            width="34"
            height="134"
            viewBox="0 0 34 134"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="hidden lg:block"
              cx="17"
              cy="2"
              r="1.66667"
              fill="#ffffff"
            />
            <circle
              className="hidden lg:block"
              cx="17"
              cy="17"
              r="1.66667"
              fill="#ffffff"
            />
            <circle cx="17" cy="32" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="47" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="62" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="77" r="1.66667" fill="#ffffff" />
          </svg>
          <svg
            class="absolute left-5"
            width="34"
            height="134"
            viewBox="0 0 34 134"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="hidden lg:block"
              cx="17"
              cy="2"
              r="1.66667"
              fill="#ffffff"
            />
            <circle
              className="hidden lg:block"
              cx="17"
              cy="17"
              r="1.66667"
              fill="#ffffff"
            />
            <circle cx="17" cy="32" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="47" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="62" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="77" r="1.66667" fill="#ffffff" />
          </svg>
        </div>
        <div class=" absolute top-[14%] lg:top-[25%] 3xl:top-[18%] w-[70px] lg:w-[95px] right-[8%] lg:right-[20%]">
          <svg
            className="absolute top-1"
            width="95"
            height="34"
            viewBox="0 0 134 34"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2" cy="17" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="17" r="1.66667" fill="#ffffff" />
            <circle cx="32" cy="17" r="1.66667" fill="#ffffff" />
            <circle cx="48" cy="17" r="1.66667" fill="#ffffff" />
          </svg>
          <svg
            className="absolute  top-6"
            width="95"
            height="34"
            viewBox="0 0 134 34"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="2" cy="17" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="17" r="1.66667" fill="#ffffff" />
            <circle cx="32" cy="17" r="1.66667" fill="#ffffff" />
            <circle cx="48" cy="17" r="1.66667" fill="#ffffff" />
          </svg>
        </div>
        {/* <div class=" absolute top-[1%] right-2">
          <svg
            class="absolute "
            width="34"
            height="134"
            viewBox="0 0 34 134"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="17" cy="2" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="17" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="32" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="47" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="62" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="77" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="92" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="107" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="122" r="1.66667" fill="#ffffff" />
          </svg>
          <svg
            class="absolute left-2"
            width="34"
            height="134"
            viewBox="0 0 34 134"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="17" cy="2" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="17" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="32" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="47" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="62" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="77" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="92" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="107" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="122" r="1.66667" fill="#ffffff" />
          </svg>
          <svg
            class="absolute left-4"
            width="34"
            height="134"
            viewBox="0 0 34 134"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="17" cy="2" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="17" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="32" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="47" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="62" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="77" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="92" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="107" r="1.66667" fill="#ffffff" />
            <circle cx="17" cy="122" r="1.66667" fill="#ffffff" />
          </svg>
        </div> */}
      </div>

      <div className="absolute inset-0 flex items-center justify-end">
        <div className="absolute bg-white/10 bg-opacity-20 w-[180px] h-[180px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[400px] lg:h-[400px] top-[40%] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full z-10 flex items-center justify-center">
          <div className="bg-white/20 bg-opacity-30 w-[140px] h-[140px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[300px] lg:h-[300px] rounded-full flex items-center justify-center">
            <div className="bg-white/25 w-[90px] h-[90px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] lg:w-[150px] lg:h-[150px] bg-opacity-40 rounded-full"></div>
          </div>
        </div>

        <div className="relative rounded-lg border-t-2 border-t-slate-50 h-auto bg-gradient-to-r from-gray-900 to-gray-0 bg-opacity-70 p-3 sm:p-6  right-6 w-[180px] lg:w-full sm:right-16 md:right-24 lg:right-[12%] 3xl:right-[22%] top-[3%] sm:top-8 md:top-[5%] lg:top-[6%] text-[#d6dbde] text-start max-w-sm sm:max-w-md md:max-w-lg z-20">
          <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase">
            Latest News
          </h1>
          {/* <AnimatePresence initial={false} custom={direction}> */}
            {latestNews.length > 0 && (
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, x: direction === 1 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className="mt-2 sm:mt-4 font-quattrocento italic tracking-1 text-xs lg:text-sm"
              >
                {latestNews[currentIndex].news}
              </motion.p>
            )}
          {/* </AnimatePresence> */}
        </div>
      </div>

      <div className="absolute bottom-[25%] sm:bottom-[20%] lg:bottom-[21%] 3xl:bottom-[27%]  left-[54%] sm:left-[60%] lg:left-[54%] transform -translate-x-1/2 flex space-x-4 z-20">
        <button
          className="bg-primaryColor/40 border border-slate-400  text-white p-2 rounded-full text-lg sm:text-xl btn hover:bg-btn h-8 sm:h-10 w-8 sm:w-10 flex items-center justify-center"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <button
          className="bg-primaryColor/40 border border-slate-400 text-white p-2 rounded-full text-lg sm:text-xl btn hover:bg-btn h-8 sm:h-10 w-8 sm:w-10 flex items-center justify-center"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Hero;
