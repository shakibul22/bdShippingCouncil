"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

// import vid from "/public/vid/video.mp4";

const HomeAboutUs = ({ data }) => {
  return (
    <div className="bg-softWhite text-white">
      <div className="py-8 px-2 lg:py-20 xl:px-0 space-y-8 lg:flex md:gap-10 items-center justify-between max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 ">
          <Image
            className="rounded-lg h-[300px]"
            src="https://images.pexels.com/photos/2680058/pexels-photo-2680058.jpeg"
            width={800}
            height={800}
            alt="about"
          />
          <Image
            className="rounded-lg h-[300px]"
            src="https://images.pexels.com/photos/3856440/pexels-photo-3856440.jpeg"
            width={800}
            height={800}
            alt="about"
          />
        </div>
        <div className="bg-[#001e35] w-[400px] absolute right-[40%] h-[700px] z-10 p-10">
          <p className="text-xs font-semibold lg:text-4xl border-b ">
            About <span className="text-blue-700">Us</span>
          </p>
          <h3 className="text-xl font-bold mt-3 lg:text-lg">{data?.title}</h3>
          <p className="mt-4 text-justify font-light text-sm">{data?.text}</p>

          <div>
            <Link
              href={"/about"}
              className="py-2.5 px-5 w-fit leading-normal bg-btn block shadow-lg mx-auto md:mx-0 mt-8"
            >
              <p className="text-white font-semibold">Explore Now</p>
            </Link>
          </div>
        </div>

        <div>
          {/* <ReactPlayer url="https://youtu.be/JJxZy-UW3mI?si=715f0sqJSRIsH1iK" /> */}
          <video
            controls
            controlsList="nodownload noremoteplayback noplaybackrate foobar"
            // src={`/${JSON.parse(data.image).video}`}
            src={`/${data?.image.video}`}
            style={{ width: "700px", height: "auto", margin: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
