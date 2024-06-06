import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-full w-full">
      {/* <Image
        src="/container-ship.jpg" // Ensure this path is correct for your image
        alt="Container Ship"
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      /> */}
      <div className="absolute inset-0 flex items-center justify-end ">
        {/* Outer Circle Background */}
        <div
          className="absolute bg-white bg-opacity-20 rounded-full z-10 flex items-center justify-center"
          style={{
            width: "400px",
            height: "400px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Middle Circle Background */}
          <div
            className="bg-white bg-opacity-30 rounded-full flex items-center justify-center"
            style={{
              width: "300px",
              height: "300px",
            }}
          >
            {/* Inner Circle Background */}
            <div
              className="bg-white bg-opacity-40 rounded-full"
              style={{
                width: "150px",
                height: "150px",
              }}
            ></div>
          </div>
        </div>

        {/* Text Box */}
        <div className="relative rounded-lg  bg-gradient-to-r from-gray-900 to-gray-600/30 bg-opacity-70 p-6 right-32 top-16 text-white text-start max-w-lg z-20">
          <h1 className="text-2xl font-bold uppercase">Latest News</h1>
          <p className="mt-4">
            “Shipping Industry Embraces Sustainability for Climate Action:
            Global shipping leaders adopt eco-friendly practices, using
            alternative fuels and tech innovations to combat climate change”
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-[27%] left-[55%] transform -translate-x-1/2 flex space-x-4 z-20">
        <button className="bg-white text-black p-2 rounded-full h-10 w-10 flex items-center justify-center">
          &lt;
        </button>
        <button className="bg-white text-black p-2 rounded-full h-10 w-10 flex items-center justify-center">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Hero;
