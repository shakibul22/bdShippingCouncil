"use client";
import Image from "next/image";
import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";
import { FaPlay } from "react-icons/fa";
import { useState, useRef } from "react";

const HomeAboutUs = ({ data }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <div className="bg-softWhite text-white overflow-hidden h-[850px] lg:h-full font-poppins flex justify-center py-5">
      <div className="py-8 px-2 lg:py-20 xl:px-0 space-y-8 gap-8 flex flex-col lg:flex-row md:gap-48 items-center justify-between w-full lg:max-w-5xl 3xl:max-w-7xl mx-auto">
        <div className="flex flex-col justify-start items-start mr-20 gap-4">
          <Image
            className="rounded-lg w-[320px] h-[200px] lg:w-[280px] lg:h-[300px] xl:w-[320px]"
            data-aos="fade-right"
            data-aos-once="false"
            src="/img/about1.png"
            width={800}
            height={800}
            alt="about"
          />
          <Image
            className="rounded-lg w-[320px] h-[200px] lg:w-[280px] lg:h-[300px] xl:w-[320px]"
            src="/img/about2.png"
            data-aos="fade-right"
            data-aos-once="false"
            width={800}
            height={800}
            alt="about"
          />
        </div>
        <div className="bg-[#001e35] w-[250px] overflow-hidden lg:w-[470px] 3xl:w-[500px] h-[510px] transform -translate-y-16 lg:translate-y-0 rounded absolute right-2 lg:right-[40%] 3xl:right-[45%] lg:h-[700px] z-10 p-6 pb-12 lg:p-10">
          <h2 className="text-2xl font-bold lg:text-4xl border-b ">
            About <span className="text-[#0081e9]">Us</span>
          </h2>
          <h3 className="text-md font-bold mt-3 text-[#FFF] lg:text-lg">
            {data?.title}
          </h3>
          <br />
          <p className="mt-0 md:mt-2 lg:mt-4 text-start text-[#d9dde1] text-xs lg:text-lg">
            {data?.text}
          </p>
          <div className="max-w-[200px] rounded-lg pb-2 lg:pb-6 absolute lg:bottom-3">
            <Link href="/about">
              <p className="py-2.5 px-7 flex flex-row justify-center gap-2 leading-normal bg-btn hover:bg-white hover:text-black transition duration-500 items-center rounded-sm shadow-lg mx-auto mt-4 lg:mt-12 text-white font-semibold">
                Explore Now <ImArrowUpRight2 />
              </p>
            </Link>
          </div>
        </div>
        <div
          className="relative flex flex-col gap-2 lg:w-[850px] h-[250px] lg:h-[500px]"
          data-aos="fade-left"
          data-aos-once="false"
        >
          <div className="relative w-full h-full ">
            <video
              ref={videoRef}
              autoPlay
              loop
              src={`/${data?.image?.video}`}
              className="rounded-lg w-full h-full"
              style={{ objectFit: "cover", filter: "brightness(100%)" }}
            />
            <div className="absolute inset-0 bg-[rgba(1,99,160,0.50)] rounded-t-lg"></div>
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="bg-opacity-50 bg-black rounded-full p-4"
                  onClick={handlePlay}
                >
                  <FaPlay className="text-white text-2xl" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
