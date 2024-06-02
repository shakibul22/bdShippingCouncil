import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaLinkedin, FaRegEnvelope, FaXTwitter } from "react-icons/fa6";

const HomeChairmanProfile = ({ data }) => {
  return (
    <div className="bg-[url('/img/chairmanProfilebg.webp')] bg-cover px-2 xl:px-0 py-8 lg:py-24 text-white">
      <div className="flex flex-col gap-6 max-w-screen-2xl mx-auto lg:flex-row items-center justify-start">
        <div className="w-fit">
          <Image
            src={`/img/chairman/${data?.image.image}`}
            // src={`/img/chairman/${JSON.parse(data.image).image}`}
            width={450}
            height={400}
            alt="Chairman"
            className="max-w-[60%] lg:max-w-[85%] mx-auto lg:mx-0"
          />
        </div>
        <div className="text-center lg:text-left flex-1">
          <p className="text-xs lg:text-lg font-medium">Chairman’s Profile</p>
          <h3 className="font-semibold leading-8 lg:text-4xl lg:mt-2">
            {data?.title}
          </h3>
          <p className="font-light text-sm lg:text-base opacity-70 text-justify mt-4 lg:mt-7 sm:w-[60%] lg:w-auto mx-auto">
            {data?.text}
          </p>
          <p className="mt-7 text-sm lg:text-lg">Md. Rezaul Karim</p>
          <p className="text-xs lg:text-sm">Chairman</p>

          <div className="flex items-center gap-2 w-fit mx-auto lg:mx-0 mt-2 lg:mt-4 text-sm lg:text-2xl">
            <FaRegEnvelope
              className="opacity-50 hover:opacity-90 cursor-pointer"
              onClick={() => {
                window.open("mailto:test@example.com");
              }}
            />
            <FaLinkedin className="opacity-50 hover:opacity-90 cursor-pointer" />
          </div>

          <Link
            href={"/chairman"}
            className="py-2.5 px-5 w-fit leading-normal bg-secondaryColor block shadow-lg mt-8 mx-auto lg:mx-0"
          >
            <p className="text-white font-semibold">Read More</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeChairmanProfile;
