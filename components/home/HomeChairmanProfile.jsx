import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaLinkedin, FaRegEnvelope } from "react-icons/fa6";
import { ImArrowUpRight2 } from "react-icons/im";

const HomeChairmanProfile = ({ data }) => {
  return (
    <div className="bg-[url('/img/chairmanProfilebg.webp')] bg-cover px-4 xl:px-0 py-8 lg:py-24 text-white">
      <div className="flex flex-col  max-w-7xl mx-auto lg:flex-row items-center justify-center">
        <div className="lg:w-[30%] w-full">
          <Image
            src={`/img/chairman/${data?.image.image}`}
            width={450}
            height={400}
            alt="Chairman"
            className="mx-auto lg:mx-0"
          />
        </div>
        <div className="text-center min-w-[65%] lg:text-left flex-1 bg-slate-800 p-10 relative">
          <div className="absolute inset-0 bg-black opacity-30 hover:opacity-25 space-y-3 transition-opacity"></div>
          <p className="text-md lg:text-lg font-medium relative z-10">
            Chairman’s Profile
          </p>
          <h3 className="font-semibold text-lg leading-8 lg:text-4xl lg:mt-2 relative z-10">
            {data?.title}
          </h3>
          <p className="font-light text-sm lg:text-base opacity-70 text-justify mt-4 lg:mt-7 sm:w-[60%] lg:w-auto mx-auto relative z-10">
            {data?.text}
          </p>
          <p className="mt-7 text-xl lg:text-lg relative z-10">
            Md. Rezaul Karim
          </p>
          <p className="text-md lg:text-sm relative z-10">Chairman</p>

          <div className="flex flex-col lg:flex-row justify-evenly  lg:justify-between items-center relative z-10">
            <div className="flex items-center gap-2 w-fit mx-auto lg:mx-0 mt-2 lg:mt-4 text-sm lg:text-2xl">
              <Image
                src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1717734139/Gmail_Logo_brnzwh.svg"
                width={30}
                height={30}
                alt="email"
                className="cursor-pointer"
                onClick={() => {
                  window.open("mailto:test@example.com");
                }}
              />
              <Image
                src="https://res.cloudinary.com/dgohi0iqm/image/upload/v1717734462/LinkedIn_icon_qef1m9.svg"
                width={30}
                height={30}
                className="cursor-pointer"
                alt="linkedin"
              />
              {/* <FaRegEnvelope
                className="opacity-50 hover:opacity-90 cursor-pointer"
                
              />
              <FaLinkedin className="opacity-50 hover:opacity-90 cursor-pointer" /> */}
            </div>

            <Link href={"/chairman"} className="w-[200px]">
              <p className="py-2.5 px-7 w-fit flex flex-row justify-center gap-2 leading-normal bg-btn items-center rounded-sm shadow-lg mx-auto mt-4 lg:mt-12 text-white font-semibold">
                Read More <ImArrowUpRight2 />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeChairmanProfile;
