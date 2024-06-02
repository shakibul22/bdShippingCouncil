"use client";

import Link from "next/link";
import React from "react";

// import vid from "/public/vid/video.mp4";

const HomeAboutUs = ({ data }) => {
  return (
    <div className="bg-softWhite text-textPrimary">
      <div className="py-8 px-2 lg:py-20 xl:px-0 space-y-8 lg:flex md:gap-10 items-center justify-between max-w-screen-2xl mx-auto">
        <div className="sm:w-[60%] mx-auto">
          <p className="text-xs font-semibold lg:text-lg">About Us</p>
          <h3 className="text-xl font-bold mt-3 lg:text-4xl">{data?.title}</h3>
          <p className="mt-4 text-justify font-light text-sm lg:text-base">
            {data?.text}
          </p>

          <div>
            <Link
              href={"/about"}
              className="py-2.5 px-5 w-fit leading-normal bg-secondaryColor block shadow-lg mx-auto md:mx-0 mt-8"
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
