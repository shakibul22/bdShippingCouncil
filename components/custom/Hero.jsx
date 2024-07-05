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
    <div className="relative w-full h-screen sm:h-[70vh] md:h-[45vh] lg:h-screen 3xl:h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay color */}
      <div className="absolute inset-0 bg-primaryColor/50 bg-opacity-40 lg:bg-opacity-10"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute bg-white/5 shadow-transparent bg-opacity-20 w-[180px] h-[180px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] 3xl:w-[400px] 3xl:h-[400px] top-[40%] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full z-10 flex items-center justify-center">
          <div className="bg-white/5 shadow-2xl bg-opacity-30 w-[140px] h-[140px] sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] lg:w-[220px] lg:h-[220px] 3xl:w-[300px] 3xl:h-[300px] rounded-full flex items-center justify-center">
            <div className="bg-white/20 w-[90px] h-[90px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] lg:w-[120px] lg:h-[120px] 3xl:w-[150px] 3xl:h-[150px] bg-opacity-40 rounded-full"></div>
          </div>
        </div>

        <div className="relative flex justify-start items-start transform translate-x-14 -translate-y-0 md:-translate-y-4 lg:translate-x-[53%] lg:translate-y-11 z-40 3xl:translate-y-20">
          <div className="transform -translate-y-12 lg:-translate-y-20 -translate-x-3">
            <svg
              className="absolute top-0"
              width="134"
              height="34"
              viewBox="0 0 134 34"
              fill="#cedae2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="17" r="2.5" fill="#cedae2" />
              <circle cx="17" cy="17" r="2.5" fill="#cedae2" />
              <circle cx="32" cy="17" r="2.5" fill="#cedae2" />
            </svg>
            <svg
              className="absolute top-4"
              width="134"
              height="34"
              viewBox="0 0 134 34"
              fill="#cedae2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="17" r="2.5" fill="#cedae2" />
              <circle cx="17" cy="17" r="2.5" fill="#cedae2" />
              <circle cx="32" cy="17" r="2.5" fill="#cedae2" />
            </svg>
          </div>
          <div className="transform -translate-x-16 -translate-y-16 lg:-translate-y-16">
            <svg
              className="absolute left-1"
              width="34"
              height="134"
              viewBox="0 0 34 134"
              fill="#cedae2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="hidden lg:block"
                cx="17"
                cy="2"
                r="2.5"
                fill="#cedae2"
              />
              <circle
                className="hidden lg:block"
                cx="17"
                cy="17"
                r="2.5"
                fill="#cedae2"
              />
              <circle cx="17" cy="32" r="2.5" fill="#cedae2" />
              <circle cx="17" cy="47" r="2.5" fill="#cedae2" />
              <circle cx="17" cy="62" r="2.5" fill="#cedae2" />
              <circle
                className="lg:hidden block"
                cx="17"
                cy="77"
                r="2.5"
                fill="#cedae2"
              />
              <circle
                className="lg:hidden block"
                cx="17"
                cy="92"
                r="2.5"
                fill="#cedae2"
              />
            </svg>
            <svg
              className="absolute left-5"
              width="34"
              height="134"
              viewBox="0 0 34 134"
              fill="#cedae2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="hidden lg:block"
                cx="17"
                cy="2"
                r="2.5"
                fill="#cedae2"
              />
              <circle
                className="hidden lg:block"
                cx="17"
                cy="17"
                r="2.5"
                fill="#cedae2"
              />
              <circle cx="17" cy="32" r="2.5" fill="#cedae2" />
              <circle cx="17" cy="47" r="2.5" fill="#cedae2" />
              <circle cx="17" cy="62" r="2.5" fill="#cedae2" />
              <circle
                className="lg:hidden block"
                cx="17"
                cy="77"
                r="2.5"
                fill="#cedae2"
              />
              <circle
                className="lg:hidden block"
                cx="17"
                cy="92"
                r="2.5"
                fill="#cedae2"
              />
            </svg>
          </div>
          <div className="hidden md:block transform -translate-y-12 lg:-translate-y-48 translate-x-80">
            <svg
              className="absolute top-0"
              width="134"
              height="34"
              viewBox="0 0 134 34"
              fill="#cedae2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="17" r="2.5" fill="#cedae2" />
              <circle cx="17" cy="17" r="2.5" fill="#cedae2" />
              <circle cx="32" cy="17" r="2.5" fill="#cedae2" />
            </svg>
            <svg
              className="absolute top-4"
              width="134"
              height="34"
              viewBox="0 0 134 34"
              fill="#cedae2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="17" r="2.5" fill="#cedae2" />
              <circle cx="17" cy="17" r="2.5" fill="#cedae2" />
              <circle cx="32" cy="17" r="2.5" fill="#cedae2" />
            </svg>
          </div>
          <div className=" hidden mdLblock transform translate-x-[348px] -translate-y-16 lg:-translate-y-48">
            <svg
              className="absolute left-1"
              width="34"
              height="134"
              viewBox="0 0 34 134"
              fill="#cedae2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="hidden lg:block"
                cx="17"
                cy="2"
                r="2.5"
                fill="#cedae2"
              />
              <circle
                className="hidden lg:block"
                cx="17"
                cy="17"
                r="2.5"
                fill="#cedae2"
              />
              <circle
                className="hidden lg:block"
                cx="17"
                cy="32"
                r="2.5"
                fill="#cedae2"
              />
            </svg>
            <svg
              className="absolute left-5"
              width="34"
              height="134"
              viewBox="0 0 34 134"
              fill="#cedae2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="hidden lg:block"
                cx="17"
                cy="2"
                r="2.5"
                fill="#cedae2"
              />
              <circle
                className="hidden lg:block"
                cx="17"
                cy="17"
                r="2.5"
                fill="#cedae2"
              />
              <circle
                className="hidden lg:block"
                cx="17"
                cy="32"
                r="2.5"
                fill="#cedae2"
              />
            </svg>
          </div>
          <div>
            <div
              className="rounded-lg border-t-2 border-t-slate-50 h-auto p-3 3xl:p-5 bg-opacity-70 w-[180px] md:w-[280px] 3xl:w-full max-w-sm md:max-w-lg 3xl:max-w-screen-sm lg:w-full text-start z-50"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0, 30, 53, 0.95) 0%, rgba(0, 30, 53, 0) 100%)",
              }}
            >
              <h1 className="text-sm sm:text-xl text-[#cccccc] md:text-2xl lg:text-3xl font-bold uppercase">
                Latest News
              </h1>
              {latestNews.length > 0 && (
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, x: direction === 1 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 2 }}
                  className="mt-3 text-lg sm:text-xl"
                >
                  <span className="font-bold text-xl text-[#d0d5d9]">“</span>
                  <span
                    className="leading-[1.15] text-[#d0d5d9] text-[12px] md:text-[16px] 3xl:text-[20px]"
                    style={{
                      fontFamily: "Quattrocento Sans",
                      fontStyle: "italic",
                    }}
                  >
                    {latestNews[currentIndex].news}
                  </span>
                  <span className="font-bold text-[#d0d5d9] text-xl">”</span>
                </motion.p>
              )}
            </div>
            <div className="mt-4 overflow-hidden flex space-x-4 z-50">
              <button
                className="bg-primaryColor/40  text-white rounded-full text-lg  transition duration-500 sm:text-xl btn hover:bg-btn h-8 sm:h-10 w-8 sm:w-10 flex items-center justify-center"
                onClick={handlePrev}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M1.42057 24.1761C1.42057 11.7059 11.5297 1.59684 23.9998 1.59684C36.47 1.59684 46.5791 11.7059 46.5791 24.1761C46.5791 36.6463 36.47 46.7554 23.9998 46.7554C11.5297 46.7554 1.42057 36.6463 1.42057 24.1761Z"
                    fill="#0C3352"
                    fill-opacity="0.5"
                  />
                  <path
                    d="M1.42057 24.1761C1.42057 11.7059 11.5297 1.59684 23.9998 1.59684C36.47 1.59684 46.5791 11.7059 46.5791 24.1761C46.5791 36.6463 36.47 46.7554 23.9998 46.7554C11.5297 46.7554 1.42057 36.6463 1.42057 24.1761Z"
                    stroke="white"
                    stroke-width="0.5"
                  />
                  <path
                    d="M1.42057 24.1761C1.42057 11.7059 11.5297 1.59684 23.9998 1.59684C36.47 1.59684 46.5791 11.7059 46.5791 24.1761C46.5791 36.6463 36.47 46.7554 23.9998 46.7554C11.5297 46.7554 1.42057 36.6463 1.42057 24.1761Z"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="0.5"
                  />
                  <path
                    d="M27.0143 16L19 23.5L27.0143 31L29 29.1418L22.9714 23.5L29 17.8582L27.0143 16Z"
                    fill="white"
                  />
                  <path
                    d="M27.0143 16L19 23.5L27.0143 31L29 29.1418L22.9714 23.5L29 17.8582L27.0143 16Z"
                    fill="black"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M27.0143 16L19 23.5L27.0143 31L29 29.1418L22.9714 23.5L29 17.8582L27.0143 16Z"
                    stroke="white"
                  />
                </svg>
              </button>
              <button
                className="bg-primaryColor/40  text-white rounded-full transition duration-500 text-lg sm:text-xl btn hover:bg-btn h-8 sm:h-10 w-8 sm:w-10 flex items-center justify-center"
                onClick={handleNext}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M46.5794 23.8239C46.5794 36.2941 36.4703 46.4032 24.0002 46.4032C11.53 46.4032 1.4209 36.2941 1.4209 23.8239C1.4209 11.3537 11.53 1.24463 24.0002 1.24463C36.4703 1.24463 46.5794 11.3537 46.5794 23.8239Z"
                    fill="#0C3352"
                    fill-opacity="0.5"
                  />
                  <path
                    d="M46.5794 23.8239C46.5794 36.2941 36.4703 46.4032 24.0002 46.4032C11.53 46.4032 1.4209 36.2941 1.4209 23.8239C1.4209 11.3537 11.53 1.24463 24.0002 1.24463C36.4703 1.24463 46.5794 11.3537 46.5794 23.8239Z"
                    stroke="white"
                    stroke-width="0.5"
                  />
                  <path
                    d="M46.5794 23.8239C46.5794 36.2941 36.4703 46.4032 24.0002 46.4032C11.53 46.4032 1.4209 36.2941 1.4209 23.8239C1.4209 11.3537 11.53 1.24463 24.0002 1.24463C36.4703 1.24463 46.5794 11.3537 46.5794 23.8239Z"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="0.5"
                  />
                  <path
                    d="M20.9857 32L29 24.5L20.9857 17L19 18.8582L25.0286 24.5L19 30.1418L20.9857 32Z"
                    fill="white"
                  />
                  <path
                    d="M20.9857 32L29 24.5L20.9857 17L19 18.8582L25.0286 24.5L19 30.1418L20.9857 32Z"
                    fill="black"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M20.9857 32L29 24.5L20.9857 17L19 18.8582L25.0286 24.5L19 30.1418L20.9857 32Z"
                    stroke="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
