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
    <div className="bg-softWhite text-white overflow-hidden h-[500px] lg:h-full flex justify-center">
      <div className="py-8 px-2 lg:py-20 xl:px-0 space-y-8 flex lg:flex md:gap-48 items-center justify-between max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <Image
            className="rounded-lg w-[150px] h-[150px] lg:w-full lg:h-[300px] "
            src="https://images.pexels.com/photos/2680058/pexels-photo-2680058.jpeg"
            width={800}
            height={800}
            alt="about"
          />
          <Image
            className="rounded-lg w-[150px] h-[150px] lg:w-full lg:h-[300px]"
            src="https://images.pexels.com/photos/3856440/pexels-photo-3856440.jpeg"
            width={800}
            height={800}
            alt="about"
          />
        </div>
        <div className="bg-[#001e35] w-[250px] overflow-hidden  lg:w-[500px] rounded absolute right-24 lg:right-[45%] h-[450px] lg:h-[700px] z-10 p-4 lg:p-10">
          <h2 className="text-xs font-semibold lg:text-4xl border-b ">
            About <span className="text-blue-700">Us</span>
          </h2>
          <p className="text-md font-bold mt-3 lg:text-lg">{data?.title}</p>{" "}
          <br />
          <p className=" mt-2 lg:mt-4 text-justify font-light text-xs lg:text-sm">
            {data?.text}
          </p>
          <div className="max-w-[200px] rounded-lg">
            <Link href="/about">
              <p className="py-2.5 px-7 flex flex-row justify-center gap-2 leading-normal bg-btn items-center rounded-sm shadow-lg mx-auto  mt-4 lg:mt-12 text-white font-semibold">
                Explore Now <ImArrowUpRight2 />
              </p>
            </Link>
          </div>
        </div>
        <div className="relative flex flex-col gap-4 lg:w-[850px] h-[200px] lg:h-[500px]">
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              autoPlay
              loop
              src={`/${data?.image.video}`}
              className="rounded-lg w-full h-full"
              style={{ objectFit: "cover" }}
            />
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
